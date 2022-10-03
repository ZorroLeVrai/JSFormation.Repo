const tab2d = [
  [0,1,2],
  [1,2,'?'],
  [2,3,4]
];
console.log(tab2d[0]); //[ 0, 1, 2 ]
console.log(tab2d[1][2]); //?
tab2d[1][2] = 3;
console.table(tab2d); //affiche le nouveau tableau
