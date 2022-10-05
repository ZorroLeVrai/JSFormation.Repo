const formElement = document.getElementById("formulaire");
const prenomElement = document.getElementById("fname");
const nomElement = document.getElementById("lname");
const phoneElement = document.getElementById("phone");
const emailElement = document.getElementById("email");
const outputElement = document.getElementById("output");

formElement.onsubmit = (event) => submitForm(event);

function submitForm(event) {
  event.preventDefault();
  afficherContenu();
}

function afficherContenu() {
  
}

function afficherLigne(text) {
  
}