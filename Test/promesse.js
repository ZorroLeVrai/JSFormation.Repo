const divide = (a,b) => a / b;

function divAsync(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b !== 0)
        resolve(a/b);
      else
        reject("Le dénominateur ne être égal à 0");
    }, 2000)
  });
}

divAsync(1, 5)
  .then(result => console.log(`Résultat: ${result}`))
  .catch(error => console.log(`Erreur: ${error}`));
