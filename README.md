# Tic Tac Toe Game Project
The Tic Tac Toe app I built is a client-side app and uses a RAILS server.

# The technologies used:
HTML
CSS
Bootstrap
Javascript
ajax
node.js
JQuery

The server provides authentication and persists the game objects. A user creates a user account, logs in and can then plays tic tac toe and views how many games they've played so far. Additionally, the authentication piece allows the user to change their password and log out. A game is created on the server and 2 players play until one player wins or there are no moves left, ie, a draw.

# Planning
My planning began with a thorough read of the game API and the assignmemt requirements. Then I developed a plan with a schedule and goals that I want to achive each day.

# Data Structures
player object
 attributes - id, email, accessToken
 methods - signIn, signUp, changePassWord, signOut, gamesWon, gamesPlayed
game object
  attributes - player_x (player object), player_o (player object), move
success/failure states and messages

Wireframe



User Stories
As a user I want to be able to create a user account/sign up and after that sign in.
Once I'm signed in I want to be able to press a button and play the game, to change my password, to view stats of my previously played games and sign out. I want to be able to start a new game(after the game has ended or even in the middle of the game.)

Building the App
I structured my app as per the trainings from class. I realized that store.js was not the best choice for the game and player data structures. I moved them into a seperate file, gameEngine.js which allowed me to encapsulate the game and player objects in a separate file. What I did not expect was the interaction the among the events, api's, ui's and the game data. I expected the game data to be available to the event handling by simply requiring the files when needed. This was not the case. Game object methods were not allways able to access the data they needed that was stored in the same file. As time ran slim, I passed data as arguments into the methods that needed them. I still don't really know why this happened or how to fix it. As time permits I will explore the issues.

I thought about re-structuring the objects, but I didn't have the time. I learned a lot about why planning up is so important.

I also ran out of time before I could give the user a list of in-progress games that they could select from instead of creating new games each time they wanted to play.
