'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gamesEvents = require('./games/events-games')
const gameBoard = require('./games/game-board')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.row').hide()
  $('#new-game').hide()
  $('#play-game').on('submit', gamesEvents.onCreateGame)
  $('.box').on('click', gamesEvents.onUpdateGame)
  // $('#new-game').on('submit', gamesEvents.onCreateGame)
  $('#stats').on('submit', gamesEvents.onGetGames)
})
