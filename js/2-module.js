// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1][2]);

// const word = 'Hello';
// const letters = word.split('');
// console.log(letters);

// const message = 'Bearer gkdjfgldjlfgkjdlgfjdlgjdlg';
// console.log(message.split(' ')); // ["Bearer", "gkdjfgldjlfgkjdlgfjdlgjdlg"]
// Sometime we have to use some element of array:
// console.log(message.split(' ')[1]); // gkdjfgldjlfgkjdlgfjdlgjdlg
// or name any element that we need to use
// const [word, token] = message.split(' ');
// const [, token123] = message.split(' ');
// console.log(token); // gkdjfgldjlfgkjdlgfjdlgjdlg
// console.log(token123); // gkdjfgldjlfgkjdlgfjdlgjdlg

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

// const fn = function () {
//   console.log('this array has a few methods: ', arguments);
//   const args = Array.from(arguments);
//   console.log('this array has all usual methods:', args);
// };

// const fn1 = function (...args) {};

// task maxNumber
// from lesson 3(01: 40: 50) - Look for max number from array = [2, 50, 23, 11, 5, 87, 3]
// v-1
// const numbers = [2, 50, 23, 11, 5, 87, 3];
// console.log(numbers);
// let maxNumber = numbers[0];
// let total = 0;
// for (const number of numbers) {
//   if (maxNumber < number) {
//     maxNumber = number;
//   }
// }
// console.log(maxNumber);
// ver-2
// console.log(Math.max(...numbers));

// concat method & spread operation ...
// const newArray = [...[3, 4, 5], 11, 15];
// console.log(newArray); // [3, 4, 5, 11, 15]
// const numbers = [...[1, 2, 3], 100, ...[4, 5, 6], 200, ...[7, 8, 9]];
// console.log(numbers);

// const array = [5, 3, 17, 1];
// console.log(Math.max(...array));

// === arrow function === === === === === ===
// const fn = function (a, b, c) {
//   console.log('Fn arguments: ', arguments);
// };
// const arrowFn = (...args) => {
//   console.log('=> args', args);
// };
// fn(1, 2, 3);
// arrowFn(5, 6, 7);
//
const add = (a, b) => {
  a: 25;
};
console.log(add()); // undefined
// === === === === ===  === === === === === ===
