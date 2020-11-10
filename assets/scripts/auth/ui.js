const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#update').html('You have successfully signed-up as: ' + response.user.email)
  $('form').trigger('reset')
  $('#sign-up-form').hide()
  $('#sign-in-form').show()
}

const onSignUpFailure = function () {
  $('#update').html('The email is taken or the parameters are invalid.')
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  // console.log(response.user.token)
  store.user = response.user
  $('#update').html('You have successfully signed-in as: ' + response.user.email)
  $('form').trigger('reset')
  $('#menu-btns').show()
  // hide the change pass btn
  $('#change-pass').show()
  // hide the signout btn
  $('#sign-out-btn').show()
  // hide the signin form
  $('#sign-in-form').hide()
}

const onSignInFailure = function () {
  $('#update').html('The email or password is invalid')
  $('form').trigger('reset')
}

const onChangePwSuccess = function () {
  $('#update').html('The password was changed successfully')
  $('form').trigger('reset')
}

const onChangePwFail = function () {
  $('#update').html('Failed to change password')
  $('form').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#update').html('Successfully signed out')
  store.user = null
  $('#menu-btns').hide()
  // hide the change pass btn
  $('#change-pass').hide()
  // hide the signout btn
  $('#sign-out-btn').hide()
  // show to register form
  $('#sign-up-form').show()
  // hide the index list and reset it
  $('#display-quizzes').html('')
  $('#display-quizzes').hide()
  // hide the change password form
  $('#change-pass-form').hide()
  // hide the menu forms called by the menu buttons
  $('#create-quiz-form').hide()
  $('#change-quiz-form').hide()
  $('#update-quiz-form').hide()
  $('#delete-quiz-form').hide()
  $('#take-quiz-form').hide()
  $('#myTest').hide()
}

const onSignOutFail = function () {
  $('#update').html('Failed to sign-out')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFail,
  onSignOutSuccess,
  onSignOutFail
}
