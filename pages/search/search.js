const api = require('../../utils/api')

Page({
  data: {
    keyword: '',
    autoFocus: false,
    activeTab: 'all',
    results: [],
    searched: false,
    filterType: '',
    filterValue: '',
    filterLabel: '',
    effectCategories: [],
    natureTypes: [],
    formTypes: [],
    categoryColors: ['#5B8C5A', '#D4A574', '#E57373', '#64B5F6', '#BA68C8', '#4DB6AC', '#FFB74D', '#7986CB'],
    natureColors: ['#2196F3', '#42A5F5', '#64B5F6', '#81C784', '#FFB74D', '#FF8A65', '#E57373'],
    formIcons: ['🌸', '🌿', '🍎', '🥕']
  },

  onLoad(options) {
    const effectCategories = api.getEffectCategories()
    const natureTypes = api.getNatureTypes()
    const formTypes = api.getFormTypes()
    this.setData({ effectCategories, natureTypes, formTypes })

    if (options.type && options.value) {
      const value = decodeURIComponent(options.value)
      this.setData({
        filterType: options.type,
        filterValue: value,
        filterLabel: options.type === 'effect' ? '功效' : options.type === 'nature' ? '性味' : '形态'
      })
      this.applyFilterData(options.type, value)
    } else {
      this.setData({ autoFocus: true })
    }
  },

  onInput(e) {
    this.setData({ keyword: e.detail.value })
    if (e.detail.value) {
      this.doSearch(e.detail.value)
    } else {
      this.setData({ results: [], searched: false })
    }
  },

  onSearch() {
    this.doSearch(this.data.keyword)
  },

  doSearch(keyword) {
    if (!keyword || !keyword.trim()) return
    const results = api.searchIngredients(keyword)
    this.setData({ results, searched: true })
  },

  clearInput() {
    this.setData({ keyword: '', results: [], searched: false, autoFocus: true })
  },

  switchTab(e) {
    this.setData({ activeTab: e.currentTarget.dataset.tab })
  },

  applyFilter(e) {
    const { type, value } = e.currentTarget.dataset
    const label = type === 'effect' ? '功效' : type === 'nature' ? '性味' : '形态'
    this.setData({ filterType: type, filterValue: value, filterLabel: label })
    this.applyFilterData(type, value)
  },

  applyFilterData(type, value) {
    let results = []
    if (type === 'effect') {
      results = api.getIngredientsByCategory(value)
    } else if (type === 'nature') {
      results = api.getIngredientsByNature(value)
    } else if (type === 'form') {
      results = api.getIngredientsByForm(value)
    }
    this.setData({ results, searched: true })
  },

  removeFilter() {
    this.setData({ filterType: '', filterValue: '', filterLabel: '', results: [], searched: false, autoFocus: true })
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` })
  }
})
