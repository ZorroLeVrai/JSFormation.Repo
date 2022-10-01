"use strict";
// En fonction des données utilisateur définies dans la constante `users`, définissez le bon type `User`.
const users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
users.forEach(logPerson);
//# sourceMappingURL=index.js.map