const Gameboard = (function() {
    let board = ["","","","","","","","",""];
    const getBoard = () => [...board];
    const placeMarker = (pos, marker) => {
        if (board[pos] === "") {
            board[pos] = marker;
        }
        else {
            console.log("Please pick a valid square");
        }
    }
    const resetBoard = () => board = ["","","","","","","","",""];

    return {getBoard, resetBoard, placeMarker};
})();

const Players = (function() {
    const players = [
        {
            name: "player1",
            marker: "x"
        },
        {
            name: "player2",
            marker: "o"
        }
    ];

    const getPlayers = () => [...players];
    let activePlayer = getPlayers()[0];

    const switchTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] :players[0] //ternary operator to switch player
    };

    const getActivePlayer = () => activePlayer; //returns the active player use after switching turns
    return {getPlayers, getActivePlayer, switchTurn}
})();

function GameController() {
    const players = Players.getPlayers();
    let activePlayer = Players.getActivePlayer();

    const checkwin = () => {
        const board = Gameboard.getBoard();
        const winCondition = [[0,1,2], [3,4,5], [6,7,8],[0,4,8], [6,4,2], [0,3,6], [1,4,7],[2,5,8]];
        for(let combo of winCondition){
            const [a,b,c] = combo;
            if (board[a] === board[b] && board[b] === board[c]){
                return board[a]; //returns the winner
            }
        }
        return null //no winner
    }

    const playTurn = (pos) =>{
        const marker = activePlayer.marker;
        Gameboard.placeMarker(pos, marker);
        const winner = checkwin(); //returns either null (no winner) or the marker of the winner
        if (winner) { //null would be falsy any string/value would be truthy
            console.log(`${winner} has won`)
            Gameboard.resetBoard();
        }
        Players.switchTurn();
        activePlayer = Players.getActivePlayer();
        
    }
    return {playTurn, checkwin}
};

