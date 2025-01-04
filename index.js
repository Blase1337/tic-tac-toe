const Gameboard = (function() {
    let board = [" "," "," "," "," "," "," "," "," "];
    const resetBoard = () => board = [" "," "," "," "," "," "," "," "," "];

    return {board, resetBoard};
})();

const Players = (function() {
    const players = [
        {
            name: player1,
            marker: "x"
        },
        {
            name: player2,
            marker: "o"
        }
    ];
    let activePlayer = players[0];

    const switchTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] :players[0]
    };

    const getActivePlayer = () => activePlayer;
    return {players, getActivePlayer, switchTurn}
})();

function GameController() {
    const board = Gameboard.board;
    const players = Players.players;
    const activePlayer = Players.getActivePlayer;

    const checkwin = () => {
        const winCondition = [[board[0],board[1],board[2]], [board[3],board[4],board[5]], [board[6],board[7],board[8]],[board[0],board[4],board[8]], [board[6],board[4],board[2]]];
        for(let combo of winCondition){
            const [a,b,c] = combo;
            if (board[a] === board[b] && board[b] === board[c]){
                return board[a];
            }
        }
    }
    const playTurn = (pos, marker) =>{
        board[pos] = marker;
        checkWin();
    }
}

