const tab = [1,2,3,4,5];
//let tab2 = tab;
const tab2 = [];
for (const element of tab)
{
  tab2.push(element);
  element += 1;
}

console.log(tab2);
tab[0] = 42;
console.log(tab2);