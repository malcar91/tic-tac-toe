'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api-games')
const ui = require('./ui-games')
const store = require('./../store.js')

const onCreateGame = function (event) {
  console.log(event)
  event.preventDefault()
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

// start as x
let currentPlayer = 'x'
let currentState = false
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
  const changeCurrentState = function () {
    if (currentState === false && $(event.target) !== undefined) {
      currentState = true
    }
    return currentState
  }
  api.updateGame()
    .then(ui.showSuccess)
    .catch(ui.showFailure)
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
  onUpdateGame,
  currentState
}
