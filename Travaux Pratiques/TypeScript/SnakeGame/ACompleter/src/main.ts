let lastRenderTime = 0;
let gameOver = false;
const gameBoardElement = document.getElementById("game-board") as HTMLDivElement;

const SNAKE_SPEED = 4;

/** 
 * Fonction principale du programme
 * @param currentTime: temps courant lors du raffraichissement de la page web */
function main(currentTime: number)
{
  //mise en place de la game loop - appelle la fonction 'main' à chaque raffraichissement
  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED)
    return;

  update();
  render();
    
  lastRenderTime = currentTime;
}

/**
 * Gestion de la logique du jeu
 */
function update()
{

}

/**
 * Gestion de l'affichage du jeu
 */
function render()
{

}

//init the game loop
window.requestAnimationFrame(main);