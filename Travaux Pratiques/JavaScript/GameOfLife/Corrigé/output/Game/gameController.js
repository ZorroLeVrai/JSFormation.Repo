import { TileStatus, GameMode, GridPosition } from "../commonTypes.js";
import GameView from './gameView.js';
import AnimationController from './animationController.js';
export default class GameController {
    constructor(gameModel) {
        this.gameModel = gameModel;
        this.isMouseDown = false;
        this.initGrid = (gridSize) => {
            this.gameModel.initGrid(gridSize.nbColumn, gridSize.nbLine);
            this.gameView.updateDisplay();
        };
        this.updateDisplay = () => {
            this.gameView.updateDisplay();
        };
        this.getGridSize = () => this.gameModel.settingsModel.gridSize;
        this.isInsideGrid = (position) => position.row >= 0
            && position.column >= 0
            && position.row < this.gameModel.settingsModel.gridSize.nbLine
            && position.column < this.gameModel.settingsModel.gridSize.nbColumn;
        this.gridUpdate = (row, column, gameMode) => {
            if (gameMode == GameMode.Readonly)
                return;
            this.toggleStatus(row, column);
            this.gameView.updateDisplay();
        };
        this.handleNewGrid = () => {
            this.gameModel.resetGrid();
            this.gameView.updateDisplay();
        };
        this.handleStartGame = () => {
            this.animationController.start();
        };
        this.handlePauseGame = () => {
            this.animationController.stop();
        };
        this.handleNextGeneration = () => {
            const nbAliveGrid = this.getNbAliveGrid();
            for (let lineIndex = 0; lineIndex < this.gameModel.nbLine; ++lineIndex) {
                for (let columnIndex = 0; columnIndex < this.gameModel.nbColumn; ++columnIndex) {
                    const nbAlive = nbAliveGrid[lineIndex][columnIndex];
                    if (this.gameModel.getGridElement(lineIndex, columnIndex) === TileStatus.On) {
                        if (nbAlive < 2 || nbAlive > 3)
                            this.gameModel.setGridElement(lineIndex, columnIndex, TileStatus.Off);
                    }
                    else {
                        if (nbAlive === 3)
                            this.gameModel.setGridElement(lineIndex, columnIndex, TileStatus.On);
                    }
                }
            }
            this.updateDisplay();
        };
        this.isPositionOn = (position) => {
            return this.gameModel.getGridElement(position.row, position.column) === TileStatus.On;
        };
        this.getNbBoxesAlive = (row, column) => {
            const position = new GridPosition(row, column);
            let nbAlive = 0;
            for (let positionItem of position.getAllAdjacentPositions()) {
                if (this.isInsideGrid(positionItem) && this.isPositionOn(positionItem))
                    ++nbAlive;
            }
            return nbAlive;
        };
        this.toggleStatus = (x, y) => {
            if (this.gameModel.getGridElement(x, y) === TileStatus.Off)
                this.gameModel.setGridElement(x, y, TileStatus.On);
            else
                this.gameModel.setGridElement(x, y, TileStatus.Off);
        };
        this.getIntervalTime = () => this.gameModel.getIntervalTime();
        this.processCanvasAction = (mousePositionX, mousePositionY) => {
            const currentPosition = this.gameView.getPosition(mousePositionX, mousePositionY);
            this.gridUpdate(currentPosition.row, currentPosition.column, this.gameModel.gameMode);
        };
        this.handleCanvasMouseMove = (evt) => {
            if (!this.isMouseDown)
                return;
            this.processCanvasAction(evt.x, evt.y);
        };
        this.handleCanvasClick = (evt) => {
            this.processCanvasAction(evt.x, evt.y);
        };
        this.handleCanvasMouseUp = () => {
            this.isMouseDown = false;
        };
        this.handleGameModeChange = (evt) => {
            const evtTarget = evt.target;
            const newGameMode = evtTarget.checked ? GameMode.Editable : GameMode.Readonly;
            this.gameModel.setGameMode(newGameMode);
        };
        this.gameView = new GameView(gameModel);
        this.animationController = new AnimationController(this);
        this.gameView.addCanvasListener("mousemove", this.handleCanvasMouseMove);
        this.gameView.addCanvasListener("click", this.handleCanvasClick);
        this.gameView.addCanvasListener("mouseout", this.handleCanvasMouseUp);
        this.gameView.addGameModeListener(this.handleGameModeChange);
        this.gameView.addStartGameListener(this.handleStartGame);
        this.gameView.addNextGenerationListener(this.handleNextGeneration);
        this.gameView.addPauseListener(this.handlePauseGame);
        this.gameView.addNewGameListener(this.handleNewGrid);
    }
    getNbAliveGrid() {
        const result = new Array();
        for (let lineIndex = 0; lineIndex < this.gameModel.nbLine; ++lineIndex) {
            result[lineIndex] = new Array();
            for (let columnIndex = 0; columnIndex < this.gameModel.nbColumn; ++columnIndex) {
                result[lineIndex][columnIndex] = this.getNbBoxesAlive(lineIndex, columnIndex);
            }
        }
        return result;
    }
}
//# sourceMappingURL=gameController.js.map