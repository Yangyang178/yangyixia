const baseIngredients = require('../data/ingredients')
const extraIngredients = require('../data/ingredients-extra')
const rules = require('../data/rules')
const { constitutions } = require('../data/constitution')
const recipes = require('../data/recipes')

const ingredients = baseIngredients.concat(extraIngredients)

function searchIngredients(keyword) {
  if (!keyword || !keyword.trim()) return []
  const kw = keyword.trim().toLowerCase()
  return ingredients.filter(item => {
    return item.name.toLowerCase().includes(kw) ||
      item.aliases.some(alias => alias.toLowerCase().includes(kw)) ||
      item.effects.some(eff => eff.includes(kw)) ||
      item.effectCategory.includes(kw)
  })
}

function getIngredientById(id) {
  return ingredients.find(item => item.id === id) || null
}

function getIngredientsByCategory(category) {
  return ingredients.filter(item => item.effectCategory === category)
}

function getIngredientsByNature(nature) {
  return ingredients.filter(item => item.nature === nature)
}

function getIngredientsByForm(form) {
  return ingredients.filter(item => item.form === form)
}

function getIngredientsByConstitution(constitutionName) {
  const suitable = ingredients.filter(item =>
    item.suitableConstitutions.includes(constitutionName)
  )
  const caution = ingredients.filter(item =>
    item.cautionConstitutions.includes(constitutionName)
  )
  return { suitable, caution }
}

function checkMatch(selectedIds) {
  const selectedIngredients = selectedIds.map(id => getIngredientById(id)).filter(Boolean)
  const results = {
    good: [],
    caution: [],
    bad: [],
    constitutionMatch: null
  }

  for (let i = 0; i < selectedIngredients.length; i++) {
    for (let j = i + 1; j < selectedIngredients.length; j++) {
      const a = selectedIngredients[i]
      const b = selectedIngredients[j]
      const rule = findRule(a.name, b.name)
      if (rule) {
        if (rule.relation === '宜') {
          results.good.push({
            ingredientA: a.name,
            ingredientB: b.name,
            reason: rule.reason,
            source: rule.source
          })
        } else if (rule.relation === '不宜') {
          results.bad.push({
            ingredientA: a.name,
            ingredientB: b.name,
            reason: rule.reason,
            source: rule.source
          })
        } else if (rule.relation === '谨慎') {
          results.caution.push({
            ingredientA: a.name,
            ingredientB: b.name,
            reason: rule.reason,
            source: rule.source
          })
        }
      }
    }
  }

  return results
}

function findRule(nameA, nameB) {
  return rules.find(rule =>
    (rule.ingredientA === nameA && rule.ingredientB === nameB) ||
    (rule.ingredientA === nameB && rule.ingredientB === nameA)
  )
}

function calculateConstitution(answers) {
  const scores = {}
  answers.forEach(answer => {
    const scoresObj = answer.scores
    Object.keys(scoresObj).forEach(key => {
      scores[key] = (scores[key] || 0) + scoresObj[key]
    })
  })

  let maxScore = 0
  let result = 'pinghe'
  Object.keys(scores).forEach(key => {
    if (scores[key] > maxScore) {
      maxScore = scores[key]
      result = key
    }
  })

  const constitution = constitutions.find(c => c.id === result)
  return {
    scores,
    constitution: constitution || constitutions[0]
  }
}

function getConstitutionById(id) {
  return constitutions.find(c => c.id === id) || null
}

function getRecipeById(id) {
  return recipes.find(r => r.id === id) || null
}

function getRecipesByConstitution(constitutionName) {
  return recipes.filter(r =>
    r.suitableConstitutions.includes(constitutionName)
  )
}

function getEffectCategories() {
  const categories = new Set()
  ingredients.forEach(item => {
    if (item.effectCategory) categories.add(item.effectCategory)
  })
  return Array.from(categories)
}

function getNatureTypes() {
  return ['寒', '凉', '微寒', '平', '微温', '温', '热']
}

function getFormTypes() {
  const forms = new Set()
  ingredients.forEach(item => {
    if (item.form) forms.add(item.form)
  })
  return Array.from(forms)
}

function getHotIngredients() {
  const hotIds = ['gouqi', 'juhua', 'hongzao', 'meiguihua', 'chenpi', 'yimi', 'huangqi', 'shanyao']
  return hotIds.map(id => getIngredientById(id)).filter(Boolean)
}

module.exports = {
  searchIngredients,
  getIngredientById,
  getIngredientsByCategory,
  getIngredientsByNature,
  getIngredientsByForm,
  getIngredientsByConstitution,
  checkMatch,
  findRule,
  calculateConstitution,
  getConstitutionById,
  getRecipeById,
  getRecipesByConstitution,
  getEffectCategories,
  getNatureTypes,
  getFormTypes,
  getHotIngredients
}
