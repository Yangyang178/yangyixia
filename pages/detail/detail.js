const api = require('../../utils/api')
const storage = require('../../utils/storage')
const analytics = require('../../utils/analytics')

Page({
  data: {
    loading: true,
    ingredient: null,
    isFav: false,
    constitutionTip: null,
    relatedIngredients: []
  },

  onLoad(options) {
    analytics.track('page_view', { page: 'detail', id: options.id })
    if (options.id) {
      const ingredient = api.getIngredientById(options.id)
      if (ingredient) {
        storage.addHistory(options.id)
        const isFav = storage.isFavorite(options.id)
        const relatedIngredients = api.getIngredientsByCategory(ingredient.effectCategory)
          .filter(function(item) { return item.id !== ingredient.id })
          .slice(0, 6)
        this.setData({ ingredient, isFav, relatedIngredients, loading: false })
        this.checkConstitution(ingredient)
      }
    }
  },

  checkConstitution(ingredient) {
    const app = getApp()
    const constitution = app.globalData.constitution
    if (!constitution) return

    const isSuitable = ingredient.suitableConstitutions.includes(constitution.name)
    const isCaution = ingredient.cautionConstitutions.includes(constitution.name)

    if (isSuitable) {
      this.setData({
        constitutionTip: {
          icon: '✅',
          text: `您体质为${constitution.name}，此食材与您匹配`
        }
      })
    } else if (isCaution) {
      this.setData({
        constitutionTip: {
          icon: '⚠️',
          text: `您体质为${constitution.name}，此食材建议慎用`
        }
      })
    }
  },

  toggleFav() {
    if (!this.data.ingredient) return
    analytics.track('toggle_fav', { id: this.data.ingredient.id, isFav: !this.data.isFav })
    storage.toggleFavorite(this.data.ingredient.id)
    const newFav = !this.data.isFav
    this.setData({ isFav: newFav })
    wx.showToast({
      title: newFav ? '已收藏' : '已取消收藏',
      icon: 'none'
    })
  },

  goMatch() {
    if (this.data.ingredient) {
      analytics.track('add_to_match', { id: this.data.ingredient.id })
      storage.setPendingMatchId(this.data.ingredient.id)
    }
    wx.switchTab({ url: '/pages/match/match' })
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.redirectTo({ url: `/pages/detail/detail?id=${id}` })
  },

  onShareAppMessage() {
    return {
      title: this.data.ingredient.name + ' - ' + this.data.ingredient.summary,
      path: '/pages/detail/detail?id=' + (this.data.ingredient ? this.data.ingredient.id : ''),
      imageUrl: ''
    }
  }
})
