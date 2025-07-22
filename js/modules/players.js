const Players = (() => {
    let players = [
        {
            name: "player 1",
            marker: "X",
        },
        {
            name: "Player 2",
            marker: "O",
        }
    ]

    const getCurrentPlayer = () => {
        let currentPlayer = players[0];
        return currentPlayer;
    }

    const switchTurn = () => {
        let currentPlayer = getCurrentPlayer();
        return currentPlayer === players[0] ? players[1] : players[0];
};


    return {getCurrentPlayer, switchTurn}
})();

export {Players}