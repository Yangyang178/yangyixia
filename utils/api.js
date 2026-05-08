const baseIngredients = require('../data/ingredients')
const extraIngredients = require('../data/ingredients-extra')
const rules = require('../data/rules')
const { constitutions } = require('../data/constitution')
const recipes = require('../data/recipes')

const emojiMap = {
  gouqi: '🔴',
  juhua: '🌼',
  hongzao: '🫘',
  guiyuan: '🟤',
  meiguihua: '🌹',
  chenpi: '🍊',
  huangqi: '🟡',
  shanyao: '⬜',
  yimi: '⚪',
  fuling: '◻️',
  juemingzi: '🟫',
  jinyinhua: '🌸',
  baizhi: '🤍',
  yiner: '☁️',
  shengjiang: '🫚',
  dangshen: '🟨',
  lianzi: '🪷',
  hongdou: '🔴',
  shanzha: '🍎',
  gancao: '🪵',
  bohe: '🍃',
  suanzaoren: '🫐',
  dazao: '🫘',
  luohanguo: '🟤',
  heshouwu: '🫚',
  heizhima: '⚫',
  hetao: '🧠',
  danggui: '🫚',
  baishao: '🤍',
  hongqi: '🌺',
  ezhuyu: '🟢',
  fangling: '💎',
  wumei: '🫒',
  lvcha: '🍵',
  hongcha: '🫖',
  huaihua: '🌼',
  ganlan: '🫒',
  pangdahai: '🟤',
  shihu: '🌿',
  yuxingcao: '🐟',
  baizhu: '⬜',
  cangzhu: '🟫',
  gouqiye: '🍃',
  sangshen: '🫐',
  lumei: '🌺',
  taoren: '🍑',
  chuanxiong: '🫚',
  shudi: '⬛',
  huangjing: '🟡',
  ezhishi: '🍊',
  foshou: '🤌',
  dingxiang: '🌸',
  rougui: '🪵',
  hongshen: '🔴',
  wuhuaguo: '🍐',
  xingren: '🌰',
  sangye: '🍃',
  huaijiang: '🫚',
  zhuye: '🎋',
  heshi: '🪷',
  baihe: '❄️',
  renshen: '🌿',
  xiyangshen: '🌿',
  taizishen: '🌿',
  baibiandou: '🫘',
  fengmi: '🍯',
  yitang: '🍬',
  ejiao: '🟫',
  ziheche: '🧬',
  lingzhi: '🍄',
  yanwo: '🪺',
  heidou: '⚫',
  zimi: '🟣',
  nuomi: '🍚',
  lizi: '🌰',
  qianshi: '⚪',
  huasheng: '🥜',
  bocai: '🥬',
  hongshu: '🍠',
  nangua: '🎃',
  niurou: '🥩',
  jirou: '🍗',
  xianggu: '🍄',
  houtougu: '🦁',
  shashen: '🫚',
  yuzhu: '🟢',
  tiandong: '💎',
  shihuhua: '🌸',
  nvzhenzi: '🫐',
  hanliancao: '🌿',
  guijia: '🐢',
  biejia: '🐢',
  baihehua: '🤍',
  huangjingguo: '🟡',
  zhenzhufen: '✨',
  li: '🍐',
  yinyu: '🐟',
  yarou: '🦆',
  zhupi: '🧈',
  niunai: '🥛',
  ganzhe: '🎋',
  lurong: '🦌',
  dongchongxiacao: '🐛',
  roucongrong: '🌿',
  suoyang: '🌿',
  bajitian: '🫚',
  yinyanghuo: '🌿',
  duzhong: '🪵',
  xuduan: '🫚',
  tusizi: '🌰',
  shayuanzi: '🌰',
  jiucaizi: '🫘',
  xianmao: '🫚',
  gejie: '🦎',
  buguzhi: '🌰',
  yizhiren: '🌰',
  huangqin: '🟡',
  huanglian: '🟡',
  huangbo: '🟡',
  longdancao: '🌿',
  kushen: '🫚',
  zhimu: '🫚',
  zhizi: '🟠',
  xiakucao: '🌿',
  gujingcao: '🌾',
  mimenghua: '🌼',
  qingxiangzi: '⚫',
  zhuru: '🎋',
  tianhuafen: '⚪',
  lugen: '🎋',
  gegen: '🫚',
  qinghao: '🌿',
  baiwei: '🫚',
  digupi: '🪵',
  yinchaihu: '🫚',
  huhuanglian: '🟡',
  zhuling: '🍄',
  zexie: '⚪',
  cheqianzi: '🌰',
  mutong: '🎋',
  tongcao: '🤍',
  jinqiancao: '🪙',
  yinchen: '🌿',
  biexie: '🫚',
  difuzi: '🌰',
  dengxincao: '🕯️',
  banxia: '⚪',
  tiannanxing: '⚪',
  baijiezi: '🫘',
  sangjisheng2: '🌿',
  duhuo2: '🫚',
  xiangfu2: '🫚',
  muxiang2: '🪵',
  wuyao2: '🫚',
  chenxiang2: '🪵',
  tanxiang2: '🪵',
  zhiqiao2: '🍊',
  houpo2: '🪵',
  dafupi2: '🟫',
  xiebai2: '🧅',
  gansong2: '🌿',
  yuanzhi2: '🫚',
  hehuanpi2: '🪵',
  hehuanhua2: '🌸',
  shouwuteng2: '🌿',
  zhenzhumu2: '🐚',
  hupo2: '🟡',
  cishi2: '🪨',
  longgu2: '🦴',
  muli2: '🐚',
  zibeichi2: '🐚',
  ruxiang2: '💧',
  moyao2: '🟤',
  yanhusuo2: '🟡',
  yujin2: '🟡',
  jianghuang2: '🟠',
  ezhuyu2: '🟫',
  sanleng2: '🔺',
  wangbuliuxing2: '⭐',
  jiangxiang2: '🪵',
  yinxing2: '🟡',
  jineijin2: '🟡',
  shenqu2: '🧱',
  maiya2: '🌾',
  guya2: '🌾',
  laifuzi2: '🌰',
  wuweizi2: '🫐',
  fupenzi2: '🫐',
  wubeizi2: '🟫',
  hezi2: '🟤',
  roudoukou2: '🌰',
  mahuang2: '🌿',
  guizhi2: '🪵',
  zisu2: '🍃',
  jingjie2: '🌿',
  fangfeng2: '🫚',
  qianghuo2: '🫚',
  xixin2: '🌿',
  gaoben2: '🫚',
  cangerzi2: '🟢',
  xinyi2: '🌸',
  jiegeng2: '🫚',
  chuanbeimu2: '🤍',
  zhebeimu2: '🤍',
  gualou2: '🟡',
  xuanfuhua2: '🌼'
}

