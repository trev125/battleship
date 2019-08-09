const express = require("express");
const app = express();
const port = 3000;

var commands = require("./commands");

const botGame = async () => {
  let server = app.listen(port, async err => {
    if (err) {
      return console.log("something bad happened", err);
    }

    let game = await commands.startGame(true); // comment out if fighting another bot
    // let gameId = 316; // if manual game, uncomment and enter the game id

    let gameId = game.id;
    let board = await commands.joinGame(gameId);
    console.log("GAME ID:", gameId);
    console.log(
      `Playing now... Watch Live at: http://battleship-smackdown.club/games/${gameId}`
    );
    let position = commands.randStrategy();
    let move = await commands.makeMove(
      gameId,
      position,
      board.currentPlayer.token
    );

    while (move.state !== "DONE") {
      position = commands.randStrategy();
      move = await commands.makeMove(
        gameId,
        position,
        board.currentPlayer.token
      );
    }
    console.log("WINNER: ", move.winner.name);
    server.close();
  });
};

botGame();
