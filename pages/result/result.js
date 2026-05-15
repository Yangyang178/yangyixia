const api = require('../../utils/api')
const storage = require('../../utils/storage')
const analytics = require('../../utils/analytics')

Page({
  data: {
    loading: true,
    constitution: null,
    secondaryConstitution: null,
    suitableIngredients: [],
    cautionIngredients: [],
    secondaryIngredients: null,
    suitableRecipes: []
  },

  onLoad(options) {
    analytics.track('page_view', { page: 'result', id: options.id })
    if (options.id) {
      const constitution = api.getConstitutionById(options.id)
      if (constitution) {
        const ingredientData = api.getIngredientsByConstitution(constitution.name)
        const suitableRecipes = api.getRecipesByConstitution(constitution.name)
        var updateData = {
          constitution,
          suitableIngredients: ingredientData.suitable,
          cautionIngredients: ingredientData.caution,
          suitableRecipes,
          loading: false
        }
        if (options.secondaryId) {
          const secondaryConstitution = api.getConstitutionById(options.secondaryId)
          if (secondaryConstitution) {
            const secondaryIngredientData = api.getIngredientsByConstitution(secondaryConstitution.name)
            updateData.secondaryConstitution = secondaryConstitution
            updateData.secondaryIngredients = secondaryIngredientData
          }
        }
        this.setData(updateData)
      }
    }
  },

  goRecipe(e) {
    wx.navigateTo({ url: '/pages/recipe/recipe?id=' + e.currentTarget.dataset.id })
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` })
  },

  retakeQuiz() {
    wx.switchTab({ url: '/pages/quiz/quiz' })
  },

  onShareAppMessage() {
    return {
      title: '我的体质是' + this.data.constitution.name + '，快来测测你的体质吧！',
      path: '/pages/quiz/quiz',
      imageUrl: ''
    }
  },

  goHome() {
    wx.switchTab({ url: '/pages/index/index' })
  }
})