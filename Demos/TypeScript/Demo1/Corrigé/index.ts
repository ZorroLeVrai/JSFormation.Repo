const tableau = [17, "88", 12, "7", 33, "03", -1];

//ordonner le tableau par nombres
function sortArray(arr: (string|number)[])
{
  arr.sort((a,b) => Number(a) - Number(b));
}

console.log('Avant', {tableau});
sortArray(tableau);
console.log('Après', {tableau});