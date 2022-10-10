function extraLog(item, tag='') {
  if (item === Object.prototype) {
    console.log(tag, "<Object Prototype>");
    return;
  }

  console.log(tag, item);

  if (!item instanceof Object)
    return;

  extraLog(Object.getPrototypeOf(item), tag.concat(' '.repeat(2)));
}

function extraType(item) {
  if (item === null)
    return "null";

  if (item instanceof Object)
    return item.constructor.name;

  return typeof item;
}


/************* Utile uniquement pour les tests *****************/
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person = new Person("toto", 6);
