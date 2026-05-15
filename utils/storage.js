const STORAGE_KEYS = {
  CONSTITUTION: 'ysc_constitution',
  FAVORITES: 'ysc_favorites',
  HISTORY: 'ysc_history',
  SEARCH_HISTORY: 'ysc_search_history',
  QUIZ_ANSWERS: 'ysc_quiz_answers',
  PENDING_MATCH_ID: 'ysc_pending_match_id',
  SAVED_MATCHES: 'ysc_saved_matches'
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

function getSearchHistory() {
  try {
    return wx.getStorageSync(STORAGE_KEYS.SEARCH_HISTORY) || []
  } catch (e) {
    return []
  }
}

function addSearchHistory(keyword) {
  if (!keyword || !keyword.trim()) return
  const history = getSearchHistory()
  const index = history.indexOf(keyword)
  if (index > -1) {
    history.splice(index, 1)
  }
  history.unshift(keyword)
  if (history.length > 10) {
    history.pop()
  }
  try {
    wx.setStorageSync(STORAGE_KEYS.SEARCH_HISTORY, history)
  } catch (e) {
    console.error('保存搜索历史失败', e)
  }
}

function clearSearchHistory() {
  try {
    wx.setStorageSync(STORAGE_KEYS.SEARCH_HISTORY, [])
  } catch (e) {
    console.error('清除搜索历史失败', e)
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

function getPendingMatchId() {
  try {
    return wx.getStorageSync(STORAGE_KEYS.PENDING_MATCH_ID) || null
  } catch (e) {
    return null
  }
}

function setPendingMatchId(id) {
  try {
    wx.setStorageSync(STORAGE_KEYS.PENDING_MATCH_ID, id)
  } catch (e) {
    console.error('保存待搭配ID失败', e)
  }
}

function clearPendingMatchId() {
  try {
    wx.removeStorageSync(STORAGE_KEYS.PENDING_MATCH_ID)
  } catch (e) {
    console.error('清除待搭配ID失败', e)
  }
}

function getSavedMatches() {
  try {
    return wx.getStorageSync(STORAGE_KEYS.SAVED_MATCHES) || []
  } catch (e) {
    return []
  }
}

function saveMatch(matchData) {
  const matches = getSavedMatches()
  matches.unshift(matchData)
  if (matches.length > 20) {
    matches.length = 20
  }
  try {
    wx.setStorageSync(STORAGE_KEYS.SAVED_MATCHES, matches)
  } catch (e) {
    console.error('保存搭配方案失败', e)
  }
}

function removeMatch(index) {
  const matches = getSavedMatches()
  matches.splice(index, 1)
  try {
    wx.setStorageSync(STORAGE_KEYS.SAVED_MATCHES, matches)
  } catch (e) {
    console.error('删除搭配方案失败', e)
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
  getSearchHistory,
  addSearchHistory,
  clearSearchHistory,
  getQuizAnswers,
  setQuizAnswers,
  getPendingMatchId,
  setPendingMatchId,
  clearPendingMatchId,
  getSavedMatches,
  saveMatch,
  removeMatch
}
