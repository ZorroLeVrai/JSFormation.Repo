type Op = '+' | '-' | '*' | '/';

const obj: Calc = {
  v1: 12,
  v2: 24,
  operation: '+'
}


//'+' '-' '*' '/'

interface Calc {
  v1: number,
  v2: number,
  operation: Op
}

function calcul(obj: Calc) {
  const { v1, v2, operation } = obj;
  switch (operation) {
    case '+':
      return v1 + v2;
    case '-':
      return v1 - v2;
    case '*':
      return v1 * v2;
    case '/':
      return v1 / v2;
    default:
      throw new Error("Operation interdite");
  }
}

console.log(calcul(obj));