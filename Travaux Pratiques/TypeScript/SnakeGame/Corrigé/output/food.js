import { onSnake, expandSnake } from './snake.js';
import { getRandomGridPosition } from './grid.js';
let foodPosition;
const EXPANSION_RATE = 1;
export function initFoodPosition() {
    foodPosition = getRandomGridPosition();
}
/**
 * Mise à jour de la nourriture
 */
export function update() {
    if (onSnake(foodPosition)) {
        expandSnake(EXPANSION_RATE);
        foodPosition = getRandomFoodPosition();
    }
}
/**
 * Mise à jour du DOM
 * @param gameBoard le container DIV du jeu
 */
export function render(gameBoard) {
    const foodElement = document.createElement("div");
    foodElement.style.gridColumnStart = foodPosition.x.toString();
    foodElement.style.gridRowStart = foodPosition.y.toString();
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
}
/**
 * Génère une position au hasard dans la Grid
 * @returns une position au hasard
 */
function getRandomFoodPosition() {
    let newFoodPosition = null;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = getRandomGridPosition();
    }
    return newFoodPosition;
}
//# sourceMappingURL=food.js.map