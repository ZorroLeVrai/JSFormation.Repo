import { SettingsModel } from './Settings/settingsModel.js';
import GameModel from './Game/gameModel.js';
import GameController from './Game/gameController.js';

let gameController: GameController;

let settingsModel = new SettingsModel({ nbLine: 100, nbColumn: 100}, 200, false);
let gameModel = new GameModel(settingsModel);

window.onload = init;
window.addEventListener("resize", resizeWindow);

function init() : any
{
  gameController = new GameController(gameModel);
}

function resizeWindow()
{
  gameController.updateDisplay();
}
