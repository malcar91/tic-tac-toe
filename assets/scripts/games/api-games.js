const config = require('./../config')
const store = require('./../store.js')
const events = require('./events-games')

const createGame = function (response) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = (index, currentPlayer) => {
  console.log(store.game)
  // const currentPlayer = store.game.player1Move ? 'x' : 'o'
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: currentPlayer
        },
        over: store.game.over
      }
    }
  })
}

const getGames = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  getGames,
  updateGame
}