function getIngredientEmoji(id) {
  return emojiMap[id] || '🌿'
}

const categoryColorMap = {
  '补气血': '#E8B4B8',
  '清热': '#B4D8E8',
  '祛湿': '#B8D8B8',
  '安神': '#D4B8E8',
  '理气': '#E8D4B8',
  '滋阴': '#B8C8D8',
  '温阳': '#E8B8B8',
  '活血': '#D89898',
  '消食': '#D8C898',
  '收涩': '#C8B8C8',
  '止咳': '#A8C8B8',
  '解表': '#B8D8D8'
}

function getCategoryColor(effectCategory) {
  return categoryColorMap[effectCategory] || '#D8D8D8'
}

const ingredients = baseIngredients.concat(extraIngredients).map(function(item) {
  return Object.assign({}, item, {
    emoji: getIngredientEmoji(item.id),
    color: getCategoryColor(item.effectCategory)
  })
})

function searchIngredients(keyword) {
  if (!keyword || !keyword.trim()) return []
  var kw = keyword.trim().toLowerCase()
  return ingredients.filter(function(item) {
    return item.name.toLowerCase().includes(kw) ||
      item.aliases.some(function(alias) { return alias.toLowerCase().includes(kw) }) ||
      item.effects.some(function(eff) { return eff.includes(kw) }) ||
      item.effectCategory.includes(kw)
  })
}

