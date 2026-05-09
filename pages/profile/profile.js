const api = require('../../utils/api')
const storage = require('../../utils/storage')

Page({
  data: {
    constitution: null,
    favoriteItems: [],
    displayFavorites: [],
    favExpanded: false,
    historyItems: []
  },

  onShow() {
    const app = getApp()
    const constitution = app.globalData.constitution
    this.setData({ constitution })

    this.loadFavorites()
    this.loadHistory()
  },

  loadFavorites() {
    const favoriteIds = storage.getFavorites()
    const favoriteItems = favoriteIds.map(id => api.getIngredientById(id)).filter(Boolean)
    const displayFavorites = this.data.favExpanded ? favoriteItems : favoriteItems.slice(0, 8)
    this.setData({ favoriteItems, displayFavorites })
  },

  loadHistory() {
    const historyIds = storage.getHistory()
    const historyItems = historyIds.slice(0, 10).map(id => api.getIngredientById(id)).filter(Boolean)
    this.setData({ historyItems })
  },

  goQuiz() {
    wx.switchTab({ url: '/pages/quiz/quiz' })
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` })
  },

  goSearchFav() {
    this.setData({ favExpanded: true })
    this.loadFavorites()
  },

  goAbout() {
    wx.showModal({
      title: '关于养生查',
      content: '养生查 v1.0.0\n\n一个帮养生人群查食材功效、测自身体质、避搭配禁忌的随身工具。\n\n所有数据来源于《中药学》《本草纲目》等权威中医典籍，每条数据均标注出处。',
      showCancel: false,
      confirmText: '知道了',
      confirmColor: '#5B8C5A'
    })
  },

  goDisclaimer() {
    wx.showModal({
      title: '免责声明',
      content: '1. 本小程序提供的所有养生知识仅供参考，不构成医疗诊断或治疗建议。\n\n2. 体质自测结果基于简单问卷，仅供娱乐参考，不能替代专业中医诊断。\n\n3. 食材搭配规则来源于中医典籍，但个体差异较大，实际使用请遵医嘱。\n\n4. 如有健康问题，请及时咨询专业医师。',
      showCancel: false,
      confirmText: '我已了解',
      confirmColor: '#5B8C5A'
    })
  }
})
