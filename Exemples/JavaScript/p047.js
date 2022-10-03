function factoriel(n)
{
  if (n === 0)
    return 1;
  return n * factoriel(n-1);
}

console.log(factoriel(5));  //120
