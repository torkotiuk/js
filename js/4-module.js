// === callback === === === === === ==== === =
// function handleClick() {
//   console.log(`${new Date().toLocaleTimeString()}`);
// }
// const consoleTimeBtn = document.querySelector('.console-time-btn');
// consoleTimeBtn.addEventListener('click', handleClick);

// https://pokeapi.co/api/v2/pokemon
// const onRequestSuccess = function (response) {
//   console.log(`Call "onRequestSuccess" after success response`);
//   console.log(response); // object
// };

// fetch('https://pokeapi.co/api/v2/pokemon')
//   .then(res => res.json())
//   .then(onRequestSuccess);
// === === === === ===  === === === === === ===

// === closures example === === === === === ===
// const makeSheff = function (sheffName) {
//   const makeDish = function (dish) {
//     console.log(`${sheffName} prepare ${dish}`);
//   };
//   return makeDish;
// };
// const mango = makeSheff('Mango');
// mango('Pancakes');
// mango('Pizza');

// console.dir(mango);
// === === === === ===  === === === === === ===
// THIS in functions
// 1.
// const sayName = function () {
//   console.log(this.name123);
// };
// sayName();
//
// 2.
// const sayName = function () {
//   console.log(this.name);
// };

// const food = {
//   name: 'Pancakes',
//   sayName,
// };

// food.sayName();
//
// 3.
// const sayName = function () {
//   console.log(this.name1);
// };

// const food = {
//   name: 'Pancakes',
//   sayName,
// };

// const externalLinkSayName = food.sayName;
// externalLinkSayName(); // undefined
//
// 4. object method (function) separately called as a callback doesn't know anything about object
// 4. 1.
// const sayName = function () {
//   console.log(this.name123);
// };

// const food = {
//   name123: 'Pancakes',
//   sayName,
// };

// setInterval(food.sayName, 1000); // undefined every second
//
// 4. 2.
// const user = {
//   name123: 'John',
//   showName() {
//     console.log(`${this.name123}`);
//   },
// };

// const externalLinkShowName = user.showName;
//
// 4. 3.

// externalLinkShowName(); // undefined
//
//
// 5. "bind" method
// 5. 1.
// const sayName = function () {
//   console.log(this.name123);
// };

// const food = {
//   name123: 'Pancakes',
//   sayName,
// };

// setInterval(food.sayName.bind(food), 1000);

// 5. 2.
// const sayName = function () {
//   console.log(this.name);
// };
// const food = {
//   name: 'Pancakes',
//   sayName,
// };

// food.sayName(); // Pancakes

// const food2 = {
//   name: 'Pizza',
//   sayName,
// };

// setInterval(food2.sayName.bind(food), 1000); // Pancakes
