const tab = [6,2,3,1,4,5];

console.log(tab.some(element => element > 5)); //true

console.log(tab.every(element => element > 5)); //false

console.log(tab.sort((a,b) => a-b)); //[ 1, 2, 3, 4, 5, 6 ]

tab.forEach(element => console.log(element)); //affiche tous les éléments du tableau