const { FindItemResult, findItem } = require('./index');

test("Test recherche dans un tableau à 0 élément", () => {
  const tableau = [];
  expect(findItem(tableau, 42)).toMatchObject(new FindItemResult(false, -1));
  expect(findItem(tableau, 0)).toMatchObject(new FindItemResult(false, -1));
});

test("Test recherche dans un tableau à 1 élément", () => {
  const tableau = [8];
  expect(findItem(tableau, 42)).toMatchObject(new FindItemResult(false, -1));
  expect(findItem(tableau, 8)).toMatchObject(new FindItemResult(true, 0));
});

test("Test recherche dans un tableau à 3 éléments", () => {
  const tableau = [11, 17, 29 ];
  expect(findItem(tableau, 11)).toMatchObject(new FindItemResult(true, 0));
  expect(findItem(tableau, 17)).toMatchObject(new FindItemResult(true, 1));
  expect(findItem(tableau, 29)).toMatchObject(new FindItemResult(true, 2));
  expect(findItem(tableau, 2)).toMatchObject(new FindItemResult(false, -1));
});
