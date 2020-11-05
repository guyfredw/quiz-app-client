
const onSignUpSuccess = function (response) {
  $('#update').html('You have successfully signed-up as: ' + response.user.email)
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#update').html('The email is taken or the parameters are invalid.')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
