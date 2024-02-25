// console.log('Module 3 - homework');
// Task 1
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// task 2
// const countProps = function (obj) {
//   return Object.keys(obj).length;
// };

// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// Task 3
// const findBestEmployee = function (employees) {
//   const keys = Object.keys(employees);

//   let maxTasks = 0;
//   let personFound = '';

//   for (const key of keys) {
//     const value = employees[key];

//     if (maxTasks < value) {
//       maxTasks = value;
//       personFound = key;
//     }
//   }

//   return personFound;
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// Task 4
// const countTotalSalary = function (employees) {
//   const values = Object.values(employees);
//   let total = 0;

//   for (const value of values) {
//     total += value;
//   }
//   return total;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// Task 5
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Hold', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   const result = [];

//   for (const obj of arr) {
//     const keys = Object.keys(obj);

//     for (const key of keys) {
//       if (key === prop) {
//         console.log(`"${key}" found, value is: ${obj[key]}`);
//         result.push(obj[key]);
//       }
//     }
//   }
//   return result;
// };

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []

// Task 6
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Hold', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   for (const obj of allProdcuts) {
//     const { name, price, quantity } = obj;
//     if (productName === name) {
//       return price * quantity;
//     }
//   }
// };

// console.log(calculateTotalPrice(products, 'Radar')); // 5200
// console.log(calculateTotalPrice(products, 'Droid')); // 2800

// Task 7
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,

  transactions: [
    { id: 111, amount: 100, type: 'deposit' },
    { id: 222, amount: -100, type: 'withdraw' },
  ],

  createTransaction(amount, type) {
    let id = Math.round(Math.random() * (99 - 10) + 10);

    this.transactions.push({ id, amount, type });
  },

  deposit(amount) {
    return this.createTransaction(amount, Transaction.DEPOSIT);
  },

  withdraw(amount) {
    return this.createTransaction(amount, Transaction.WITHDRAW);
  },

  getBalance() {
    let balance = 0;

    for (let item of this.transactions) {
      this.balance += item.amount;
    }

    return `Balance: ${this.balance}`;
  },

  getTransactionDetails(id) {
    for (let item of this.transactions) {
      if (item.id === id) return item;
    }
  },

  getTransactionTotal(type) {
    let amount = 0;

    for (let item of this.transactions) {
      if (item.type === type) {
        amount += item.amount;
      }
    }

    return amount;
  },
};

account.deposit(900);
account.withdraw(-300);
console.dir(account.transactions);

console.log(account.getTransactionDetails(111));
console.log(
  '\x1b[31m%s\x1b[0m',
  account.getTransactionTotal(Transaction.WITHDRAW),
);
console.log(
  '\x1b[32m%s\x1b[0m',
  account.getTransactionTotal(Transaction.DEPOSIT),
);
console.log('\x1b[33m%s\x1b[0m', account.getBalance());
