function SuperObject(item) {
  this.item = item;
}

SuperObject.prototype.extraLog = function() { extraLog(this.item); }
SuperObject.prototype.extraType = function() { return extraType(this.item); }

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

function modifyObject(item) {
  if (!item instanceof Object)
    return;

  return modifyRealObject(item);

  function modifyRealObject(obj) {
    if (Object.getPrototypeOf(obj) === Object.prototype)
    {
      Object.setPrototypeOf(obj, new SuperObject(obj));
      return;
    }

    modifyObject(Object.getPrototypeOf(obj));
  }
}


/************* Utile uniquement pour les tests *****************/
function Person(name, age) { this.name = name; this.age = age; }
const person = new Person("toto", 6);

const sp = new SuperObject(person);
sp.extraLog();

console.log(extraType(5));   //number
console.log(extraType([]));  //Array
console.log(extraType(() => {}));   //Function
console.log(null);   //null