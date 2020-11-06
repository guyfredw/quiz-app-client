const store = require('./../store')

const onGetQuizzesSuccess = function (response) {
  console.log(response)
  response.quizzes.forEach(quiz => {
    $('#display-quizzes').append(`
      <h5> ${quiz.text} </h5>
      <h6> ${quiz._id} </h6>
      <p> A) True </p>
      <p> B) False </p>
      <p> Answer: ${quiz.isCorrect}</p>
      `)
  })
}

const onGetQuizzesFail = function () {
  $('#update').html('Failed to get quizzes')
}

const showCreateForm = function () {
  $('#create-quiz-form').show()
}

const onCreateSuccess = function () {
  $('#update').html('Question successfully created')
  $('form').trigger('reset')
}

const onCreateFail = function () {
  $('#update').html('Failed to create game')
  $('form').trigger('reset')
}

module.exports = {
  onGetQuizzesSuccess,
  onGetQuizzesFail,
  showCreateForm,
  onCreateSuccess,
  onCreateFail
}
