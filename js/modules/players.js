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

    return {getCurrentPlayer, players}
})();

export {Players}