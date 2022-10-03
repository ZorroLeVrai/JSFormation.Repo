const temperature = 25;
const text = (temperature > 30) ?
  "Chaud"
  : (temperature >= 20) ?
    "Tiède"
    : "Froid";
console.log(text);
