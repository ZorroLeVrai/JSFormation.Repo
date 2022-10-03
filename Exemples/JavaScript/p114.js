let indexSuivant = 0;
const iter = {
  next: () => ({ value: indexSuivant++, done: indexSuivant > 5 })
};

