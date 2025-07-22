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

    let currentPlayer = players[0];

    const getCurrentPlayer = () => currentPlayer

    const switchTurn = () => {
        console.log(currentPlayer);
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    };

    const resetTurn = () => currentPlayer = players[0];


    return {getCurrentPlayer, switchTurn, resetTurn }
})();

export {Players}