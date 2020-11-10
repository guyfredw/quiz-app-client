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
  $('#index').on('click', quizEvents.onGetQuizzes)
  // Create
  // Hide the create quiz form
  $('#create-quiz-form').hide()
  // When create quiz button is clicked show the form
  $('#create').on('click', quizEvents.onShowForm)
  // When the create form is shown, now we can create a quiz
  $('#create-quiz-form').on('submit', quizEvents.onCreateQuiz)
  // To delete a quiz
  $('#delete-quiz-form').on('submit', quizEvents.onDeleteQuiz)
  // Update quiz
  $('#change-quiz-form').on('submit', quizEvents.onUpdateQuiz)
  // Take quiz form
  $('#take-quiz-form').on('submit', quizEvents.onShowQuiz)
  // Test quiz form
  $('#show-quiz').on('submit', quizEvents.onTakeQuiz)
  // hide myTest
  $('#myTest').hide()
  // hide the functionalities forms
  $('#delete-quiz-form').hide()
  $('#change-quiz-form').hide()
  $('#take-quiz-form').hide()
  // hide the change password form
  $('#change-pass-form').hide()
  // hide the sign in form
  $('#sign-in-form').hide()
  // show the delete quiz form when the user clicks on the delete button
  $('#delete').on('click', quizEvents.onShowForm)
  $('#change').on('click', quizEvents.onShowForm)
  $('#take').on('click', quizEvents.onShowForm)
  // show auth forms
  // show change password form
  $('#change-pass').on('click', events.onShowForm)
  // hide the menu
  $('#menu-btns').hide()
  // hide the change pass btn
  $('#change-pass').hide()
  // hide the signout btn
  $('#sign-out-btn').hide()
  // when the user clicks the log in link tag from the register form
  $('#sign-in-link').on('click', events.onSwitchForm)
  // when the user clicks the sign up link tag from the sign up form
  $('#sign-up-link').on('click', events.onSwitchForm)
})
