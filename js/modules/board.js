const Board = (() => {
    let board = ["", "", "", "", "", "", "", "", ""]; // board as an empty array

    const getBoard = () => {
        return [...board]; // returns copy of board array
    }

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    }

    return {getBoard, resetBoard}
})();

export {Board};