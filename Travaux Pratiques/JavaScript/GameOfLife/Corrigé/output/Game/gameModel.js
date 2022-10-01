import { TileStatus, GameMode } from '../commonTypes.js';
export default class GameModel {
    constructor(settingsModel) {
        this.settingsModel = settingsModel;
        this.initGrid = (nbLine, nbColumn) => {
            let gridResult = [];
            for (let i = 0; i < nbLine; ++i) {
                gridResult.push(Array(nbColumn).fill(TileStatus.Off));
            }
            this.grid = gridResult;
        };
        //TEST ABE ?
        this.clearSolution = () => {
            this.setGridAction((x, y) => {
                this.grid[x][y] = TileStatus.Off;
            });
        };
        this.getIntervalTime = () => (this.settingsModel.delayInMs > 0) ? this.settingsModel.delayInMs : 0;
        this.resetGrid = () => {
            this.setGridAction((line, column) => this.grid[line][column] = TileStatus.Off);
        };
        this.setGridAction = (action) => {
            for (let lineIndex = 0; lineIndex < this.settingsModel.gridSize.nbLine; ++lineIndex) {
                for (let columnIndex = 0; columnIndex < this.settingsModel.gridSize.nbColumn; ++columnIndex) {
                    action(lineIndex, columnIndex);
                }
            }
        };
        this.resetPosition = (position) => {
            if (position !== undefined) {
                this.setGridElement(position.row, position.column, TileStatus.Off);
            }
        };
        this.setGameMode = (mode) => {
            this.gameMode = mode;
        };
        this.setGridElement = (row, column, tileStatus) => {
            this.grid[row][column] = tileStatus;
        };
        this.getGridElement = (row, column) => {
            return this.grid[row][column];
        };
        this.gameMode = GameMode.Readonly;
        this.nbLine = settingsModel.gridSize.nbLine;
        this.nbColumn = settingsModel.gridSize.nbColumn;
        this.initGrid(this.nbLine, this.nbColumn);
    }
}
//# sourceMappingURL=gameModel.js.map