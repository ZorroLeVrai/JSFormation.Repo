import { SettingsModel } from './Settings/settingsModel.js';
import GameModel from './Game/gameModel.js';
import GameController from './Game/gameController.js';
let gameController;
let settingsModel = new SettingsModel({ nbLine: 100, nbColumn: 100 }, 200, false);
let gameModel = new GameModel(settingsModel);
window.onload = init;
window.addEventListener("resize", resizeWindow);
function init() {
    gameController = new GameController(gameModel);
}
function resizeWindow() {
    gameController.updateDisplay();
}
//# sourceMappingURL=script.js.map