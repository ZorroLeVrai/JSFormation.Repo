import { TileStatus, GameMode, GridPosition, GridSize } from "../commonTypes.js";
import GameModel from "./gameModel.js";
import GameView from './gameView.js';
import AnimationController from './animationController.js';

export default class GameController
{
  private readonly animationController: AnimationController;
  private readonly gameView: GameView;
  private isMouseDown = false;

  constructor(private gameModel: GameModel)
  {
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

  initGrid = (gridSize: GridSize) => 
  {
    this.gameModel.initGrid(gridSize.nbColumn, gridSize.nbLine);
    this.gameView.updateDisplay();
  }

  updateDisplay = () => 
  {
    this.gameView.updateDisplay();
  }

  getGridSize = () => this.gameModel.settingsModel.gridSize;

  isInsideGrid = (position: GridPosition) =>
    position.row >= 0
    && position.column >=0
    && position.row < this.gameModel.settingsModel.gridSize.nbLine
    && position.column < this.gameModel.settingsModel.gridSize.nbColumn;

  private gridUpdate = (row: number, column: number, gameMode: GameMode) => 
  {
    if (gameMode == GameMode.Readonly)
      return;

    this.toggleStatus(row, column);
    this.gameView.updateDisplay();
  }

  private handleNewGrid = () =>
  {
    this.gameModel.resetGrid();
    this.gameView.updateDisplay();
  }

  private handleStartGame = () => {
    this.animationController.start();
  }

  private getNbAliveGrid(){
    const result = new Array<Array<number>>();

    for (let lineIndex = 0; lineIndex < this.gameModel.nbLine; ++lineIndex)
    {
      result[lineIndex] = new Array<number>();
      for (let columnIndex = 0; columnIndex < this.gameModel.nbColumn; ++columnIndex)
      {
        result[lineIndex][columnIndex] = this.getNbBoxesAlive(lineIndex, columnIndex);
      }
    }

    return result;
  }

  private handlePauseGame = () => {
    this.animationController.stop();
  }

  handleNextGeneration = () => {
    const nbAliveGrid = this.getNbAliveGrid();

    for (let lineIndex = 0; lineIndex < this.gameModel.nbLine; ++lineIndex)
    {
      for (let columnIndex = 0; columnIndex < this.gameModel.nbColumn; ++columnIndex)
      {
        const nbAlive = nbAliveGrid[lineIndex][columnIndex];
        if (this.gameModel.getGridElement(lineIndex, columnIndex) === TileStatus.On)
        {
          if (nbAlive < 2 || nbAlive > 3)
            this.gameModel.setGridElement(lineIndex, columnIndex, TileStatus.Off);
        }
        else
        {
          if (nbAlive === 3)
            this.gameModel.setGridElement(lineIndex, columnIndex, TileStatus.On);
        }
      }
    }

    this.updateDisplay();
  }

  private isPositionOn = (position: GridPosition) => {
    return this.gameModel.getGridElement(position.row, position.column) === TileStatus.On;
  }

  getNbBoxesAlive = (row: number, column: number) => {
    const position = new GridPosition(row, column);
    let nbAlive = 0;
    for(let positionItem of position.getAllAdjacentPositions())
    {
      if (this.isInsideGrid(positionItem) && this.isPositionOn(positionItem))
        ++nbAlive;
    }

    return nbAlive;
  }

  toggleStatus = (x: number, y: number) => 
  {
    if (this.gameModel.getGridElement(x, y) === TileStatus.Off)
      this.gameModel.setGridElement(x, y, TileStatus.On);
    else
      this.gameModel.setGridElement(x, y, TileStatus.Off);
  }

  getIntervalTime = () => this.gameModel.getIntervalTime();

  private processCanvasAction = (mousePositionX: number, mousePositionY: number) =>
  {
    const currentPosition = this.gameView.getPosition(mousePositionX, mousePositionY);
    this.gridUpdate(currentPosition.row, currentPosition.column, this.gameModel.gameMode);
  }

  private handleCanvasMouseMove = (evt: MouseEvent) =>
  {
    if (!this.isMouseDown)
      return;

      this.processCanvasAction(evt.x, evt.y);
  }

  private handleCanvasClick = (evt: MouseEvent) =>
  {
    this.processCanvasAction(evt.x, evt.y);
  }

  private handleCanvasMouseUp = () =>
  {
    this.isMouseDown = false;
  }

  private handleGameModeChange = (evt: Event) =>
  {
    const evtTarget = evt.target as HTMLInputElement;

    const newGameMode = evtTarget.checked ? GameMode.Editable : GameMode.Readonly;
    this.gameModel.setGameMode(newGameMode);
  }
}