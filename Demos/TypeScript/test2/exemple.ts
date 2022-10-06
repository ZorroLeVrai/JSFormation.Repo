type TabNum = Array<number|string>;

interface Person {
  nom: string,
  prenom: string,
  age?: number
}

// type Person = {
//   nom: string,
//   prenom: string,
//   age: number
// }

// class Person implements IPerson {
//   nom: string
//   prenom: string
//   constructor() {
//     this.nom = "kksq";
//     this.prenom = "dsljl";
//   }
// }

function afficher(person: Person) {
  console.log(`Nom: ${person.nom} Prenom: ${person.prenom}`);
}

afficher({nom: "toto", "prenom": "zaz" });

function sommeTableau(tab: TabNum) {//(number|string)[]) {
  return tab.reduce((acc, cur) => Number(acc) + Number(cur));
}

const result = sommeTableau([12, 13, "56"]);
console.log({result});

//num1: any
//num2: any
function add(num1: number, num2: string) {
  return num1 + num2;
}

console.log(add(2, "4"));
