import { GridPosition } from "./gridPosition.js";
const BOARD_NB_COLUMNS = 21;
const BOARD_NB_ROWS = 21;
export function getRandomGridPosition() {
    return new GridPosition(randomNumber(1, BOARD_NB_COLUMNS), randomNumber(1, BOARD_NB_ROWS));
    function randomNumber(minNumber, maxNumber) {
        return minNumber + Math.floor((maxNumber - minNumber + 1) * Math.random());
    }
}
export function getCenterGridPosition() {
    return new GridPosition(Math.round(BOARD_NB_COLUMNS / 2), Math.round(BOARD_NB_ROWS / 2));
}
export function isInsideGrid(position) {
    return (position.x > 0 &&
        position.y > 0 &&
        position.x <= BOARD_NB_COLUMNS &&
        position.y <= BOARD_NB_ROWS);
}
//# sourceMappingURL=grid.js.map