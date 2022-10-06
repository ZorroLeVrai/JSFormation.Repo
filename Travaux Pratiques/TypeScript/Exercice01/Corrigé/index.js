// En fonction des données utilisateur définies dans la constante `users`, définissez une interface `User` correspondante
// et corrigez le type de chaque déclaration et paramètre afin de ne plus utiliser de type ‘unknown’.
;
var users = [
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
    console.log(" - ".concat(user.name, ", ").concat(user.age));
}
users.forEach(logPerson);
