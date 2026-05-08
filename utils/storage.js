const STORAGE_KEYS = {
  CONSTITUTION: 'ysc_constitution',
  FAVORITES: 'ysc_favorites',
  HISTORY: 'ysc_history',
  QUIZ_ANSWERS: 'ysc_quiz_answers'
}

function getConstitution() {
  try {
    return wx.getStorageSync(STORAGE_KEYS.CONSTITUTION) || null
  } catch (e) {
    return null
  }
}

function setConstitution(data) {
  try {
    wx.setStorageSync(STORAGE_KEYS.CONSTITUTION, data)
  } catch (e) {
    console.error('保存体质数据失败', e)
  }
}

function getFavorites() {
  try {
    return wx.getStorageSync(STORAGE_KEYS.FAVORITES) || []
  } catch (e) {
    return []
  }
}

function toggleFavorite(ingredientId) {
  const favorites = getFavorites()
  const index = favorites.indexOf(ingredientId)
  if (index > -1) {
    favorites.splice(index, 1)
  } else {
    favorites.unshift(ingredientId)
  }
  try {
    wx.setStorageSync(STORAGE_KEYS.FAVORITES, favorites)
  } catch (e) {
    console.error('保存收藏失败', e)
  }
  return favorites
}

function isFavorite(ingredientId) {
  return getFavorites().indexOf(ingredientId) > -1
}

function getHistory() {
  try {
    return wx.getStorageSync(STORAGE_KEYS.HISTORY) || []
  } catch (e) {
    return []
  }
}

function addHistory(ingredientId) {
  const history = getHistory()
  const index = history.indexOf(ingredientId)
  if (index > -1) {
    history.splice(index, 1)
  }
  history.unshift(ingredientId)
  if (history.length > 50) {
    history.pop()
  }
  try {
    wx.setStorageSync(STORAGE_KEYS.HISTORY, history)
  } catch (e) {
    console.error('保存历史失败', e)
  }
}

function getQuizAnswers() {
  try {
    return wx.getStorageSync(STORAGE_KEYS.QUIZ_ANSWERS) || null
  } catch (e) {
    return null
  }
}

function setQuizAnswers(answers) {
  try {
    wx.setStorageSync(STORAGE_KEYS.QUIZ_ANSWERS, answers)
  } catch (e) {
    console.error('保存问卷答案失败', e)
  }
}

module.exports = {
  getConstitution,
  setConstitution,
  getFavorites,
  toggleFavorite,
  isFavorite,
  getHistory,
  addHistory,
  getQuizAnswers,
  setQuizAnswers
}
