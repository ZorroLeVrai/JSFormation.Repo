"use strict";
// Pour cet exercice, nous avons défini une fonction `filterUsers` qui filtre les utilisateurs (que les utilisateurs pas les administrateurs) en fonction de critères spécifiques.
// Modifiez la définition de la fonction `filterUsers` afin de passer en paramètre uniquement les critères de sélection souhaités.
// Vous pouvez également exclure la propriété ‘type’ de la liste des critères possibles
const persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    {
        type: 'admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type: 'user',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type: 'admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    },
    {
        type: 'user',
        name: 'Wilson',
        age: 23,
        occupation: 'Ball'
    },
    {
        type: 'admin',
        name: 'Agent Smith',
        age: 23,
        role: 'Administrator'
    }
];
const isAdmin = (person) => person.type === 'admin';
const isUser = (person) => person.type === 'user';
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
function filterUsers(persons, criteria) {
    return persons.filter(isUser).filter((user) => {
        const criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every((fieldName) => {
            return user[fieldName] === criteria[fieldName];
        });
    });
}
console.log('Users of age 23:');
filterUsers(persons, {
    age: 23
}).forEach(logPerson);
//# sourceMappingURL=index.js.map