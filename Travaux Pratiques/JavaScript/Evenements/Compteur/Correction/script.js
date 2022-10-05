const textElement = document.getElementById("text");
const minusButtonElement = document.getElementById("minus");
const plusButtonElement = document.getElementById("plus");

minusButtonElement.addEventListener('click', decrementerCompteur);
plusButtonElement.addEventListener('click', incrementerCompteur);

let compteur = 0;
mettreAJour();

function mettreAJour() {
  textElement.textContent = `Le compteur est à ${compteur}`;
}

function changerCompteur(modifier) {
  modifier();
  mettreAJour();
}

function decrementerCompteur() {
  changerCompteur(() => --compteur);
}

function incrementerCompteur() {
  changerCompteur(() => ++compteur);
}

