const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#update').html('You have successfully signed-up as: ' + response.user.email)
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#update').html('The email is taken or the parameters are invalid.')
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  console.log(response.user.token)
  store.user = response.user
  $('#update').html('You have successfully signed-in as: ' + response.user.email)
  $('form').trigger('reset')
}

const onSignInFailure = function () {
  $('#update').html('The email or password is invalid')
  $('form').trigger('reset')
}

const onChangePwSuccess = function () {
  $('#update').html('The password was change successfully')
  $('form').trigger('reset')
}

const onChangePwFail = function () {
  $('#update').html('Failed to change password')
  $('form').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#update').html('Successfully signed out')
  store.user = null
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
