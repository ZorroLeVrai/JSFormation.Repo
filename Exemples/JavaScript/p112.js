const afficher = (...elements) => console.log(elements);
afficher(1, 2, 3);  //[1,2,3]

const [premier, ...rest] = [2,3,5,7,11];
console.log(premier);   //2
console.log(rest);      //[ 3, 5, 7, 11 ]
