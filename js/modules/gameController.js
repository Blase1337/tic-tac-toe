import { Board } from "./board.js";
import { Players } from "./players.js";

let currentPlayer = Players.getCurrentPlayer();
const playTurn = (index) => {
    Board.updateBoard(currentPlayer, index)
    console.log(Board.getBoard());
    switchTurn();
}

const switchTurn = () => {
    if (currentPlayer == Players.players[0]){
        Players.players[0].turn = false;
        Players.players[1].turn = true;
        currentPlayer = Players.players[1];
    }
    else {
        Players.players[1].turn = false;
        Players.players[0].turn = true;
        currentPlayer = Players.players[0];
    }
}


export {playTurn};
