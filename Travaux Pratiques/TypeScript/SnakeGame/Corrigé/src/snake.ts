import { GridPosition } from "./gridPosition.js";
import { getInputDirection } from "./input.js";
import { isInsideGrid } from './grid.js';

//sets how many time the snake moves by seconds
export const SNAKE_SPEED = 4;

//the snake head is at snakeBody[0]
let snakeBody: Array<GridPosition> = [];
let newSegments = 0;

export function initSnakeBody(snakeHead: GridPosition)
{
  snakeBody = [ snakeHead ];
}

/**
 * Mise à jour du serpent
 */
export function update()
{
  addSegments();
  const inputDirection = getInputDirection();

  for (let i = snakeBody.length - 2; i>= 0; --i)
  {
    snakeBody[i+1] = snakeBody[i].copy();
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

/**
 * Mise à jour du DOM
 * @param gameBoardElement le container DIV du jeu
 */
export function render(gameBoardElement: HTMLDivElement)
{
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridColumnStart = segment.x.toString();
    snakeElement.style.gridRowStart = segment.y.toString();
    snakeElement.classList.add("snake");

    gameBoardElement.appendChild(snakeElement);
  });
}

export function expandSnake(expandRate: number)
{
  newSegments += expandRate;
}

export function onSnake(position: GridPosition, ignoreHead = false)
{
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0)
      return false;
    return segment.isEqual(position);
  });
}

export function isSnakeOutsideGrid()
{
  return !isInsideGrid(snakeBody[0]);
}

export function isSnakeSelfIntersected()
{
  return onSnake(snakeBody[0], true);
}

function addSegments()
{
  //copier le dernier élément pour chaque segment a ajouter
  for (let i=0; i < newSegments; ++i)
  {
    snakeBody.push(snakeBody[snakeBody.length - 1].copy());
  }

  newSegments = 0;
}