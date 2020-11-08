// require the get form fields function
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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

  console.log(data)
  api.createQuiz(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFail)
}

const onDeleteQuiz = function (event) {
  event.preventDefault()
  const form = event.target

  const data = getFormFields(form)

  console.log(data)
  api.deleteQuiz(data)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFail)
}

const onUpdateQuiz = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  console.log(data)

  api.updateQuiz(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFail)
}

module.exports = {
  onGetQuizzes,
  onShowCreateForm,
  onCreateQuiz,
  onDeleteQuiz,
  onUpdateQuiz
}
