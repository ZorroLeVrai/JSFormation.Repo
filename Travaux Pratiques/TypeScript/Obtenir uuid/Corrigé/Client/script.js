const URL_SERVEUR = "http://localhost:3000/uuid";

const actionElement = document.getElementById("action");
const uuidElement = document.getElementById("uuid");

actionElement.addEventListener("click", obtenirUuid);

function obtenirUuid() {
  fetch(URL_SERVEUR, { method: 'GET'})
    .then(response => response.text())
    .then(response => uuidElement.textContent = response)
    .catch(err => uuidElement.textContent = `Impossible d'obtenir un UUID: ${err.message}`);
}

async function obtenirUuidAsync() {
  try {
    const response = await fetch(URL_TO_REQUEST, { method: 'GET'});
    const uuid = await response.text();
    uuidElement.textContent = response;
  }
  catch(err){
    uuidElement.textContent = `Impossible d'obtenir un UUID: ${err.message}`;
  }
}