const store = require('./../store')

const onGetQuizzesSuccess = function (response) {
  // clear the display quiz div
  $('#display-quizzes').html('')
  // display all the quizzes
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

const onDeleteSuccess = function () {
  $('#update').html('Quiz successfully deleted')
  $('form').trigger('reset')
}

const onDeleteFail = function () {
  $('#update').html('Delete failed')
  $('form').trigger('reset')
}

const onUpdateSuccess = function () {
  $('#update').html('Update was successfull')
  $('form').trigger('reset')
}

const onUpdateFail = function () {
  $('#update').html('Update failed')
  $('form').trigger('reset')
}

const onShowQuizSuccess = function (response) {
  store.isCorrect = null
  $('#update').html('Quiz shown successfully')
  // console.log(response)
  displayQuiz(response)
  store.isCorrect = response.quiz.isCorrect
  $('form').trigger('reset')
}

const onShowQuizFail = function () {
  $('#update').html('Show quiz failed')
  $('form').trigger('reset')
}

// function called by onShowQuizSuccess to display the quiz in the browser
const displayQuiz = function (response) {
  $('#show-quiz').html('')
  $('#show-quiz').append(`
    <h5> ${response.quiz.text} </h5>
    <label for='false'>True</label>
    <input type='radio' name=quiz[isCorrect] value='true'>
    <label for='false'>False</label>
    <input type='radio' name=quiz[isCorrect] value=''>
    <input type='submit' value='Submit'>
    `)
  // to facilitate the comparison between the strings it is easier
  // to use a falsy value for the false radio input
}

// if the answer is correct
const correctAnswer = function () {
  $('#result').text('')
  $('#result').text('Correct!')
}

// if the answer is false
const wrongAnswer = function () {
  $('#result').text('')
  $('#result').text('False. Try again.')
}

module.exports = {
  onGetQuizzesSuccess,
  onGetQuizzesFail,
  showCreateForm,
  onCreateSuccess,
  onCreateFail,
  onDeleteSuccess,
  onDeleteFail,
  onUpdateSuccess,
  onUpdateFail,
  onShowQuizSuccess,
  onShowQuizFail,
  correctAnswer,
  wrongAnswer
}
