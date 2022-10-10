import { validateData } from './validation.js';

const formElement = document.getElementById("formulaire");
const prenomElement = document.getElementById("fname");
const nomElement = document.getElementById("lname");
const phoneElement = document.getElementById("phone");
const emailElement = document.getElementById("email");
const outputElement = document.getElementById("output");
const conditionElement = document.getElementById("condition");

formElement.onsubmit = (event) => submitForm(event);

function createJsonData() {
  //champs requis
  const jsonData = {
    fname: prenomElement.value,
    lname: nomElement.value,
    condition: conditionElement.checked
  };

  //champs optionnels
  if (phoneElement.value)
    jsonData.phone = phoneElement.value;

  if (emailElement.value)
    jsonData.email = emailElement.value;

  return jsonData;
}

function submitForm(event) {
  event.preventDefault();
  effacerContenu();

  const jsonData = createJsonData();
  const validateResult = validateData(jsonData);
  if (!validateResult.error)
  {
    afficherContenu(validateResult.value);
  }
  else
  {
    afficherErreur(validateResult.error);
  }
}

function effacerContenu() {
  outputElement.innerHTML = "";
}

function afficherContenu(data) {
  afficherLigne(`Prénom: ${data.fname}`);
  afficherLigne(`Nom: ${data.lname}`);
  if (data.phone)
    afficherLigne(`Téléphone: ${data.phone}`);

  if (data.email)
    afficherLigne(`email: ${data.email}`);
}

function afficherErreur(error) {
  error.details
    .forEach(item => afficherLigne(item.message));
}

function afficherLigne(text) {
  const paraElement = document.createElement("p");
  const textNodeElement = document.createTextNode(text);
  paraElement.appendChild(textNodeElement);
  outputElement.appendChild(paraElement);
}
