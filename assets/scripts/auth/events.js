// require the get form fields function
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// What happends on sign up form submission
const onSignUp = function (event) {
  event.preventDefault()

  // get the target info
  const form = event.target

  // get the data from the forms
  const data = getFormFields(form)

  // console.log(data)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

module.exports = {
  onSignUp,
  onSignIn
}
