function index(idx) {
  return ({
    afficher: () => console.log({idx}),
    inc: () => ++idx,
    dec: () => --idx
  });
}
const p1 = index(1);
const p2 = index(2);
p1.afficher();  //{ idx: 1 }
p2.afficher();  //{ idx: 2 }
p1.dec();
p2.inc();
p1.afficher();  //{ idx: 0 }
p2.afficher();  //{ idx: 3 }

