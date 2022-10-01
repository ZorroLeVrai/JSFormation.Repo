// export type GridPosition =
// {
//   x: number;
//   y: number;
// };
export class GridPosition {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    isEqual(otherPosition) {
        return otherPosition.x === this.x && otherPosition.y === this.y;
    }
    copy() {
        return new GridPosition(this.x, this.y);
    }
}
//# sourceMappingURL=commonTypes.js.map