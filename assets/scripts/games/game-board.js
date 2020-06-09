const store = require('./../store.js')
const events = require('./events-games')


const winnerDisplay = function () {
  if (events.currentState === true) {
    return winner
  }
}

//  WINNER
const winner = function () {
  if (store.game.cells[0] === store.game.cells[1] === store.game.cells[2] === 'x') {
    return 'Player "o" is the winner!'
  } else if (store.game.cells[0] === store.game.cells[3] === store.game.cells[6] === 'x') {
    return 'Player "o" is the winner!'
  } else if (store.game.cells[0] === store.game.cells[4] === store.game.cells[8] === 'x') {
    return 'Player "o" is the winner!'
  } else if (store.game.cells[1] === store.game.cells[4] === store.game.cells[7] === 'x') {
    return 'Player "o" is the winner!'
  } else if (store.game.cells[2] === store.game.cells[5] === store.game.cells[8] === 'x') {
    return 'Player "o" is the winner!'
  } else if (store.game.cells[2] === store.game.cells[4] === store.game.cells[6] === 'x') {
    return 'Player "o" is the winner!'
  } else if (store.game.cells[3] === store.game.cells[4] === store.game.cells[5] === 'x') {
    return 'Player "o" is the winner!'
  } else if (store.game.cells[6] === store.game.cells[7] === store.game.cells[8] === 'x') {
    return 'Player "o" is the winner!'
  } else if (store.game.cells[0] === store.game.cells[1] === store.game.cells[2] === 'x') {
    return 'Player "x" is the winner!'
  } else if (store.game.cells[0] === store.game.cells[3] === store.game.cells[6] === 'o') {
    return 'Player "x" is the winner!'
  } else if (store.game.cells[0] === store.game.cells[4] === store.game.cells[8] === 'o') {
    return 'Player "x" is the winner!'
  } else if (store.game.cells[1] === store.game.cells[4] === store.game.cells[7] === 'o') {
    return 'Player "x" is the winner!'
  } else if (store.game.cells[2] === store.game.cells[5] === store.game.cells[8] === 'o') {
    return 'Player "x" is the winner!'
  } else if (store.game.cells[2] === store.game.cells[4] === store.game.cells[6] === 'o') {
    return 'Player "x" is the winner!'
  } else if (store.game.cells[3] === store.game.cells[4] === store.game.cells[5] === 'o') {
    return 'Player "x" is the winner!'
  } else if (store.game.cells[6] === store.game.cells[7] === store.game.cells[8] === 'o') {
    return 'Player "x" is the winner!'
  } else {
    return 'It is a tie!'
  }
}

module.exports = {
  winner,
  winnerDisplay
}
