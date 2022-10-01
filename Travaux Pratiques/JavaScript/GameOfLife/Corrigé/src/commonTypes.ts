export enum TileStatus
{
  Off,
  On
}

export enum GameMode
{
  Readonly,
  Editable 
}

export interface GridSize
{
  nbLine: number,
  nbColumn: number
}

export interface CanvasSize
{
  xSize: number;
  ySize: number;
}

export class GridPosition 
{
  row: number;
  column: number;

  constructor(x: number, y: number)
  {
    this.row = x;
    this.column = y;
  }

  isOnPosition = (position: GridPosition) =>
    this.row === position.row && this.column === position.column;

  toNumber = () => 1000*this.column + this.row;

  getAllAdjacentPositions = () =>
  {
    return [
      new GridPosition(this.row-1, this.column-1),
      new GridPosition(this.row-1, this.column),
      new GridPosition(this.row-1, this.column+1),
      new GridPosition(this.row, this.column-1),
      new GridPosition(this.row, this.column+1),
      new GridPosition(this.row+1, this.column-1),
      new GridPosition(this.row+1, this.column),
      new GridPosition(this.row+1, this.column+1)
    ];
  }
}