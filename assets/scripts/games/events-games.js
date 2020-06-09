'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api-games')
const ui = require('./ui-games')
const store = require('./../store.js')
const gameBoard = require('./game-board')

const onCreateGame = function (event) {
  console.log(event)
  event.preventDefault()
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

// start as x
let currentPlayer = 'x'
const onUpdateGame = function (event) {
  event.preventDefault()

  store.game.cells[$(event.target).data('cell-index')] = currentPlayer

  if ($(event.target).is(':empty')) {
  // add player to html board
    $(event.target).text(currentPlayer)
    // rotate turns
    if (currentPlayer === 'x') {
      currentPlayer = 'o'
    } else {
      currentPlayer = 'x'
    }
  }
  // $(event.target).on('click', gameBoard.winner)
  api.updateGame()
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}
const onGetGames = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getGames(data)
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

module.exports = {
  onCreateGame,
  onGetGames,
  onUpdateGame
}
