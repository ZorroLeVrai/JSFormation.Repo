function Person(name, age) { this.name = name; this.age = age; }
Person.prototype.display = () => console.log(`${this.name} ${this.age}`);


function FakePerson(name, age) { 
  const person = Object.create(FakePerson.prototype);
  return Object.assign(person, {name, age});
}
FakePerson.prototype.display = () => console.log(`${this.name} ${this.age}`);

const person1 = new Person("toto", 6);
const person2 = new FakePerson("toto", 6);

// function extraLog(item, tag='') {
//   if (item === Object.prototype) {
//     console.log(tag, "<Object Prototype>");
//     return;
//   }

//   console.log(tag, item);

//   if (!item instanceof Object)
//     return;

//   extraLog(Object.getPrototypeOf(item), tag.concat(' '.repeat(2)));
// }

// extraLog(new FakePerson("toto", 6));