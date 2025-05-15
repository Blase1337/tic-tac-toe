/* 
What I need:
1. Display controller- something to update the interface after the console version is working
*/




const Gameboard = (function () {
    let board = ["","","","","","","","",""];
    const getBoard = () => {
        return [...board];
    }
    const placeMarker = (pos, marker) =>{ 
        if (board[pos] == "") {
            board[pos] = marker;
        }
        else {
            console.log("This square is taken");
        }
    }
    const resetBoard = () => {
        board = ["","","","","","","","",""];
    }
    return {getBoard, placeMarker, resetBoard}
})();

const Players = (function () {
    const players = [
        {
            name: "Player 1",
            marker: "X"
        },
        {
            name: "Player 2",
            marker: "O"
        }
    ]

    const getPlayers = () => {
        return [...players];
    }
    let activePlayer = getPlayers()[0];

    const switchTurn = () => {
        activePlayer = activePlayer === getPlayers()[0] ? getPlayers()[1] : getPlayers()[0];
    }

    const getActivePlayer = () => {
        return activePlayer;
    }

    return {getPlayers, switchTurn, getActivePlayer}
})();

const GameController = (function () {
    const playTurn = (pos) => {
        const activePlayer = Players.getActivePlayer();
        const marker = activePlayer.marker;
        Gameboard.placeMarker(pos, marker);
        let winner = checkWin();
        if (winner) {
            console.log(winner)
        }
        else {
            Players.switchTurn()
        }
    }

    const checkWin = () => {
        const board = Gameboard.getBoard();
        let winCondition = [[0,1,2], [3,4,5], [6,7,8], // left to right
                            [0,3,6], [1,4,7], [2,5,8],// up to down
                            [0,4,8], [2,4,6] // diagonal
                            ]
        for (let combo of winCondition) {
            const [a,b,c] = combo
            if (board[a] && board[a] == board[b] && board[b] == board[c]){
                return Players.getActivePlayer().name; //winning marker
            }
        }
    }
    return {playTurn, checkWin}
})();


const DisplayController = (function () {
    const boardContainer = document.getElementById('gameboard');

    const renderBoard = () => {
        const board = Gameboard.getBoard();
        boardContainer.innerHTML = "";

        board.forEach((cell, index) => {
            const cellElement = document.createElement("div");
            cellElement.classList.add("cell");
            cellElement.textContent = cell;

            cellElement.addEventListener("click", () => {
                if (cellElement.textContent == "") {
                    GameController.playTurn(index);
                    renderBoard();
                }
            })
            boardContainer.appendChild(cellElement);

        });
    }

    return {renderBoard}
})();

DisplayController.renderBoard();