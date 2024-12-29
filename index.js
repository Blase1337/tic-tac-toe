const Gameboard = (() => {
    let board = ["","","","","","","","",""];

    const getBoard = () => {
        return board;
    }

    const resetBoard = () => {
        board = ["","","","","","","","",""];
    }

    const updateBoard = (index, marker) => {
        if (board[index] === ""){
            board[index] = marker;
        } 
    };

    return {
        getBoard,
        resetBoard,
        updateBoard
    }
})();

const Player = (name, marker) => {
    return {name, marker};
}

const game = (() => {
    let currentPlayer = Player("P1", "X");
    let players = [Player("P1", "X"), Player("P2", "O")];
    let isGameOver = false;

    const switchTurn = () => {
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    };
    

    const winningCombos = [
        [0,1,2], [3,4,5],[6,7,8], //rows
        [0,3,6],[1,4,7],[2,5,8], //cols
        [0,4,8],[2,4,6]         //diagonal
    ];

    const checkWin = () => {
        const board = Gameboard.getBoard();
        for (let i = 0; i< winningCombos.length; i++){
            const [a,b,c] = winningCombos[i];
            if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]){
                isGameOver = true;
                return board[a];
            }

        };
        return null;
    };

    const playerTurn = (index) => {
        checkWin();
        if (!isGameOver) {
            Gameboard.updateBoard(index, currentPlayer.marker);
            switchTurn();
        }
        else {
            console.log(`Player ${currentPlayer} wins!`)
        }
    };
    return{ playerTurn };
 
})();


const displayController = (() => {
    const renderBoard = () => {
        let gameboardDiv = document.getElementById('gameboard');
        const board = Gameboard.getBoard();

        board.forEach((mark, index) => {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.textContent = mark;

            cell.addEventListener('click', () => {
                handleCellClick(index);

            });
            gameboardDiv.appendChild(cell);
        });

        const handleCellClick = (index) => {
            const board = Gameboard.getBoard();

            if (board[index] === ""){
                game.playerTurn(index);

            }
        };
        
    }
    return { renderBoard };
})();

displayController.renderBoard();