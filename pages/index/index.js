const api = require('../../utils/api')
const storage = require('../../utils/storage')
const analytics = require('../../utils/analytics')

Page({
  data: {
    constitution: null,
    effectCategories: [],
    natureTypes: [],
    hotIngredients: [],
    seasonData: null,
    hotKeywords: ['枸杞', '菊花', '红枣', '黄芪', '陈皮', '薏米', '玫瑰花', '银耳'],
    categoryColors: ['#5B8C5A', '#D4A574', '#E57373', '#64B5F6', '#BA68C8', '#4DB6AC', '#FFB74D', '#7986CB'],
    natureColors: ['#2196F3', '#42A5F5', '#64B5F6', '#81C784', '#FFB74D', '#FF8A65', '#E57373']
  },

  onShow() {
    analytics.track('page_view', { page: 'index' })
    const app = getApp()
    const constitution = app.globalData.constitution
    if (constitution) {
      this.setData({ constitution })
    }

    this.setData({
      effectCategories: api.getEffectCategories(),
      natureTypes: api.getNatureTypes(),
      hotIngredients: api.getHotIngredients(),
      seasonData: api.getSeasonRecommendations()
    })
  },

  goSearch() {
    analytics.track('click_search', { from: 'index' })
    wx.navigateTo({ url: '/pages/search/search' })
  },

  goHotSearch(e) {
    analytics.track('click_hot_keyword', { keyword: e.currentTarget.dataset.keyword })
    wx.navigateTo({ url: '/pages/search/search?keyword=' + encodeURIComponent(e.currentTarget.dataset.keyword) })
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id
    analytics.track('click_ingredient', { id: e.currentTarget.dataset.id, from: 'index_hot' })
    storage.addHistory(id)
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` })
  },

  goCategory(e) {
    const { type, value } = e.currentTarget.dataset
    wx.navigateTo({ url: `/pages/search/search?type=${type}&value=${encodeURIComponent(value)}` })
  },

  goMatch() {
    analytics.track('click_match', { from: 'index' })
    wx.switchTab({ url: '/pages/match/match' })
  },

  goQuiz() {
    analytics.track('click_quiz', { from: 'index' })
    wx.switchTab({ url: '/pages/quiz/quiz' })
  }
})
