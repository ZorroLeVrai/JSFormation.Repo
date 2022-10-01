enum Level {
  Beginner,
  Intermediate,
  Expert
}

interface Eleve {
  id: string,
  name: string,
  note: number,
  level: Level
}

const eleves: Eleve[] = [
  { id: "1", name: "Arthur", note:15, level: Level.Beginner },
  { id: "2", name: "Zozo", note:12, level: Level.Intermediate },
  { id: "3", name: "Fred", note:11, level: Level.Intermediate },
  { id: "4", name: "Suzanne", note:17, level: Level.Expert },
];

function filter(eleves: Eleve[], criterium: keyof Eleve, value: string | number | Level): Eleve[] {
  return eleves.filter(eleve => eleve[criterium] === value);
}

function filter2(eleves: Eleve[], criterium: "id" | "name", value: string): Eleve[];
function filter2(eleves: Eleve[], criterium: "note", value: number): Eleve[];
function filter2(eleves: Eleve[], criterium: "level", value: Level): Eleve[];
function filter2(eleves: Eleve[], criterium: keyof Eleve, value: string | number | Level): Eleve[] {
  return eleves.filter(eleve => eleve[criterium] === value);
}

//console.log(filter(eleves, "level", Level.Intermediate));
//console.log(filter(eleves, "level", "toto"));

console.log(filter2(eleves, "level", Level.Intermediate));