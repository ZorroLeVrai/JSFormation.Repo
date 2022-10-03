function fibo3(n) {
  if (n === 0)
    return 0;
  if (n === 1)
    return 1;

  return fiboLocal(0,1,n-1);

  function fiboLocal(nm2, nm1, n) {
    if (n === 0)
      return nm1;
    return fiboLocal(nm1, nm1+nm2, n-1);
  }
}

function fibo2(n) {
  if (n === 0)
    return 0;
  if (n === 1)
    return 1;

  return fibo2(n-1) + fibo2(n-2);
}

function fibo1(n) {
  if (n === 0)
    return 0;
  if (n === 1)
    return 1;

  let nm2 = 0;
  let nm1 = 1;

  for (i = 2; i <= n; ++i)
  {
    const tmp = nm1 + nm2;
    nm2 = nm1;
    nm1 = tmp;
  }

  return nm1;
}

console.log(fibo1(6));
console.log(fibo2(5));
console.log(fibo3(20));