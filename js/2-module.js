// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1][2]);

// const word = 'Hello';
// const letters = word.split('');
// console.log(letters);

// Words to slug -> words-to-slug
// V-1
// const title = 'Words to slug';
// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// const sluggedString = words.join('-');
// console.log(sluggedString);
// v-2 with chaining
// const title1 = 'Words to slug';
// const slug = title1.toLowerCase().split(' ').join('-');
// console.log(slug);

// indexOf
// const index = ['card-1', 'card-2', 'card-3', 'card-4'].indexOf('card-3');
// console.log(index);

// const string = 'javascript';
// for (const character of string) {
//   console.log(character);
// }

const fn = function () {
  console.log('this array has a few methods: ', arguments);
  const args = Array.from(arguments);
  console.log('this array has all usual methods:', args);
};

const fn1 = function (...args) {};
