enum Level {
  Beginner,
  Intermediate,
  Expert
}

//créer une interface Eleve
type Eleve = unknown;

const eleves: Eleve[] = [
  { id: "1", name: "Arthur", note:15, level: Level.Beginner },
  { id: "2", name: "Zozo", note:12, level: Level.Intermediate },
  { id: "3", name: "Fred", note:11, level: Level.Intermediate },
  { id: "4", name: "Suzanne", note:17, level: Level.Expert },
];

function filter(eleves: Eleve[], criterium: unknown, value) {

}

console.log(filter(eleves, "level", Level.Intermediate));