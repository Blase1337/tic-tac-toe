import { Board } from "./board.js";
import { Players } from "./players.js";


const playTurn = (index) => {
    const currentPlayer = Players.getCurrentPlayer();
    Board.updateBoard(currentPlayer, index)
    console.log(Board.getBoard());
    if (checkWin()) {
        console.log(`${currentPlayer.name} wins`)
    }
    else {
        Players.switchTurn();
    }
    
};


const checkWin = () => { 
    const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const board = Board.getBoard();
    for (let i = 0; i < winConditions.length; i++){ //loops through all winconditions to check for winner
        let [a,b,c] = winConditions[i];
        if (board[a] != "" && board[a] == board[b] && board[b] == board[c]) {
            return board[a];
        }
    }
    return null;
};


export {playTurn};
