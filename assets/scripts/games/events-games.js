'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api-games')
const ui = require('./ui-games')

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
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
