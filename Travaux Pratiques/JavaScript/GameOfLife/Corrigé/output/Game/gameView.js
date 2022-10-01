import { GridPosition, TileStatus } from '../commonTypes.js';
const backgroundColor = "grey";
const defaultTileColor = "white";
const tilePadding = 1;
const colorMap = new Map([
    [TileStatus.On, "white"],
    [TileStatus.Off, "black"]
]);
export default class GameView {
    constructor(gameModel) {
        this.gameModel = gameModel;
        this.updateCanvasSize = () => {
            this.canvasElement.width = window.innerWidth;
            this.canvasElement.height = window.innerHeight - this.commandDiv.offsetHeight - 4;
        };
        this.setBackGroundColor = () => {
            this.canvasContext.fillStyle = backgroundColor;
            this.canvasContext.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        };
        this.displayGrid = () => {
            const nbLine = this.gameModel.settingsModel.gridSize.nbLine;
            const nbColumn = this.gameModel.settingsModel.gridSize.nbColumn;
            for (let lineIndex = 0; lineIndex < nbLine; ++lineIndex) {
                for (let columnIndex = 0; columnIndex < nbColumn; ++columnIndex) {
                    const minX = Math.round(columnIndex * this.canvasElement.width / nbColumn) + tilePadding;
                    const maxX = Math.round((columnIndex + 1) * this.canvasElement.width / nbColumn) - tilePadding;
                    const minY = Math.round(lineIndex * this.canvasElement.height / nbLine) + tilePadding;
                    const maxY = Math.round((lineIndex + 1) * this.canvasElement.height / nbLine) - tilePadding;
                    this.canvasContext.fillStyle = this.getTileColor(lineIndex, columnIndex);
                    this.canvasContext.fillRect(minX, minY, maxX - minX, maxY - minY);
                }
            }
        };
        this.getTileColor = (lineIndex, columnIndex) => {
            var _a;
            return (_a = colorMap.get(this.gameModel.grid[lineIndex][columnIndex])) !== null && _a !== void 0 ? _a : defaultTileColor;
        };
        this.updateDisplay = () => {
            this.updateCanvasSize();
            this.setBackGroundColor();
            this.displayGrid();
        };
        this.addCanvasListener = (eventName, listener) => {
            var _a;
            (_a = this.canvasElement) === null || _a === void 0 ? void 0 : _a.addEventListener(eventName, listener);
        };
        this.addGameModeListener = (listener) => {
            this.editableModeElement.addEventListener("change", listener);
        };
        this.addStartGameListener = (listener) => {
            this.startButton.addEventListener("click", listener);
        };
        this.addNextGenerationListener = (listener) => {
            this.nextGenerationButton.addEventListener("click", listener);
        };
        this.addPauseListener = (listener) => {
            this.pauseButton.addEventListener("click", listener);
        };
        this.addNewGameListener = (listener) => {
            this.initButton.addEventListener("click", listener);
        };
        this.getPosition = (x, y) => {
            const nbLine = this.gameModel.settingsModel.gridSize.nbLine;
            const nbColumn = this.gameModel.settingsModel.gridSize.nbColumn;
            const commandBarHeight = this.commandDiv.offsetHeight;
            const canvasWidth = this.canvasElement.width;
            const canvasHeight = this.canvasElement.height;
            const absoluteX = x;
            const absoluteY = y - commandBarHeight;
            return new GridPosition(Math.floor(nbLine * absoluteY / canvasHeight), Math.floor(nbColumn * absoluteX / canvasWidth));
        };
        this.canvasElement = document.getElementById("mainCanvas");
        this.commandDiv = document.getElementById("commandMenu");
        this.nbRowsElement = document.getElementById("nb-rows");
        this.nbColumnsElement = document.getElementById("nb-columns");
        this.intervalElement = document.getElementById("generation-interval");
        this.editableModeElement = document.getElementById("editable");
        this.startButton = document.getElementById("start-button");
        this.nextGenerationButton = document.getElementById("next-generation-button");
        this.pauseButton = document.getElementById("pause-button");
        this.initButton = document.getElementById("init-button");
        this.canvasContext = this.canvasElement.getContext("2d");
        this.updateDisplay();
    }
}
//# sourceMappingURL=gameView.js.map