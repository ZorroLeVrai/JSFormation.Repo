"use strict";
// Dans cet exercice, nous définissons une nouvelle interface Admin. Nous avons ainsi une interface `User` et une interface `Admin`.
// Définissez le type `Person` qui peut être soit un utilisateur commun de type `User` soit un administrateur de type `Admin`.
// Puis utilisez ce nouveau type dans votre programme afin de corriger les erreurs de compilation.
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.persons = void 0;
exports.persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
//# sourceMappingURL=index.js.map