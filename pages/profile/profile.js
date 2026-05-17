const api = require('../../utils/api')
const storage = require('../../utils/storage')
const analytics = require('../../utils/analytics')

Page({
  data: {
    constitution: null,
    favoriteItems: [],
    displayFavorites: [],
    favExpanded: false,
    historyItems: [],
    savedMatches: []
  },

  onShow() {
    analytics.track('page_view', { page: 'profile' })
    const app = getApp()
    const constitution = app.globalData.constitution
    this.setData({ constitution })

    this.loadFavorites()
    this.loadHistory()
    this.loadSavedMatches()
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

  loadSavedMatches() {
    const savedMatches = storage.getSavedMatches().map(item => {
      const date = new Date(item.timestamp)
      const timeStr = date.getFullYear() + '-' +
        String(date.getMonth() + 1).padStart(2, '0') + '-' +
        String(date.getDate()).padStart(2, '0') + ' ' +
        String(date.getHours()).padStart(2, '0') + ':' +
        String(date.getMinutes()).padStart(2, '0')
      var ingredientStr = ''
      if (item.ingredients && item.ingredients.length > 0) {
        ingredientStr = item.ingredients.join(' + ')
      }
      return Object.assign({}, item, { timeStr, ingredientStr })
    })
    this.setData({ savedMatches })
  },

  deleteMatch(e) {
    const index = e.currentTarget.dataset.index
    wx.showModal({
      title: '删除方案',
      content: '确定要删除这个搭配方案吗？',
      confirmColor: '#E17055',
      confirmText: '删除',
      success: function(res) {
        if (res.confirm) {
          storage.removeMatch(index)
          this.loadSavedMatches()
        }
      }.bind(this)
    })
  },

  viewMatch(e) {
    const index = e.currentTarget.dataset.index
    const match = this.data.savedMatches[index]
    if (!match) return

    var content = '食材：' + match.ingredients.join(' + ') + '\n\n'

    if (match.matchResult) {
      if (match.matchResult.good && match.matchResult.good.length > 0) {
        content += '✅ 协同增效：' + match.matchResult.good.join('、') + '\n\n'
      }
      if (match.matchResult.caution && match.matchResult.caution.length > 0) {
        content += '⚠️ 需注意：' + match.matchResult.caution.join('、') + '\n\n'
      }
      if (match.matchResult.bad && match.matchResult.bad.length > 0) {
        content += '❌ 不建议搭配：' + match.matchResult.bad.join('、') + '\n\n'
      }
    }

    if (match.constitutionMatch) {
      content += '体质匹配：' + (match.constitutionMatch.match ? '✅ 适合' : '⚠️ 需注意') + '\n'
      if (match.constitutionMatch.reason) {
        content += match.constitutionMatch.reason + '\n'
      }
    }

    if (match.recommendedRecipes && match.recommendedRecipes.length > 0) {
      content += '\n🍵 推荐茶饮：' + match.recommendedRecipes.map(function(r) { return r.name }).join('、')
    }

    wx.showModal({
      title: '搭配方案详情',
      content: content,
      showCancel: false,
      confirmText: '知道了',
      confirmColor: '#5B8C5A'
    })
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

  goCalendar() {
    wx.navigateTo({ url: '/pages/calendar/calendar' })
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
  },

  goHomeFromProfile() {
    wx.switchTab({ url: '/pages/index/index' })
  },

  goSearchFromProfile() {
    wx.navigateTo({ url: '/pages/search/search' })
  }
})
