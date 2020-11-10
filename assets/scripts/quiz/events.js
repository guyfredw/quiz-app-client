// require the get form fields function
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

// Index (Get all the quizzes)
const onGetQuizzes = function (event) {
  event.preventDefault()

  // send the ajax request
  api.getQuizzes()
    .then(ui.onGetQuizzesSuccess)
    .catch(ui.onGetQuizzesFail)
}

// on show create quiz form
const onShowCreateForm = function (event) {
  event.preventDefault()

  ui.showCreateForm()
}

// After the quiz form is shown we can create a quiz
const onCreateQuiz = function (event) {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)

  // console.log(data)
  api.createQuiz(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFail)
}

const onDeleteQuiz = function (event) {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)

  // console.log(data)
  api.deleteQuiz(data)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFail)
}

const onUpdateQuiz = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  // console.log(data)

  api.updateQuiz(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFail)
}

// To take the quiz it is necessary to get a single quiz
// the user will enter the ID of the quiz

const onShowQuiz = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.showQuiz(data)
    .then(ui.onShowQuizSuccess)
    .catch(ui.onShowQuizFail)
}

// After the quiz is shown

const onTakeQuiz = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  console.log(data.quiz.isCorrect)
  console.log('isCorrect: ' + store.isCorrect)

  const myAnswer = Boolean(data.quiz.isCorrect)

  if (myAnswer === store.isCorrect) {
    ui.correctAnswer()
  } else if (myAnswer !== store.isCorrect) {
    ui.wrongAnswer()
  }
}

const onShowDeleteForm = function (event) {
  event.preventDefault()

  console.log(event.target)
  $('#delete-quiz-form').toggle()
}

module.exports = {
  onGetQuizzes,
  onShowCreateForm,
  onCreateQuiz,
  onDeleteQuiz,
  onUpdateQuiz,
  onShowQuiz,
  onTakeQuiz,
  onShowDeleteForm
}
