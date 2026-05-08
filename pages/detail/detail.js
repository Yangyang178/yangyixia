const api = require('../../utils/api')
const storage = require('../../utils/storage')

Page({
  data: {
    ingredient: null,
    isFav: false,
    constitutionTip: null
  },

  onLoad(options) {
    if (options.id) {
      const ingredient = api.getIngredientById(options.id)
      if (ingredient) {
        storage.addHistory(options.id)
        const isFav = storage.isFavorite(options.id)
        this.setData({ ingredient, isFav })
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
    const favorites = storage.toggleFavorite(this.data.ingredient.id)
    this.setData({ isFav: !this.data.isFav })
    wx.showToast({
      title: this.data.isFav ? '已收藏' : '已取消收藏',
      icon: 'none'
    })
  },

  goMatch() {
    wx.switchTab({ url: '/pages/match/match' })
  }
})
