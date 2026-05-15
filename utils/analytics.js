function track(eventName, params) {
  if (!eventName) return
  var data = {
    event: eventName,
    timestamp: Date.now(),
    params: params || {}
  }
  if (wx.reportAnalytics) {
    wx.reportAnalytics(eventName, data.params)
  }
  console.log('[analytics]', eventName, data.params)
}

module.exports = { track: track }
