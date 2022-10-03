const iterable = {
  [Symbol.iterator]: function*() {
      for (let indexSuivant = 0; indexSuivant < 5; ++indexSuivant)
        yield indexSuivant;
    }
}
for(const element of iterable)
  console.log(element); //0 1 2 3 4
