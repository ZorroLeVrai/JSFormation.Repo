"use strict";
// On veut maintenant pouvoir filtrer tout type de personne (`User` et `Admin`).
// Corrigez les problèmes de typage de la fonction `filterPersons` pour pouvoir filtrer toute personne
// et retournez un tableau de `User` s’il s’agit d’un utilisateur (personType=’user’) ou un tableau de `Admin` s’il s’agit d’un administrateur.
// La fonction `filterPersons` doit accepter un type partiel User ou Admin en fonction de `personType`.
// Le paramètre `criteria` doit avoir un type en fonction du paramètre `personType`.
// Le champ `type` ne doit pas être présent dans le paramètre `criteria`.
// Utilisation de la surcharge de fonction (function overload).
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminsOfAge23 = exports.usersOfAge23 = exports.filterPersons = exports.logPerson = exports.persons = void 0;
exports.persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];
function logPerson(person) {
    console.log(` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`);
}
exports.logPerson = logPerson;
function getObjectKeys(criteria) {
    return Object.keys(criteria);
}
function filterPersons(persons, personType, criteria) {
    return persons
        .filter((person) => person.type === personType)
        .filter((person) => {
        let criteriaKeys = getObjectKeys(criteria); //Object.keys(criteria) as (keyof Omit<Person, 'type'>)[];
        return criteriaKeys.every((fieldName) => {
            return person[fieldName] === criteria[fieldName];
        });
    });
}
exports.filterPersons = filterPersons;
exports.usersOfAge23 = filterPersons(exports.persons, 'user', { age: 23 });
exports.adminsOfAge23 = filterPersons(exports.persons, 'admin', { age: 23 });
console.log('Users of age 23:');
exports.usersOfAge23.forEach(logPerson);
console.log();
console.log('Admins of age 23:');
exports.adminsOfAge23.forEach(logPerson);
//# sourceMappingURL=index.js.map