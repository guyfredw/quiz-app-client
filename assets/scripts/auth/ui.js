
const onSignUpSuccess = function (response) {
  $('#update').html('You have successfully signed-up as: ' + response.user.email)
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#update').html('The email is taken or the parameters are invalid.')
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#update').html('You have successfully signed-in as: ' + response.user.email)
  $('form').trigger('reset')
}

const onSignInFailure = function () {
  $('#update').html('The email or password is invalid')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
