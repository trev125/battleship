module.exports = {
  gameBoard: {
    name: "BOT-Trevor",
    board: {
      carrier: { position: "J1", direction: "vertical" }, // size: 5
      battleship: { position: "F6", direction: "vertical" }, // size: 4
      cruiser: { position: "I7", direction: "vertical" }, // size: 3
      submarine: { position: "B4", direction: "horizontal" }, // size: 3
      destroyer: { position: "I10", direction: "horizontal" } // size: 2
    }
  },
  defaultHeaders: {
    "Content-Type": "application/json"
  },

  mapToCoordinates: index => {
    let letterMap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    if (typeof index == "string") {
      return letterMap[index];
    } else {
      return index === 0 ? index : index - 1;
    }
  }
};
