const formElement = document.getElementById("formulaire");
const prenomElement = document.getElementById("fname");
const nomElement = document.getElementById("lname");
const phoneElement = document.getElementById("phone");
const emailElement = document.getElementById("email");
const outputElement = document.getElementById("output");

const schema = Joi.object({
  fname: Joi.string().min(3).max(30).required(),
  lname: Joi.string().min(3).max(30).required(),
  phone: Joi.string().regex(/^[0-9]+/).min(8).max(10).optional(),
  email: Joi.string().email({ tlds: { allow: ['com'] } }).optional()
  //email: Joi.string().email({ tlds: { allow: false } }).optional()
});

formElement.onsubmit = (event) => submitForm(event);

function submitForm(event) {
  event.preventDefault();
  effacerContenu();

  const validateResult = validateData();
  if (!validateResult.error)
  {
    afficherContenu(validateResult.value);
  }
  else
  {
    afficherErreur(validateResult.error);
  }
}

function validateData() {
  //champs requis
  const jsonData = {
    fname: prenomElement.value,
    lname: nomElement.value,
  };

  //champs optionnels
  if (phoneElement.value)
    jsonData.phone = phoneElement.value;

  if (emailElement.value)
    jsonData.email = emailElement.value;

  return schema.validate(jsonData, { abortEarly: false });
}

function effacerContenu() {
  outputElement.innerHTML = "";
}

function afficherContenu(data) {
  afficherLigne(`Prénom: ${data.fname}`);
  afficherLigne(`Nom: ${data.lname}`);
  afficherLigne(`Téléphone: ${data.phone}`);
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