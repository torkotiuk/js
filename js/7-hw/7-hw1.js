// part 1 ---
const categoriesRef = document.querySelector('#categories');
console.log(`This list has ${categoriesRef.children.length} categories`);
// or
const itemsRef = categoriesRef.querySelectorAll('#categories .item');
// console.log(itemsRef.length);
// ---

// part 2 ---
console.log('---------------------------');
console.log(
  itemsRef.forEach(el => {
    // console.log(el.children[0].textContent);
    // console.log(el.children[1].children.length);

    console.log(`Category "${el.children[0].textContent}"`);
    console.log(`Number of elements: ${el.children[1].children.length}`);
    console.log('---');
  }),
);
// ---