function getIngredientById(id) {
  return ingredients.find(function(item) { return item.id === id }) || null
}

function getIngredientsByCategory(category) {
  return ingredients.filter(function(item) { return item.effectCategory === category })
}

function getIngredientsByNature(nature) {
  return ingredients.filter(function(item) { return item.nature === nature })
}

function getIngredientsByForm(form) {
  return ingredients.filter(function(item) { return item.form === form })
}

function getIngredientsByConstitution(constitutionName) {
  var suitable = ingredients.filter(function(item) {
    return item.suitableConstitutions.includes(constitutionName)
  })
  var caution = ingredients.filter(function(item) {
    return item.cautionConstitutions.includes(constitutionName)
  })
  return { suitable: suitable, caution: caution }
}

function checkMatch(selectedIds) {
  var selectedIngredients = selectedIds.map(function(id) { return getIngredientById(id) }).filter(Boolean)
  var results = {
    good: [],
    caution: [],
    bad: [],
    constitutionMatch: null
  }

  for (var i = 0; i < selectedIngredients.length; i++) {
    for (var j = i + 1; j < selectedIngredients.length; j++) {
      var a = selectedIngredients[i]
      var b = selectedIngredients[j]
      var rule = findRule(a.name, b.name)
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
  return rules.find(function(rule) {
    return (rule.ingredientA === nameA && rule.ingredientB === nameB) ||
      (rule.ingredientA === nameB && rule.ingredientB === nameA)
  })
}

function calculateConstitution(answers) {
  var scores = {}
  answers.forEach(function(answer) {
    var scoresObj = answer.scores
    Object.keys(scoresObj).forEach(function(key) {
      scores[key] = (scores[key] || 0) + scoresObj[key]
    })
  })

  var maxScore = 0
  var result = 'pinghe'
  Object.keys(scores).forEach(function(key) {
    if (scores[key] > maxScore) {
      maxScore = scores[key]
      result = key
    }
  })

  var constitution = constitutions.find(function(c) { return c.id === result })
  return {
    scores: scores,
    constitution: constitution || constitutions[0]
  }
}

function getConstitutionById(id) {
  return constitutions.find(function(c) { return c.id === id }) || null
}

function getRecipeById(id) {
  return recipes.find(function(r) { return r.id === id }) || null
}

function getRecipesByConstitution(constitutionName) {
  return recipes.filter(function(r) {
    return r.suitableConstitutions.includes(constitutionName)
  })
}

function getEffectCategories() {
  var categories = new Set()
  ingredients.forEach(function(item) {
    if (item.effectCategory) categories.add(item.effectCategory)
  })
  return Array.from(categories)
}

function getNatureTypes() {
  return ['寒', '凉', '微寒', '平', '微温', '温', '热']
}

function getFormTypes() {
  var forms = new Set()
  ingredients.forEach(function(item) {
    if (item.form) forms.add(item.form)
  })
  return Array.from(forms)
}

function getAllIngredients() {
  return ingredients
}

function getHotIngredients() {
  var hotIds = ['gouqi', 'juhua', 'hongzao', 'meiguihua', 'chenpi', 'yimi', 'huangqi', 'shanyao']
  return hotIds.map(function(id) { return getIngredientById(id) }).filter(Boolean)
}

module.exports = {
  searchIngredients: searchIngredients,
  getIngredientById: getIngredientById,
  getIngredientsByCategory: getIngredientsByCategory,
  getIngredientsByNature: getIngredientsByNature,
  getIngredientsByForm: getIngredientsByForm,
  getIngredientsByConstitution: getIngredientsByConstitution,
  checkMatch: checkMatch,
  findRule: findRule,
  calculateConstitution: calculateConstitution,
  getConstitutionById: getConstitutionById,
  getRecipeById: getRecipeById,
  getRecipesByConstitution: getRecipesByConstitution,
  getEffectCategories: getEffectCategories,
  getNatureTypes: getNatureTypes,
  getFormTypes: getFormTypes,
  getHotIngredients: getHotIngredients,
  getAllIngredients: getAllIngredients,
  getIngredientEmoji: getIngredientEmoji,
  getCategoryColor: getCategoryColor
}
