const store = require('./../store.js')

const onGetGamesSuccess = (response) => {
  console.log(response)
  $('#message').text(`You successfully retrived your previous games! Games played:${response.games.length}`)
  $('#message1').hide()
  // let gamesHtml = ''
  // response.games.forEach(game => {
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

const onGetGamesFailure = (response) => {
  $('#message').text('Unable to get the requested games.')
}

const onCreateGameSuccess = (response) => {
  $('#message').text('New game created. Start playing!')
  $('.row').show()

  store.game = response.game
  store.games = response.games
  console.log(store.game)
}

const onCreateGameFailure = (response) => {
  $('#message').text('Unable to create a new game.')
}

const onUpdateGameSuccess = (response) => {
  $('#message').text('Valid move!')
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
