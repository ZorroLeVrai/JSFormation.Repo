"use strict";
// Afin de mieux gérer les utilisateurs et les administrateurs, nous définissons 2 fonctions `isAdmin` et `isUser` afin de les distinguer.
// Corrigez les erreurs TypeScript de la fonction `logPerson` qui sont dûes à l’utilisation des 2 fonctions précédentes.
const persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
function isAdmin(person) {
    return person.type === 'admin';
}
function isUser(person) {
    return person.type === 'user';
}
function logPerson(person) {
    let additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
persons.filter(isUser).forEach(logPerson);
//# sourceMappingURL=index.js.map