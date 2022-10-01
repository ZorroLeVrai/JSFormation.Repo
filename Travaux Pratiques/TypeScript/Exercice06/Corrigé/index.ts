// On veut maintenant pouvoir filtrer tout type de personne (`User` et `Admin`).
// Corrigez les problèmes de typage de la fonction `filterPersons` pour pouvoir filtrer toute personne
// et retournez un tableau de `User` s’il s’agit d’un utilisateur (personType=’user’) ou un tableau de `Admin` s’il s’agit d’un administrateur.
// La fonction `filterPersons` doit accepter un type partiel User ou Admin en fonction de `personType`.
// Le paramètre `criteria` doit avoir un type en fonction du paramètre `personType`.
// Le champ `type` ne doit pas être présent dans le paramètre `criteria`.
// Vous pouvez créer une fonction `getObjectKeys()` qui retourne le résultat qui convient pour n’importe paramètre afin d’éviter d’effectuer un cast.
// let criteriaKeys = Object.keys(criteria) as (keyof User)[];
// -->
// let criteriaKeys = getObjectKeys(criteria);
//
// Utilisation de la surcharge de fonction (function overload).

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
  { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
  { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

export function logPerson(person: Person) {
  console.log(
    ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
  );
}

function getObjectKeys<T extends Object>(criteria: T) {
  return Object.keys(criteria) as (keyof T)[];
}

export function filterPersons(persons: Person[], personType: 'user', criteria: Partial<Omit<User, 'type'>>): User[];
export function filterPersons(persons: Person[], personType: 'admin', criteria: Partial<Omit<Admin, 'type'>>): Admin[];
export function filterPersons(persons: Person[], personType: string, criteria: Partial<Omit<Person, 'type'>>): Person[] {
  return persons
    .filter((person) => person.type === personType)
    .filter((person) => {
        let criteriaKeys = getObjectKeys(criteria);//Object.keys(criteria) as (keyof Omit<Person, 'type'>)[];
        return criteriaKeys.every((fieldName) => {
            return person[fieldName] === criteria[fieldName];
        });
    });
}

export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);

console.log();

console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);

