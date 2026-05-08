const api = require('./utils/api')
const storage = require('./utils/storage')

App({
  globalData: {
    constitution: null
  },
  onLaunch() {
    const constitution = storage.getConstitution()
    if (constitution) {
      this.globalData.constitution = constitution
    }
  }
})
