// const Car = function (config) {
//   const { brand, model, price } = config;

//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// const car1 = new Car({
//   brand: 'Audi',
//   model: 'Q7',
//   price: 35000,
// });

// console.log('Car.prototype', Car.prototype);
// console.log('car1', car1);
// console.log('car1.__proto__', car1.__proto__);

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// car1.changePrice(48000);
// console.log('car1.price', car1.price);
// -------
// -------
// -------
// const Car = function (brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// const car1 = new Car('Audi', 'Q7', 35000);

// console.log(Car.prototype);

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// console.log(car1);

// car1.changePrice(48000);
// console.log('car1.price', car1.price);

// -------
// -------
// -------

// ========= START Prototype of function & object explanation  =============
// ----
// console.log('\x1b[32m%s\x1b[0m', ' Simplest object ');
// const objA = {
//   A: 'Jake',
//   B: 50,
// };

// console.log(objA);
// console.log('objA.__proto__', objA.__proto__);
// // ----

// const User = function ({ email, pass } = {}) {
//   this.email = email;
//   this.pass = pass;
// };

// const mango = new User({
//   email: 'mango@email.com',
//   pass: 12345678,
// });

// console.log('-----------------');
// console.log('\x1b[31m%s\x1b[0m', ' Object CREATED FROM USER  ');
// console.log('mango object', mango);
// console.log('mango.__proto__', mango.__proto__);
// console.log('-----------------');

// console.log('\x1b[33m%s\x1b[0m', 'function');
// const fn = function () {
//   console.log('body of fn');
// };

// console.log('function fn');
// console.log(fn);
// console.log(' ');
// console.log('fn.prototype');
// console.log(fn.prototype);
// ========= END Prototype of function & object explanation  =============

// ========= S T A R T Lesson 10  =============
// class Car {
//   constructor(param1, param2) {
//     this.param1111 = param1;
//     this.param2222 = param2;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// const car123 = new Car('arg1', 'arg2');
// console.log(car123);

// --- static properties ---
class Car {
  static description = 'Class Car';

  #test = 'test';

  constructor(config = {}) {
    const { brand, price } = config;
    this.brand = brand;
    this.price = price;
  }

  changePrice1(newPrice) {
    this.price = newPrice;
  }
}
console.dir(Car);

const car1 = new Car({ brand: 'Fiat', price: 10000 });
console.log(car1);
// console.log(car1.#test);

// ========= E N D     Lesson 10  =============
