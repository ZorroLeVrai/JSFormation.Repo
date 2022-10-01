import { SNAKE_SPEED, initSnakeBody, isSnakeOutsideGrid, isSnakeSelfIntersected, update as updateSnake, render as renderSnake } from './snake.js';
import { initFoodPosition, update as updateFood, render as renderFood } from './food.js';
import { getCenterGridPosition } from './grid.js';
let lastRenderTime = 0;
let gameOver = false;
const gameBoardElement = document.getElementById("game-board");
/**
 * Fonction principale du programme
 * @param currentTime: temps courant lors du raffraichissement de la page web */
function main(currentTime) {
    if (gameOver) {
        handleGameOver();
        return;
    }
    //mise en place de la game loop - appelle la fonction 'main' à chaque raffraichissement
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    //teste s'il faut mettre à jour le jeu
    if (secondsSinceLastRender < 1 / SNAKE_SPEED)
        return;
    update();
    if (!checkForFailure())
        render();
    lastRenderTime = currentTime;
}
/**
 * Gestion du message en cas d'échec
 * @returns true pour redémarrer la partie. Sinon renvoie false
 */
function handleGameOver() {
    //si game over, redémarre le jeu
    if (confirm("Vous avez perdu :-( Cliquez sur OK pour redémarrer"))
        window.location.reload();
}
/**
 * Gestion de la logique du jeu
 */
function update() {
    updateSnake();
    updateFood();
}
/**
 * Gestion de l'affichage du jeu
 */
function render() {
    //re-initilisation du DOM
    gameBoardElement.innerHTML = "";
    renderSnake(gameBoardElement);
    renderFood(gameBoardElement);
}
/**
 * Teste si le joueur a perdu
 * @returns true si game over. Sinon retourne false
 */
function checkForFailure() {
    gameOver = isSnakeOutsideGrid() || isSnakeSelfIntersected();
    return gameOver;
}
initSnakeBody(getCenterGridPosition());
initFoodPosition();
//init the game loop
window.requestAnimationFrame(main);
//# sourceMappingURL=main.js.map