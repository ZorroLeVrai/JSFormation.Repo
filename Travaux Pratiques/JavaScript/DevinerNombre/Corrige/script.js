let minRange = 0;
let maxRange = 1023;
let nbTry = 1;

const textElement = document.getElementById("text");
const victoryTextElement = document.getElementById("victory-text");

const nextTry = () => Math.floor((minRange + maxRange) / 2);

const updateVictoryMessage = text => victoryTextElement.textContent = text;

updateMessage();

function updateMessage() {
  textElement.textContent = `Essai n°${nbTry}: Votre nombre est ${nextTry()}`;
}

function handleInit() {
  minRange = 0;
  maxRange = 1023;
  nbTry = 1;
  updateMessage();
  updateVictoryMessage("");
}

function handleMinus() {
  maxRange = nextTry() - 1;
  ++nbTry;
  updateMessage();
}

function handlePlus() {
  minRange = nextTry() + 1;
  ++nbTry;
  updateMessage();
}

function handleEqual() {
  updateVictoryMessage(`J'ai gagné au bout de ${nbTry} essais`);
}
