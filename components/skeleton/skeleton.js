Component({
  properties: {
    type: {
      type: String,
      value: 'card'
    },
    loading: {
      type: Boolean,
      value: true
    }
  },
  data: {
    pulsing: false
  },
  lifetimes: {
    attached() {
      this._timer = setInterval(() => {
        this.setData({ pulsing: !this.data.pulsing })
      }, 800)
    },
    detached() {
      if (this._timer) {
        clearInterval(this._timer)
      }
    }
  }
})
