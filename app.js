const api = require('./utils/api')
const storage = require('./utils/storage')

App({
  globalData: {
    constitution: null
  },
  onLaunch() {
    if (wx.cloud) {
      wx.cloud.init({ env: 'your-env-id', traceUser: true })
    }

    const constitution = storage.getConstitution()
    if (constitution) {
      this.globalData.constitution = constitution
    }

    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function(res) {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function() {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              confirmColor: '#5B8C5A',
              success: function(res) {
                if (res.confirm) {
                  updateManager.applyUpdate()
                }
              }
            })
          })
          updateManager.onUpdateFailed(function() {
            wx.showModal({
              title: '更新提示',
              content: '新版本下载失败，请删除当前小程序后重新搜索打开',
              showCancel: false,
              confirmColor: '#5B8C5A'
            })
          })
        }
      })
    }
  },
  onShareAppMessage() {
    return {
      title: '养生查 - 查食材、测体质、避禁忌',
      path: '/pages/index/index'
    }
  }
})
