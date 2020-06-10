'use strict'

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
  const board = store.game.cells
  if (board[0] === board[1] && board[0] === board[2] && board[0] !== '') {
    console.log('Winner is ' + board[0])
    $('.row').hide()
    $('#display-winner').show().text(`Player ${board[0]} won. To play a new game click NEW GAME!`)
    store.game.over = true
  } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {
    console.log('winner is ' + board[3])
    $('.row').hide()
    $('#display-winner').show().text(`Player ${board[3]} won. To play a new game click NEW GAME!`)
    store.game.over = true
  } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {
    console.log('winner is ' + board[6])
    $('.row').hide()
    $('#display-winner').show().text(`Player ${board[6]} won. To play a new game click NEW GAME!`)
    store.game.over = true
  } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== '') {
    console.log('winner is ' + board[0])
    $('.row').hide()
    $('#display-winner').show().text(`Player ${board[0]} won. To play a new game click NEW GAME!`)
    store.game.over = true
  } else if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {
    console.log('winner is ' + board[2])
    $('.row').hide()
    $('#display-winner').show().text(`Player ${board[2]} won. To play a new game click NEW GAME!`)
    store.game.over = true
  } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {
    console.log('winner is ' + board[1])
    $('.row').hide()
    $('#display-winner').show().text(`Player ${board[1]} won. To play a new game click NEW GAME!`)
    store.game.over = true
  } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {
    console.log('winner is ' + board[0])
    $('.row').hide()
    $('#display-winner').show().text(`Player ${board[0]} won. To play a new game click NEW GAME!`)
    store.game.over = true
  } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {
    console.log('winner is ' + board[2])
    $('.row').hide()
    $('#display-winner').show().text(`Player ${board[2]} won. To play a new game click NEW GAME!`)
    store.game.over = true
  }
  // for (let i = 0; i < store.game.cells.length; i++) {
  //   if (store.game.cells[i] === 'x') {
  //     if ((store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[1] && store.game.cells[i] === store.game.cells[2]) || (store.game.cells[i] === store.game.cells[3] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[5]) || (store.game.cells[i] === store.game.cells[6] && store.game.cells[i] === store.game.cells[7] && store.game.cells[i] === store.game.cells[8]) || (store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[3] && store.game.cells[i] === store.game.cells[6]) || (store.game.cells[i] === store.game.cells[1] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[7]) || (store.game.cells[i] === store.game.cells[2] && store.game.cells[i] === store.game.cells[5] && store.game.cells[i] === store.game.cells[8]) || (store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[8]) || (store.game.cells[i] === store.game.cells[2] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[6])) {
  //       console.log('x won')
  //       $('.board').hide()
  //       $('.box').text('X WON!')
  //       store.game.over = true
  //       winner = true
  //     }
  //     return winner
  //   } else if (store.game.cells[i] === 'o') {
  //     if ((store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[1] && store.game.cells[i] === store.game.cells[2]) || (store.game.cells[i] === store.game.cells[3] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[5]) || (store.game.cells[i] === store.game.cells[6] && store.game.cells[i] === store.game.cells[7] && store.game.cells[i] === store.game.cells[8]) || (store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[3] && store.game.cells[i] === store.game.cells[6]) || (store.game.cells[i] === store.game.cells[1] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[7]) || (store.game.cells[i] === store.game.cells[2] && store.game.cells[i] === store.game.cells[5] && store.game.cells[i] === store.game.cells[8]) || (store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[8]) || (store.game.cells[i] === store.game.cells[2] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[6])) {
  //       console.log('o won')
  //       $('.board').hide()
  //       $('.box').text('O WON!')
  //       winner = true
  //     }
  //     return winner
  //   }

  if (store.game.cells.every(e => e !== '')) {
    console.log('tie')
    $('.row').hide()
    $('#display-winner').show().text("It's a tie! To play a new game click NEW GAME!")
    store.game.over = true
    console.log(store.game)
  }

  const newGame = function (event) {
    event.preventDefault()
    $('.box').html('')
    store.game.cells = ['', '', '', '', '', '', '', '', '']
    store.game.over = false
    currentPlayer = 'x'
    $('.row').show()
    $('#display-winner').hide()
  }

  $('#new-game').on('click', newGame)

  api.updateGame()
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

module.exports = {
  onCreateGame,
  onGetGames,
  onUpdateGame
}
