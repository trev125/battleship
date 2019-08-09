const axios = require("axios");
const util = require("./utils");
const startGameUrl = "http://battleship-smackdown.club/api/games";

let currBoard = [];
let guesses = [];

module.exports = {
  startGame: async botEnabled => {
    let reqBody = {};
    botEnabled ? (reqBody = { match: true }) : (reqBody = {});

    return axios
      .post(startGameUrl, reqBody, util.defaultHeaders)
      .then(res => {
        return res.data;
      })
      .catch(error => {
        console.error("ERROR: ", error);
      });
  },

  joinGame: gameId => {
    let url = `http://battleship-smackdown.club/api/games/${gameId}/players`;
    let reqBody = util.gameBoard;

    return axios
      .post(url, reqBody, util.defaultHeaders)
      .then(res => {
        currBoard = res.data;
        return res.data;
      })
      .catch(error => {
        console.error("ERROR: ", error);
      });
  },

  makeMove: (gameId, position, token) => {
    let url = `http://battleship-smackdown.club/api/games/${gameId}/moves`;
    let reqHeader = {
      "Content-Type": "application/json",
      "x-auth": `${token}`
    };
    let body = { position: position };

    return axios
      .post(url, body, { headers: reqHeader })
      .then(res => {
        currBoard = res.data;
        return currBoard;
      })
      .catch(error => {
        console.error("ERROR: ", error);
      });
  },

  randStrategy: () => {
    let letter = util.mapToCoordinates(
      Math.floor(Math.random() * 10).toString()
    );
    let number = util.mapToCoordinates(Math.floor(Math.random() * 10) + 2);
    let guess = `${letter}${number}`;

    if (guesses.includes(guess)) {
      guess = module.exports.randStrategy();
      return guess;
    } else {
      guesses.push(guess);
      return guess;
    }
  }
};
