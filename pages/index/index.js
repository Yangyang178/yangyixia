const api = require('../../utils/api')
const storage = require('../../utils/storage')

Page({
  data: {
    constitution: null,
    effectCategories: [],
    natureTypes: [],
    hotIngredients: [],
    categoryColors: ['#5B8C5A', '#D4A574', '#E57373', '#64B5F6', '#BA68C8', '#4DB6AC', '#FFB74D', '#7986CB'],
    natureColors: ['#2196F3', '#42A5F5', '#64B5F6', '#81C784', '#FFB74D', '#FF8A65', '#E57373']
  },

  onShow() {
    const app = getApp()
    const constitution = app.globalData.constitution
    if (constitution) {
      this.setData({ constitution })
    }

    this.setData({
      effectCategories: api.getEffectCategories(),
      natureTypes: api.getNatureTypes(),
      hotIngredients: api.getHotIngredients()
    })
  },

  goSearch() {
    wx.navigateTo({ url: '/pages/search/search' })
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id
    storage.addHistory(id)
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` })
  },

  goCategory(e) {
    const { type, value } = e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/search/search?type=${type}&value=${encodeURIComponent(value)}` })
  },

  goMatch() {
    wx.switchTab({ url: '/pages/match/match' })
  },

  goQuiz() {
    wx.switchTab({ url: '/pages/quiz/quiz' })
  }
})
