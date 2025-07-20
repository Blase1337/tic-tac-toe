const Board = (() => {
    let board = ["X", "X", "X", "", "", "", "", "", ""]; // board as an empty array

    const getBoard = () => {
        return [...board]; // returns copy of board array
    }

    const updateBoard = (currentPlayer, index) => {
        console.log(currentPlayer.marker);
        board[index] = currentPlayer.marker;
    }

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    }

    return {getBoard, resetBoard, updateBoard}
})();

export {Board};