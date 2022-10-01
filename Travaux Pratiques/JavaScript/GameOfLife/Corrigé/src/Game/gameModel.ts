import { TileStatus, GameMode, GridPosition } from '../commonTypes.js';
import { SettingsModel } from '../Settings/settingsModel.js';

export default class GameModel
{
  grid: Array<Array<TileStatus>>;
  nbColumn: number;
  nbLine: number;
  gameMode: GameMode;

  constructor(public settingsModel: SettingsModel)
  {
    this.gameMode = GameMode.Readonly;
    this.nbLine = settingsModel.gridSize.nbLine;
    this.nbColumn = settingsModel.gridSize.nbColumn;
    this.initGrid(this.nbLine, this.nbColumn);
  }

  public initGrid = (nbLine: number, nbColumn: number) =>
  {
    let gridResult: Array<Array<TileStatus>> = [];

    for (let i=0; i<nbLine; ++i)
    {
      gridResult.push(Array(nbColumn).fill(TileStatus.Off));
    }

    this.grid = gridResult;
  }

  //TEST ABE ?
  public clearSolution = () =>
  {
    this.setGridAction((x, y) => {
      this.grid[x][y] = TileStatus.Off;
    });
  }

  public getIntervalTime = () => (this.settingsModel.delayInMs > 0) ? this.settingsModel.delayInMs : 0;

  public resetGrid = () =>
  {
    this.setGridAction((line, column) => this.grid[line][column] = TileStatus.Off);
  }

  private setGridAction = (action: (x: number, y: number) => void) =>
  {
    for (let lineIndex=0; lineIndex<this.settingsModel.gridSize.nbLine; ++lineIndex)
    {
      for (let columnIndex=0; columnIndex<this.settingsModel.gridSize.nbColumn; ++columnIndex)
      {
        action(lineIndex,columnIndex);
      }
    }
  }

  private resetPosition = (position: GridPosition | undefined) => 
  {
    if (position !== undefined)
    {
      this.setGridElement(position.row, position.column, TileStatus.Off);
    }
  }

  setGameMode = (mode: GameMode) => 
  {
    this.gameMode = mode;
  }

  setGridElement = (row: number, column: number, tileStatus: TileStatus) => 
  {
    this.grid[row][column] = tileStatus;
  }

  getGridElement = (row: number, column: number) : TileStatus => 
  {
    return this.grid[row][column];
  }
}