const api = require('../../utils/api')

Page({
  data: {
    recipe: null,
    methodSteps: []
  },

  onLoad(options) {
    if (options.id) {
      const recipe = api.getRecipeById(options.id)
      if (recipe) {
        const methodSteps = this.parseMethod(recipe.method)
        this.setData({ recipe, methodSteps })
      }
    }
  },

  parseMethod(method) {
    if (!method) return []
    const steps = method.split(/[，。；]/).filter(function(s) { return s.trim() })
    if (steps.length <= 1) return []
    return steps.map(function(step, idx) {
      return { index: idx + 1, text: step.trim() }
    })
  },

  goDetail(e) {
    const name = e.currentTarget.dataset.name
    const allIngredients = api.getAllIngredients()
    const found = allIngredients.find(function(item) {
      return item.name === name || item.aliases.includes(name)
    })
    if (found) {
      wx.navigateTo({ url: '/pages/detail/detail?id=' + found.id })
    }
  }
})
