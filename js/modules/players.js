const Players = (() => {
    let players = [
        {
            name: "player 1",
            marker: "X",
            turn: true
        },
        {
            name: "Player 2",
            marker: "O",
            turn: false
        }
    ]

    const getCurrentPlayer = () => {
        return players[0].turn ? players[0] : players[1];
    }

    const switchTurn = () => {
    let currentPlayer = getCurrentPlayer();
    if (currentPlayer == Players.players[0]){
        Players.players[0].turn = false;
        Players.players[1].turn = true;
        currentPlayer = Players.players[1];
    }
    else {
        Players.players[1].turn = false;
        Players.players[0].turn = true;
        currentPlayer = Players.players[0];
    };
};


    return {getCurrentPlayer, players, switchTurn}
})();

export {Players}