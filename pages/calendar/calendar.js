const api = require('../../utils/api')
const { solarTerms } = require('../../data/solar-terms')

Page({
  data: {
    solarTerms: [],
    currentTermIndex: -1,
    currentTerm: null
  },

  onLoad() {
    const now = new Date()
    const currentMonth = now.getMonth() + 1
    const currentDay = now.getDate()
    const todayValue = currentMonth * 100 + currentDay

    const termsWithIngredients = solarTerms.map(function(term) {
      const ingredients = term.ingredientIds.map(function(id) {
        return api.getIngredientById(id)
      }).filter(Boolean)
      return Object.assign({}, term, { ingredients: ingredients })
    })

    let currentTermIndex = -1
    for (let i = termsWithIngredients.length - 1; i >= 0; i--) {
      const termValue = termsWithIngredients[i].month * 100 + termsWithIngredients[i].day
      if (termValue <= todayValue) {
        currentTermIndex = i
        break
      }
    }

    if (currentTermIndex === -1) {
      currentTermIndex = termsWithIngredients.length - 1
    }

    this.setData({
      solarTerms: termsWithIngredients,
      currentTermIndex: currentTermIndex,
      currentTerm: termsWithIngredients[currentTermIndex]
    })
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: '/pages/detail/detail?id=' + id })
  }
})