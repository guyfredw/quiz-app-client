const config = require('./../config')
const store = require('./../store')

// Index
const getQuizzes = function () {
  return $.ajax({
    url: config.apiUrl + '/quizzes',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'GET'
  })
}

// CREATE
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

// DELETE
const deleteQuiz = function (data) {
  return $.ajax({
    url: config.apiUrl + '/quizzes/' + data.credentials.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'DELETE'
  })
}

// UPDATE

const updateQuiz = function (data) {
  return $.ajax({
    url: config.apiUrl + '/quizzes/' + data.credentials.id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data,
    method: 'PATCH'
  })
}

module.exports = {
  getQuizzes,
  createQuiz,
  deleteQuiz,
  updateQuiz
}
