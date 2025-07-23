import { Board, updateBoard } from "./board.js";
import { Players } from "./players.js";
import {DOM} from "./DOMCache.js";


const playTurn = (index) => {
    let currentPlayer = Players.getCurrentPlayer();
    Board.setSquare(currentPlayer, index);
    updateBoard();
    console.log(Board.getBoard());
    if (checkWin()) {
        const winTextBox = DOM.winTextBox;
        let winDiv = document.createElement('div');
        winDiv.className = "winDiv";
        winDiv.textContent = (`${currentPlayer.name} wins`);
        winTextBox.appendChild(winDiv);
        console.log(`${currentPlayer.name} wins`);
    }
    else if (checkTie()) {
        console.log("its a draw");
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

const checkTie = () => {
    const board = Board.getBoard();
    return board.every(cell => cell !== "");
};


export {playTurn};
