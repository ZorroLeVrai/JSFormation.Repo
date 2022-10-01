function sommeTableau(tableau) {
  let somme = 0;
  let nombre;
  while (nombre = tableau.pop()) {
    somme += nombre;
  }
  return somme;
}

const monTableau = [1,2,3,4];
console.log({monTableau});
const somme = sommeTableau(monTableau);
console.log({somme});
console.log({monTableau});