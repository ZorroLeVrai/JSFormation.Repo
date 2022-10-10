const formElement = document.getElementById("formulaire");
const prenomElement = document.getElementById("fname");
const nomElement = document.getElementById("lname");
const phoneElement = document.getElementById("phone");
const emailElement = document.getElementById("email");
const outputElement = document.getElementById("output");

formElement.onsubmit = (event) => submitForm(event);

function submitForm(event) {
  event.preventDefault();
  effacerContenu();
  afficherContenu();
}

function effacerContenu() {
  outputElement.innerHTML = "";
}

function afficherContenu() {
  afficherLigne(`Prénom: ${prenomElement.value}`);
  afficherLigne(`Nom: ${nomElement.value}`);
  afficherLigne(`Téléphone: ${phoneElement.value}`);
  afficherLigne(`email: ${emailElement.value}`);
}

function afficherLigne(text) {
  const paraElement = document.createElement("p");
  const textNodeElement = document.createTextNode(text);
  paraElement.appendChild(textNodeElement);
  outputElement.appendChild(paraElement);
}