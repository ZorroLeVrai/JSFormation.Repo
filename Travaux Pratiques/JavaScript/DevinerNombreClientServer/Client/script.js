const URL_TO_REQUEST = "http://localhost:3000";
const MINUS_ACTION = "minus";
const EQUAL_ACTION = "equal";
const PLUS_ACTION = "plus";

const textElement = document.getElementById("text");
const victoryTextElement = document.getElementById("victory-text");

const minusElement = document.getElementById("minus");
const equalElement = document.getElementById("equal");
const plusElement = document.getElementById("plus");
const initElement = document.getElementById("init");

minusElement.addEventListener("click", handleMinus);
equalElement.addEventListener("click", handleEqual);
plusElement.addEventListener("click", handlePlus);
initElement.addEventListener("click", handleInit);


let minRange = 0;
let maxRange = 1023;
let nbTry = 1;
let currentNumber = 0;
let uuid = "";


const nextTry = () => Math.floor((minRange + maxRange) / 2);

const updateVictoryMessage = text => victoryTextElement.textContent = text;

updateMessage();

/**
 * Fonction qui envoie une requête
 * @param {*} address 
 * @param {*} data 
 * @returns une promesse
 */
function sendData(address, data) {
  const request = JSON.stringify(data);
  const requestInfo = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: request
  };
  return fetch(URL_TO_REQUEST, requestInfo);
}

function updateMessage() {
  textElement.textContent = `Essai n°${nbTry}: Votre nombre est ${currentNumber}`;
}

function handleInit() {
  minRange = 0;
  maxRange = 1023;
  nbTry = 1;
  updateMessage();
  updateVictoryMessage("");
}

function handleMinus() {
  sendData("/deviner", {uuid, action: MINUS_ACTION })
    .then(response => handleServerResponse(response))
    .catch(err => {});
}

function handlePlus() {
  sendData("/deviner", {uuid, action: PLUS_ACTION })
    .then(response => handleServerResponse(response))
    .catch(err => {});
}

function handleEqual() {
  sendData("/deviner", {uuid, action: EQUAL_ACTION })
    .then(response => handleServerResponse(response))
    .catch(err => {});
}

function handleServerResponse(response) {
  ({ currentNumber, nbTry }) = response;
  updateMessage();
}