const tableau = [];
for (let i=0; i<5; ++i)
  tableau.push(i);

console.log('avant', tableau);

for (let i=tableau.length-1; i>=0; --i)
  tableau[i+1] = tableau[i];

tableau[0] = 42;

console.log('après', tableau);
