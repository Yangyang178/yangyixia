const api = require('../../utils/api')

Page({
  data: {
    keyword: '',
    searchResults: [],
    selectedIngredients: [],
    selectedIds: [],
    commonIngredients: [],
    matchResult: null,
    constitutionMatch: null
  },

  onShow() {
    this.loadCommonIngredients()
  },

  loadCommonIngredients() {
    const commonIds = ['gouqi', 'juhua', 'hongzao', 'guiyuan', 'meiguihua', 'chenpi', 'yimi', 'shanyao', 'huangqi', 'fuling']
    const commonIngredients = commonIds.map(id => api.getIngredientById(id)).filter(Boolean)
    this.setData({ commonIngredients })
  },

  onInput(e) {
    const keyword = e.detail.value
    this.setData({ keyword })
    if (keyword && keyword.trim()) {
      const results = api.searchIngredients(keyword)
      this.setData({ searchResults: results })
    } else {
      this.setData({ searchResults: [] })
    }
  },

  isSelected(id) {
    return this.data.selectedIds.indexOf(id) > -1
  },

  addIngredient(e) {
    const id = e.currentTarget.dataset.id
    const selectedIngredients = this.data.selectedIngredients.slice()
    const selectedIds = this.data.selectedIds.slice()
    if (selectedIngredients.length >= 5) {
      wx.showToast({ title: '最多选择5种食材', icon: 'none' })
      return
    }
    if (selectedIds.indexOf(id) > -1) {
      this.removeIngredientById(id)
      return
    }
    const ingredient = api.getIngredientById(id)
    if (ingredient) {
      selectedIngredients.push(ingredient)
      selectedIds.push(id)
      this.setData({ selectedIngredients, selectedIds, matchResult: null })
    }
  },

  removeIngredient(e) {
    const index = e.currentTarget.dataset.index
    const selectedIngredients = this.data.selectedIngredients.slice()
    const selectedIds = this.data.selectedIds.slice()
    selectedIngredients.splice(index, 1)
    selectedIds.splice(index, 1)
    this.setData({ selectedIngredients, selectedIds, matchResult: null })
  },

  removeIngredientById(id) {
    const index = this.data.selectedIds.indexOf(id)
    if (index === -1) return
    const selectedIngredients = this.data.selectedIngredients.slice()
    const selectedIds = this.data.selectedIds.slice()
    selectedIngredients.splice(index, 1)
    selectedIds.splice(index, 1)
    this.setData({ selectedIngredients, selectedIds, matchResult: null })
  },

  clearAll() {
    this.setData({
      selectedIngredients: [],
      selectedIds: [],
      matchResult: null,
      constitutionMatch: null,
      keyword: '',
      searchResults: []
    })
  },

  checkMatch() {
    const matchResult = api.checkMatch(this.data.selectedIds)
    this.setData({ matchResult })

    const app = getApp()
    const constitution = app.globalData.constitution
    if (constitution) {
      const selected = this.data.selectedIngredients
      const suitable = selected.filter(i => i.suitableConstitutions.indexOf(constitution.name) > -1)
      const caution = selected.filter(i => i.cautionConstitutions.indexOf(constitution.name) > -1)
      let text = '您体质为' + constitution.name + '。'
      if (suitable.length > 0) {
        text += '其中' + suitable.map(i => i.name).join('、') + '与您的体质匹配。'
      }
      if (caution.length > 0) {
        text += caution.map(i => i.name).join('、') + '建议慎用。'
      }
      if (suitable.length === 0 && caution.length === 0) {
        text += '所选食材与您的体质暂无明确冲突。'
      }
      this.setData({ constitutionMatch: text })
    }
  }
})
