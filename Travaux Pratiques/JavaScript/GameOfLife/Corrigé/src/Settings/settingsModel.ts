import { GridSize } from '../commonTypes.js';

export class SettingsModel
{
  constructor(public gridSize: GridSize, public delayInMs: number, public isReadOnly: boolean)
  {
  }
}