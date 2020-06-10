const store = require('./../store.js')

let winner = false
let winnerCheck = function () {
for (let i = 0; i < store.game.cells.length; i++) {
  if (store.game.cells[i] === 'x') {
    if ((store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[1] && store.game.cells[i] === store.game.cells[2]) || (store.game.cells[i] === store.game.cells[3] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[5]) || (store.game.cells[i] === store.game.cells[6] && store.game.cells[i] === store.game.cells[7] && store.game.cells[i] === store.game.cells[8]) || (store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[3] && store.game.cells[i] === store.game.cells[6]) || (store.game.cells[i] === store.game.cells[1] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[7]) || (store.game.cells[i] === store.game.cells[2] && store.game.cells[i] === store.game.cells[5] && store.game.cells[i] === store.game.cells[8]) || (store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[8]) || (store.game.cells[i] === store.game.cells[2] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[6])) {
      console.log('x won')
      $('.board').hide()
      $('.box').text('X WON!')
      store.game.over = true
    }
    return winner = true
  } else if (store.game.cells[i] === 'o') {
    if ((store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[1] && store.game.cells[i] === store.game.cells[2]) || (store.game.cells[i] === store.game.cells[3] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[5]) || (store.game.cells[i] === store.game.cells[6] && store.game.cells[i] === store.game.cells[7] && store.game.cells[i] === store.game.cells[8]) || (store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[3] && store.game.cells[i] === store.game.cells[6]) || (store.game.cells[i] === store.game.cells[1] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[7]) || (store.game.cells[i] === store.game.cells[2] && store.game.cells[i] === store.game.cells[5] && store.game.cells[i] === store.game.cells[8]) || (store.game.cells[i] === store.game.cells[0] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[8]) || (store.game.cells[i] === store.game.cells[2] && store.game.cells[i] === store.game.cells[4] && store.game.cells[i] === store.game.cells[6])) {
      console.log('o won')
      $('.board').hide()
      $('.box').text('O WON!')
    }
    return winner = true
  }
}

const checkTie = function () {
  if (winner === false && store.game.cells.every(e => e !== '')) {
    console.log('tie')
    $('.board').hide()
    $('.box').text("It's a tie!")
    store.game.over = true
  }
}
}
