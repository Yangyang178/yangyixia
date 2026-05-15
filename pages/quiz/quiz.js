const { quizQuestions, constitutions } = require('../../data/constitution')
const api = require('../../utils/api')
const storage = require('../../utils/storage')
const analytics = require('../../utils/analytics')

Page({
  data: {
    started: false,
    completed: false,
    questions: [],
    currentIndex: 0,
    currentQuestion: null,
    selectedOption: -1,
    answers: [],
    progress: 0,
    existingConstitution: null
  },

  onShow() {
    analytics.track('page_view', { page: 'quiz' })
    const app = getApp()
    const constitution = app.globalData.constitution
    if (constitution) {
      this.setData({ existingConstitution: constitution })
    }
    if (this.data.completed) {
      this.setData({
        started: false,
        completed: false,
        currentIndex: 0,
        currentQuestion: null,
        selectedOption: -1,
        answers: [],
        progress: 0
      })
    }
  },

  startQuiz() {
    analytics.track('start_quiz', {})
    this.setData({
      started: true,
      completed: false,
      questions: quizQuestions,
      currentIndex: 0,
      currentQuestion: quizQuestions[0],
      selectedOption: -1,
      answers: new Array(quizQuestions.length).fill(null),
      progress: (1 / quizQuestions.length) * 100
    })
  },

  selectOption(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ selectedOption: index })
  },

  prevQuestion() {
    if (this.data.currentIndex <= 0) return
    const currentIndex = this.data.currentIndex - 1
    const answers = this.data.answers
    this.setData({
      currentIndex,
      currentQuestion: this.data.questions[currentIndex],
      selectedOption: answers[currentIndex] !== null ? answers[currentIndex] : -1,
      progress: ((currentIndex + 1) / this.data.questions.length) * 100
    })
  },

  nextQuestion() {
    if (this.data.selectedOption === -1) {
      wx.showToast({ title: '请先选择一个选项', icon: 'none' })
      return
    }

    const answers = this.data.answers
    answers[this.data.currentIndex] = this.data.selectedOption

    if (this.data.currentIndex === this.data.questions.length - 1) {
      this.setData({ completed: true, answers })
      return
    }

    const currentIndex = this.data.currentIndex + 1
    this.setData({
      currentIndex,
      currentQuestion: this.data.questions[currentIndex],
      selectedOption: answers[currentIndex] !== null ? answers[currentIndex] : -1,
      answers,
      progress: ((currentIndex + 1) / this.data.questions.length) * 100
    })
  },

  viewResult() {
    analytics.track('complete_quiz', {})
    const answerObjects = this.data.answers.map((optIndex, qIndex) => {
      return this.data.questions[qIndex].options[optIndex]
    })

    const result = api.calculateConstitution(answerObjects)
    storage.setConstitution(result.constitution)
    storage.setQuizAnswers(this.data.answers)

    const app = getApp()
    app.globalData.constitution = result.constitution

    var url = '/pages/result/result?id=' + result.constitution.id
    if (result.isMixed && result.secondaryConstitution) {
      url += '&secondaryId=' + result.secondaryConstitution.id
    }
    wx.navigateTo({ url: url })
  },

  viewExistingResult() {
    const id = this.data.existingConstitution.id
    wx.navigateTo({ url: `/pages/result/result?id=${id}` })
  },

  goHome() {
    this.setData({
      started: false,
      completed: false,
      currentIndex: 0,
      currentQuestion: null,
      selectedOption: -1,
      answers: [],
      progress: 0
    })
    wx.switchTab({ url: '/pages/index/index' })
  }
})