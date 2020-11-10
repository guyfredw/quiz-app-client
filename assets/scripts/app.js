'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const events = require('./auth/events')
const quizEvents = require('./quiz/events')
// const getFormFields = require('./../../lib/get-form-fields')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  // Change password form
  $('#change-pass-form').on('submit', events.onChangePass)
  // Sign out
  $('#sign-out-form').on('submit', events.onSignOut)
  // Index quizzes
  $('#index-btn').on('click', quizEvents.onGetQuizzes)
  // Create
  // Hide the create quiz form
  $('#create-quiz-form').hide()
  // When create quiz button is clicked show the form
  $('#create-btn').on('click', quizEvents.onShowCreateForm)
  // When the create form is shown, now we can create a quiz
  $('#create-quiz-form').on('submit', quizEvents.onCreateQuiz)
  // To delete a quiz
  $('#delete-quiz-form').on('submit', quizEvents.onDeleteQuiz)
  // Update quiz
  $('#update-quiz-form').on('submit', quizEvents.onUpdateQuiz)
  // Take quiz form
  $('#take-quiz').on('submit', quizEvents.onShowQuiz)
  // Test quiz form
  $('#show-quiz').on('submit', quizEvents.onTakeQuiz)
  // hide myTest
  $('#myTest').hide()
  // hide the functionalities forms
  $('#delete-quiz-form').hide()
  // show the delete quiz form when the user clicks on the delete button
  $('#delete-btn').on('click', quizEvents.onShowDeleteForm)
})
