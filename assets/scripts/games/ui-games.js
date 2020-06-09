const store = require('./../store.js')
const choice = require('./game-board')

const onGetGamesSuccess = (response) => {
  console.log(response)
}

const onGetGamesFailure = (response) => {
  $('#message').text('Unable to get the requested games.')
}

const onCreateGameSuccess = (response) => {
  $('#message').text('New game created. Start playing!')
  $('.row').show()
  $('#new-game').show()
  store.game = response.game
}

const onCreateGameFailure = (response) => {
  $('#message').text('Unable to create a new game.')
}

const onUpdateGameSuccess = (response) => {
  $('.box').text(choice.)
}

const onUpdateGameFailure = (response) => {
  $('#message').text('Invalid input!')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onGetGamesSuccess,
  onGetGamesFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
