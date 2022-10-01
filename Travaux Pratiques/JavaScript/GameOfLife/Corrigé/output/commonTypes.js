export var TileStatus;
(function (TileStatus) {
    TileStatus[TileStatus["Off"] = 0] = "Off";
    TileStatus[TileStatus["On"] = 1] = "On";
})(TileStatus || (TileStatus = {}));
export var GameMode;
(function (GameMode) {
    GameMode[GameMode["Readonly"] = 0] = "Readonly";
    GameMode[GameMode["Editable"] = 1] = "Editable";
})(GameMode || (GameMode = {}));
export class GridPosition {
    constructor(x, y) {
        this.isOnPosition = (position) => this.row === position.row && this.column === position.column;
        this.toNumber = () => 1000 * this.column + this.row;
        this.getAllAdjacentPositions = () => {
            return [
                new GridPosition(this.row - 1, this.column - 1),
                new GridPosition(this.row - 1, this.column),
                new GridPosition(this.row - 1, this.column + 1),
                new GridPosition(this.row, this.column - 1),
                new GridPosition(this.row, this.column + 1),
                new GridPosition(this.row + 1, this.column - 1),
                new GridPosition(this.row + 1, this.column),
                new GridPosition(this.row + 1, this.column + 1)
            ];
        };
        this.row = x;
        this.column = y;
    }
}
//# sourceMappingURL=commonTypes.js.map