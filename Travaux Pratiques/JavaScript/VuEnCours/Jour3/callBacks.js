class Signal {
  constructor(name, timeout) {
    this.name = name;
    this.timeout = timeout;
  }
}

const tableau = [ 
  new Signal("a", 730),
  new Signal("b", 1425),
  new Signal("c", 985),
  new Signal("d", 3500),
  new Signal("e", 2400),
  new Signal("f", 812)
];

function afficher(elem) {
  console.log(`name: ${elem.name}; timeout: ${elem.timeout}`);
}

//tableau.forEach(elem => setTimeout(() => afficher(elem), elem.timeout));


setTimeout(() => console.log("1"), 2000);
setTimeout(() => console.log("2"), 2000);

console.log("Fin");