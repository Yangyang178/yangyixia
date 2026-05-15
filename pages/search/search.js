const api = require('../../utils/api')
const storage = require('../../utils/storage')
const analytics = require('../../utils/analytics')

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
    formIcons: ['🌸', '🌿', '🍎', '🥕'],
    searchHistory: []
  },

  onLoad(options) {
    analytics.track('page_view', { page: 'search' })
    const effectCategories = api.getEffectCategories()
    const natureTypes = api.getNatureTypes()
    const formTypes = api.getFormTypes()
    const searchHistory = storage.getSearchHistory()
    this.setData({ effectCategories, natureTypes, formTypes, searchHistory })

    if (options.keyword) {
      const keyword = decodeURIComponent(options.keyword)
      this.setData({ keyword })
      this.doSearch(keyword)
    } else if (options.type && options.value) {
      const value = decodeURIComponent(options.value)
      this.setData({
        filterType: options.type,
        filterValue: value,
        filterLabel: options.type === 'effect' ? '功效' : options.type === 'nature' ? '性味' : '形态'
      })
      this.applyFilterData(options.type, value)
    } else {
      this.setData({ autoFocus: true })
      this.loadAllIngredients()
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
    analytics.track('search', { keyword: keyword })
    storage.addSearchHistory(keyword)
    const searchHistory = storage.getSearchHistory()
    const results = api.searchIngredients(keyword)
    this.setData({ results, searched: true, searchHistory })
  },

  clearInput() {
    this.setData({ keyword: '', results: [], searched: false, autoFocus: true, searchHistory: storage.getSearchHistory() })
  },

  switchTab(e) {
    const tab = e.currentTarget.dataset.tab
    this.setData({ activeTab: tab })
    if (tab === 'all') {
      this.loadAllIngredients()
    }
  },

  loadAllIngredients() {
    const results = api.getAllIngredients()
    this.setData({ results, searched: true })
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
  },

  goBrowseAll() {
    this.loadAllIngredients()
  }
})
