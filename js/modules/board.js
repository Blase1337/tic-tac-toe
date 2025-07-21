const Board = (() => {
    let board = ["", "", "", "", "", "", "", "", ""]; // board as an empty array

    const getBoard = () => {
        return [...board]; // returns copy of board array
    }

    const updateBoard = (currentPlayer, index) => {
        board[index] = currentPlayer.marker;
    }

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    }

    return {getBoard, resetBoard, updateBoard}
})();

const renderBoard = () => {
    let boardContainer = document.getElementById("boardContainer");
    for( let i= 0; i< Board.getBoard().length; i++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click", () => {
            
        })
        boardContainer.appendChild(cell);
        }

};

const updateBoard = () => {
    let cellList = document.querySelectorAll(".cell");
    Board.getBoard().forEach((value, i) => {
        cellList[i].textContent = value;
    })
}


export {Board, renderBoard, updateBoard};