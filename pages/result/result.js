const api = require('../../utils/api')
const storage = require('../../utils/storage')

Page({
  data: {
    constitution: null,
    suitableIngredients: [],
    cautionIngredients: [],
    suitableRecipes: []
  },

  onLoad(options) {
    if (options.id) {
      const constitution = api.getConstitutionById(options.id)
      if (constitution) {
        const ingredientData = api.getIngredientsByConstitution(constitution.name)
        const suitableRecipes = api.getRecipesByConstitution(constitution.name)
        this.setData({
          constitution,
          suitableIngredients: ingredientData.suitable,
          cautionIngredients: ingredientData.caution,
          suitableRecipes
        })
      }
    }
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` })
  },

  retakeQuiz() {
    wx.switchTab({ url: '/pages/quiz/quiz' })
  },

  goHome() {
    wx.switchTab({ url: '/pages/index/index' })
  }
})
