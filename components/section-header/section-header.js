Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    count: {
      type: String,
      value: ''
    },
    moreText: {
      type: String,
      value: ''
    }
  },
  methods: {
    onMore() {
      this.triggerEvent('more')
    }
  }
})
