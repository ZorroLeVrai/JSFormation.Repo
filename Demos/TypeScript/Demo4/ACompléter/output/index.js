"use strict";
var Level;
(function (Level) {
    Level[Level["Beginner"] = 0] = "Beginner";
    Level[Level["Intermediate"] = 1] = "Intermediate";
    Level[Level["Expert"] = 2] = "Expert";
})(Level || (Level = {}));
const eleves = [
    { id: "1", name: "Arthur", note: 15, level: Level.Beginner },
    { id: "2", name: "Zozo", note: 12, level: Level.Intermediate },
    { id: "3", name: "Fred", note: 11, level: Level.Intermediate },
    { id: "4", name: "Suzanne", note: 17, level: Level.Expert },
];
function filter(eleves, criterium, value) {
}
console.log(filter(eleves, "level", Level.Intermediate));
//# sourceMappingURL=index.js.map