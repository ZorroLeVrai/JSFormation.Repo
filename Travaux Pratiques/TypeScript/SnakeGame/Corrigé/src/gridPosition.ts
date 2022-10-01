export class GridPosition {
  constructor(public x: number, public y: number)
  {}

  isEqual(otherPosition: GridPosition) {
    return otherPosition.x === this.x && otherPosition.y === this.y;
  }

  copy() {
    return new GridPosition(this.x, this.y);
  }
}