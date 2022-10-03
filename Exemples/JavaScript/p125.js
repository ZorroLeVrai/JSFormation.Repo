const iterable = {
  [Symbol.iterator]: function*() {
      yield 0;
      yield 1;
      yield 2;
    }
}
for(const element of iterable)
  console.log(element); //0 1 2
