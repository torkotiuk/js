const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const listRef = document.querySelector('#ingredients');

// V - 1
// const makeOneItem = item => {
//   const itemRef = document.createElement('li');
//   itemRef.textContent = ingredients[0];
//   return itemRef;
// };
// const items = ingredients.map(makeOneItem);
// listRef.append(...items);

// V - 2
const elementsToHtml = ingredients.map(item => {
  const itemEl = document.createElement('li');
  itemEl.textContent = item;

  return itemEl;
});

listRef.append(...elementsToHtml);
