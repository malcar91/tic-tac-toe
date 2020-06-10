const store = require('./../store.js')

const onGetGamesSuccess = (response) => {
  console.log(response)
  $('#message').text(`Games played... Placeholder`) // need to add something like ${store.games}
}

const onGetGamesFailure = (response) => {
  $('#message').text('Unable to get the requested games.')
  // an idea
  // let gamesHtml = ''
  // store.games.forEach(game => {
  //   const oneGame = (`
  //     <p>Game Result:${game.cells}</p>
  //     <p>ID: ${game._id}</p>
  //     <p>Date Created: ${game.createdAt}</p>
  //     <p>Updated On: ${game.updatedAt}</p>
  //     <br>
  //   `)
  //   gamesHtml = gamesHtml + oneGame
  // })
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

const onUpdateGameSuccess = (response) => { // maybe include a message about the winner here, if the game is over
  $('#message').text('Valid move!')
  // const winner = gameBoard.winner(gameBoard.currentGame)
  // if (winner.toLowerCase() === 'x') {
  //   $('#message').text('Game Over - X won')
  // } else if (winner.toLowerCase() === 'o') {
  //   $('#message').text('Game Over - O won')
  // } else if (gameBoard.currentMove > 8) {
  //   $('#message').text("Game Over - It's a draw")
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
