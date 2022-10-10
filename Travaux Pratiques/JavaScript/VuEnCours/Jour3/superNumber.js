function ameliorerNumber() {
  Number.prototype.toInverse = function() { return 1 / this }
}

// const num = 5;
// ameliorerNumber();
// console.log((7).toInverse());

function SuperNumber(num) {
  Number.call(this, num);
  //Bug a corrigé
  SuperNumber.prototype.toInverse = function() { return 1 / num }
}

SuperNumber.prototype = Object.create(Number.prototype);
SuperNumber.prototype.constructor = SuperNumber;

const supNum = new SuperNumber(9);
const supNum2 = new SuperNumber(5);
const supNum3 = new SuperNumber(20);
console.log(supNum.toInverse());