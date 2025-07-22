import {playTurn} from "./gameController.js"
import {Players} from "./players.js"

const Board = (() => {
    let board = ["", "", "", "", "", "", "", "", ""]; // board as an empty array

    const getBoard = () => {
        return [...board]; // returns copy of board array
    }

    const setSquare = (currentPlayer, index) => {
        board[index] = currentPlayer.marker;
    }

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    }

    return {getBoard, resetBoard, setSquare}
})();

const renderBoard = () => {
    let boardContainer = document.getElementById("boardContainer");
    for( let i= 0; i< Board.getBoard().length; i++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", (e) => {
            const index = Number(e.target.dataset.index);
            console.log(index);
            if (Board.getBoard()[index] == "") {
                playTurn(index);
            }
        })
        boardContainer.appendChild(cell);
        }
};

const updateBoard = () => {
    let cellList = document.querySelectorAll(".cell");
    const board = Board.getBoard();
    cellList.forEach((cell) => {
        const index = Number(cell.dataset.index);
        cell.textContent = board[index];
    })
}



const resetBoardButton = () => {
    let resetBtn = document.getElementById("resetBtn");
    resetBtn.addEventListener("click", () => {Board.resetBoard(); Players.resetTurn(); updateBoard(); })
    
}



export {Board, renderBoard, updateBoard, resetBoardButton};