const config = require('./../config')
const store = require('./../store')

const getQuizzes = function () {
  return $.ajax({
    url: config.apiUrl + '/quizzes',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
  })
}

const createQuiz = function (data) {
  return $.ajax({
    url: config.apiUrl + '/quizzes',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'POST',
    data: data
  })
}

module.exports = {
  getQuizzes,
  createQuiz
}
