import { GridPosition, TileStatus } from '../commonTypes.js';
import GameModel from './gameModel.js';

const backgroundColor = "grey";
const defaultTileColor = "white";
const tilePadding = 1;

const colorMap = new Map([
  [TileStatus.On, "white"],
  [TileStatus.Off, "black"]
]);

export default class GameView
{
  private canvasElement: HTMLCanvasElement;
  private commandDiv: HTMLDivElement;
  private nbRowsElement: HTMLInputElement;
  private nbColumnsElement: HTMLInputElement;
  private intervalElement: HTMLInputElement;
  private editableModeElement: HTMLInputElement;
  private startButton: HTMLButtonElement;
  private nextGenerationButton: HTMLButtonElement;
  private pauseButton: HTMLButtonElement;
  private initButton: HTMLButtonElement;
  private canvasContext: CanvasRenderingContext2D;

  constructor(private gameModel: GameModel)
  {
    this.canvasElement = document.getElementById("mainCanvas") as HTMLCanvasElement;
    this.commandDiv = document.getElementById("commandMenu") as HTMLDivElement;
    this.nbRowsElement = document.getElementById("nb-rows") as HTMLInputElement;
    this.nbColumnsElement = document.getElementById("nb-columns") as HTMLInputElement;
    this.intervalElement = document.getElementById("generation-interval") as HTMLInputElement;
    this.editableModeElement = document.getElementById("editable") as HTMLInputElement;
    this.startButton = document.getElementById("start-button") as HTMLButtonElement;
    this.nextGenerationButton = document.getElementById("next-generation-button") as HTMLButtonElement;
    this.pauseButton = document.getElementById("pause-button") as HTMLButtonElement;
    this.initButton = document.getElementById("init-button") as HTMLButtonElement;
    this.canvasContext = this.canvasElement.getContext("2d") as CanvasRenderingContext2D;

    this.updateDisplay();
  }

  private updateCanvasSize = () =>
  {
    this.canvasElement.width = window.innerWidth;
    this.canvasElement.height = window.innerHeight - this.commandDiv.offsetHeight - 4;
  }

  private setBackGroundColor = () =>
  {
    this.canvasContext.fillStyle = backgroundColor;
    this.canvasContext.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }

  private displayGrid = () => 
  {
    const nbLine = this.gameModel.settingsModel.gridSize.nbLine;
    const nbColumn = this.gameModel.settingsModel.gridSize.nbColumn;

    for (let lineIndex=0; lineIndex < nbLine; ++lineIndex)
    {
      for (let columnIndex=0; columnIndex < nbColumn; ++columnIndex)
      {
        const minX = Math.round(columnIndex * this.canvasElement.width / nbColumn) + tilePadding;
        const maxX = Math.round((columnIndex+1) * this.canvasElement.width / nbColumn) - tilePadding;
        const minY = Math.round(lineIndex * this.canvasElement.height / nbLine) + tilePadding;
        const maxY = Math.round((lineIndex+1) * this.canvasElement.height / nbLine) - tilePadding;

        this.canvasContext.fillStyle = this.getTileColor(lineIndex, columnIndex);
        this.canvasContext.fillRect(minX, minY, maxX-minX, maxY-minY);
      }
    }
  }

  private getTileColor = (lineIndex: number, columnIndex: number) =>
  {
    return colorMap.get(this.gameModel.grid[lineIndex][columnIndex]) ?? defaultTileColor;
  }

  public updateDisplay = () =>
  {
    this.updateCanvasSize();
    this.setBackGroundColor();
    this.displayGrid();
  }

  public addCanvasListener = (eventName: string, listener: (evt: MouseEvent) => void) =>
  {
    this.canvasElement?.addEventListener(eventName, listener);
  }

  public addGameModeListener = (listener: (evt: Event) => void) =>
  {
    this.editableModeElement.addEventListener("change", listener);
  }

  public addStartGameListener = (listener: () => void) => 
  {
    this.startButton.addEventListener("click", listener);
  }

  public addNextGenerationListener = (listener: () => void) => 
  {
    this.nextGenerationButton.addEventListener("click", listener);
  }

  public addPauseListener = (listener: () => void) => 
  {
    this.pauseButton.addEventListener("click", listener);
  }

  public addNewGameListener = (listener: () => void) => 
  {
    this.initButton.addEventListener("click", listener);
  }

  public getPosition = (x: number, y: number) : GridPosition =>
  {
    const nbLine = this.gameModel.settingsModel.gridSize.nbLine;
    const nbColumn = this.gameModel.settingsModel.gridSize.nbColumn;
    const commandBarHeight = this.commandDiv.offsetHeight;
    const canvasWidth = this.canvasElement.width;
    const canvasHeight = this.canvasElement.height;

    const absoluteX = x;
    const absoluteY = y - commandBarHeight;
    return new GridPosition(Math.floor(nbLine*absoluteY / canvasHeight), Math.floor(nbColumn*absoluteX / canvasWidth));
  }
}