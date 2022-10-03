function creerIterateur(nb) {
  let indexSuivant = 0;
  return {
    next: () => ({ value: indexSuivant++, done: indexSuivant > nb })
  }
}
const iter = creerIterateur(5);
let {value, done} = iter.next();
while (!done){
  console.log(value);  //0 1 2 3 4
  //des parenthèses pour que JS ne considère pas l'objet à gauche de l’opérande comme un bloc
  ({value, done} = iter.next());
}
