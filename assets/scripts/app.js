'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const events = require('./auth/events')
const quizEvents = require('./quiz/events')
const getFormFields = require('./../../lib/get-form-fields')

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
  $('#index-quiz-form').on('submit', quizEvents.onGetQuizzes)
  // Create
  // Hide the create quiz form
  $('#create-quiz-form').hide()
  // When create quiz is clicked show the form
  $('#create-quiz').on('submit', quizEvents.onShowCreateForm)
  // When the create form is shown, now we can create a quiz
  $('#create-quiz-form').on('submit', quizEvents.onCreateQuiz)
  // To delete a quiz
  $('#delete-quiz-form').on('submit', quizEvents.onDeleteQuiz)
})
