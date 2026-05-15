Component({
  properties: {
    id: {
      type: String,
      value: ''
    },
    name: {
      type: String,
      value: ''
    },
    emoji: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: ''
    },
    subtitle: {
      type: String,
      value: ''
    },
    size: {
      type: String,
      value: 'sm'
    }
  },
  methods: {
    onTap() {
      this.triggerEvent('tap', { id: this.data.id })
    }
  }
})
