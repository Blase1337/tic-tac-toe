const Gameboard = () => {
    const row = 3;
    const column = 3;
    const board = []

    for (let i = 0; i < row; i++){
        board[i] = []
        for(let j = 0; j < column; j++){
            board[i].push('');
        }
    }

    const getBoard = () => board;

    const placeMarker = (marker, col, row) => {
        if(board[row][col] === ''){
            board[row][col] = marker;
            return true;
        }
        return false
    };

    const resetBoard = () => {
        for (let i = 0; i < row; i++){
            for (let j = 0; j < column; j++){
                board[i][j] = '';
            }
        }
    };
    return { getBoard, placeMarker, resetBoard};
};

const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;

    return { getName, getMarker};
}

const Game = (() => {
    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', 'O');

    const board = Gameboard();

    let currentPlayer = player1;

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    const playTurn = (row, col) => {
        if (board.placeMarker(currentPlayer.getMarker(), col, row)) {
            if (checkWin()){
                displayController.updateMessage(`${currentPlayer.getName()} wins!`)
            }
            else if (checkTie()){
                displayController.updateMessage("It's a tie!")
            }
            else {
                switchPlayer()
            }
            displayController.updateDisplay(board.getBoard());
        }
        else {
            displayController.updateMessage("Cell is already taken!");
        }
    }

    const checkWin = () => {
        const winningCombo = [
            [[0, 0], [0, 1], [0, 2]],  // First row
            [[1, 0], [1, 1], [1, 2]],  // Second row
            [[2, 0], [2, 1], [2, 2]],  // Third row
            [[0, 0], [1, 0], [2, 0]],  // First column
            [[0, 1], [1, 1], [2, 1]],  // Second column
            [[0, 2], [1, 2], [2, 2]],  // Third column
            [[0, 0], [1, 1], [2, 2]],  // Diagonal from top-left to bottom-right
            [[2, 0], [1, 1], [0, 2]],  // Diagonal from bottom-left to top-right
        ];
    
        for (let combo of winningCombo) {
            const [a, b, c] = combo;
            if (
                board.getBoard()[a[0]][a[1]] &&
                board.getBoard()[a[0]][a[1]] === board.getBoard()[b[0]][b[1]] &&
                board.getBoard()[a[0]][a[1]] === board.getBoard()[c[0]][c[1]]
            ) {
                return true;
            }
        }
        return false; // No winning combination found
    }

    const checkTie = () => {
        const boardArray = board.getBoard();

        for (let row of boardArray) {
            for (let cell of row){
                if (cell === ''){
                    return false;
                }
            }
        }
        return true;
    }

    const getBoard = () => board.getBoard();

    return { playTurn, getBoard };

})();

const displayController = (() => {
    const boardElement = document.getElementById('gameboard');
    const messageElement = document.getElementById('message');

    const renderBoard = (board) => {
        boardElement.innerHTML = '';
        board.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                const cellElement = document.createElement('div');
                cellElement.classList.add('cell')
                cellElement.textContent = cell;
                cellElement.addEventListener('click', () => {
                    Game.playTurn(rowIndex, colIndex);
                })
                boardElement.appendChild(cellElement);
            })
        })
    };

    const updateMessage = (message) => {
        messageElement.textContent = message;
    }

    const updateDisplay = (board) => {
        renderBoard(board);
    }

    return {renderBoard, updateMessage, updateDisplay };
})();

document.addEventListener('DOMContentLoaded', () => {
    displayController.renderBoard(Game.getBoard());
    displayController.updateMessage("Player 1's turn")
});