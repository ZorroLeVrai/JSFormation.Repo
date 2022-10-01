import {GridDirection} from './gridDirection.js';

let inputDirection: GridDirection = {x:0, y:0};

window.addEventListener("keydown", e => {
  let nextDirectionFromInput: GridDirection = { x:0, y: 0 };

  switch (e.key)
  {
    case 'ArrowUp':
      nextDirectionFromInput = { x: 0, y: -1 };
      break;
    case 'ArrowDown':
      nextDirectionFromInput = { x: 0, y: 1 };
      break;
    case 'ArrowLeft':
      nextDirectionFromInput = { x: -1, y: 0 };
      break;
    case 'ArrowRight':
      nextDirectionFromInput = { x: 1, y: 0 };
      break;
    default:
      break;
  }

  //restreint certains mouvements du serpent
  if ((nextDirectionFromInput.y !== 0 && inputDirection.y !== 0)
    || (nextDirectionFromInput.x !== 0 && inputDirection.x !== 0))
    return;

  inputDirection = nextDirectionFromInput;
});

export function getInputDirection()
{
  return inputDirection;
}