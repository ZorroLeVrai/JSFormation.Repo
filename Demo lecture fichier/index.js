const fs = require("fs/promises");
const cheminDuFichier = "./text.txt";

const dataPromesse = fs.readFile(cheminDuFichier, { encoding: 'utf-8'});
dataPromesse
  .then(data => console.log(data))
  .catch(err => console.error(err));


console.log("Début d'exécution");
