const Gameboard = (function() {
    let board = [" "," "," "," "," "," "," "," "," "];
    const resetBoard = () => board = [" "," "," "," "," "," "," "," "," "];

    return {board, resetBoard};
})();

const Players = (function() {
    const getPlayers = [
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
        activePlayer = activePlayer === players[0] ? players[1] :players[0] //ternary operator to switch player
    };

    const getActivePlayer = () => activePlayer; //returns the active player use after switching turns
    return {getPlayers, getActivePlayer, switchTurn}
})();

function GameController() {
    const board = Gameboard.board();
    const players = Players.getPlayers();
    const activePlayer = Players.getActivePlayer();

    const checkwin = () => {
        const winCondition = [[0,1,2], [3,4,5], [6,7,9],[0,4,8], [6,4,2]];
        for(let combo of winCondition){
            const [a,b,c] = combo;
            if (board[a] === board[b] && board[b] === board[c]){
                return board[a]; //returns the winner
            }
        }
        return null //no winner
    }

    const playTurn = (pos, marker) =>{
        board[pos] = marker;
        const winner = checkwin(); //returns either null (no winner) or the marker of the winner
        if (!winner) { //null would be falsy any string/value would be truthy
            Players.switchTurn();
            activePlayer = Players.getActivePlayer();
        }
        
    }
    return {playTurn, checkwin}
};

