// task 1
// const Account = function ({ login, email } = {}) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, Email: ${this.email}`);
// };

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo();

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo();

// task 2
// class User {
//   constructor({ name, age, followers }) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }

//   getInfo() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`,
//     );
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo();

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo();

// task 3
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     const index = this.items.indexOf(item);
//     this.items.splice(index, 1);
//   }
// }

// const storage = new Storage([
//   'Nanotoids',
//   'Prolonger',
//   'Iron frogs',
//   'Antigravitator',
// ]);

// const items = storage.getItems();
// // console.table(items);

// storage.addItem('Droid');
// // console.table(storage.items);

// storage.removeItem('Prolonger');
// console.log(storage.items);

// task 4
// class StringBuilder {
//   constructor(str) {
//     this._value = str;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     return (this._value += str);
//   }

//   prepend(str) {
//     const newStr = str + this._value;

//     return (this._value = newStr);
//   }

//   pad(str) {
//     const newStr = str + this._value + str;
//     return (this._value = newStr);
//   }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// task 5
// class Car {
//   static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
//     console.log(`maxSpeed: ${maxSpeed}`);
//     console.log(`speed: ${speed}`);
//     console.log(`isOn: ${isOn}`);
//     console.log(`distance: ${distance}`);
//     console.log(`price: ${price}`);
//   }

//   constructor(car) {
//     const { maxSpeed, speed = 0, isOn = false, distance = 0, price } = car;

//     this.distance = distance;
//     this.maxSpeed = maxSpeed;
//     this.speed = speed;
//     this.isOn = isOn;
//     this._price = price;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(newPrice) {
//     return (this._price = newPrice);
//   }

//   turnOn() {
//     return (this.isOn = true);
//   }

//   turnOff() {
//     this.speed = 0;
//     return (this.isOn = false);
//   }

//   accelerate(value) {
//     const predictSpeed = this.speed + value;

//     if (predictSpeed <= this.maxSpeed) {
//       this.speed += value;
//     }
//   }

//   decelerate(value) {
//     const predictSpeed = (this.speed -= value);

//     if (predictSpeed >= 0) {
//       this.speed = predictSpeed;
//     }
//   }

//   drive(hours) {
//     if (this.speed) {
//       this.distance += hours * this.speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
// console.log('- - - ');

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
