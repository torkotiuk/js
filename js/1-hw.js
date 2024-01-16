// === 2024 year, Jan. ===
// task 1.
// const name = 'Генератор захисного поля';
// let price = 2000;
// console.log(
//   `Обрано «Генератор захисного поля», ціна за штуку ${price} кредитів`,
// );
// task 2.
// const total = 100;
// const ordered = 120;
// if (ordered > total) {
//   console.log('На складі недостатньо товарів!');
// } else {
//   console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
// }
// task 3.
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// const typedPassword = prompt('Enter pass');
// if (typedPassword === null) {
//   message = 'Cancelled by user!';
// } else if (typedPassword === ADMIN_PASSWORD) {
//   message = 'Welcome';
// } else {
//   message = 'Access denied. Incorrect password';
// }
// alert(message);
// task 4.

// let credits = 23580;
// const pricePerDroid = 3000;

// let totalPrice;
// let message;
// const amountDroids = Number(prompt('Ender droids amount'));

// if (isNaN(amountDroids)) {
//   message = 'You entered some string, but you should enter amount of droids';
// } else if (amountDroids === null) {
//   message = 'cancelled by user';
// } else {
//   totalPrice = amountDroids * pricePerDroid;
//   if (Number(amountDroids) === 0) {
//     message = "You haven't entered any amounts or entered 0 droids";
//   } else if (totalPrice > credits) {
//     message = 'Insufficient credit!';
//   } else {
//     credits = credits - totalPrice;
//     message = `You have been bought ${amountDroids} droids, total credits left in account: ${credits}`;
//   }
// }
// console.log(message);
// task 5.
// let credits;
// let country = prompt('Enter your country to check price of delivery');
// if (country === null) {
//   console.log('Cancelled by user');
// } else {
//   switch (country.toLowerCase()) {
//     case 'china':
//       credits = 100;
//       console.log(
//         `Delivery to ${countryNorm(country)} costs ${credits} credits`,
//       );
//       break;
//     case 'chili':
//       credits = 250;
//       console.log(
//         `Delivery to ${countryNorm(country)} costs ${credits} credits`,
//       );
//       break;
//     case 'australia':
//       credits = 170;
//       console.log(
//         `Delivery to ${countryNorm(country)} costs ${credits} credits`,
//       );
//       break;
//     case 'india':
//       credits = 80;
//       console.log(
//         `Delivery to ${countryNorm(country)} costs ${credits} credits`,
//       );
//       break;
//     case 'jamaica':
//       credits = 120;
//       console.log(
//         `Delivery to ${countryNorm(country)} costs ${credits} credits`,
//       );
//       break;
//     default:
//       console.log("Your country doesn't have delivery");
//   }
// }
// function countryNorm(country) {
//   const firstLetter = country.toLowerCase()[0].toUpperCase();
//   const fromSecondLetter = country.slice(1, country.length);
//   return firstLetter + fromSecondLetter;
// }
// task 6.
// let total = 0;
// for (var i = 1; i < Infinity; i += 1) {
//   const symbol = prompt('Enter a number');
//   if (symbol === null) {
//     break;
//   }
//   const number = Number(symbol);
//   if (!isNaN(number)) {
//     total += number;

//     console.log(`Adding number: ${number}`);
//   } else {
//     alert('This is not a number, please try again');
//   }
// }
// console.log(`Total: ${total}`);

// === 2022 year ===
// task at the end lesson 1
// let balance = 1000;
// const payment = 1235;
// 1. Firstly show:
// console.log(
//   `Common order price ${payment} credits. We are checking your balance...`,
// );
// 2. If you have enough money:
// a) balance minus price of good
// b) show the message `You have ${0} credits left in your account`
// c) "Thanks for buying."
// 3. If a sum higher than a good price:
// a) Show message: 'You have insufficient credit in your balance for making this operation.'
// if (balance >= payment) {
//   balance = balance - payment;
//   console.log('Everything is OK, we are taking money... Thanks for buying.');
//   console.log(`You have ${balance} credits left in your account`);
// } else {
//   console.log('You have insufficient credit in your balance.');
// }
// 4. Show message: 'Operation has been done.'
// console.log('Operation has been done.');
// --- --- --- --- ---
// task 1
// const name = 'Генератор защитного поля';
// const price = 2000;
// console.log(
//   `Выбран «Генератор защитного поля», цена за штуку ${price} кредитов`,
// );

// task 2
// const ordered = 130;
// const total = 100;
// if (ordered > total) {
//   console.log('На складе недостаточно твоаров!');
// } else {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// }

// task 3
// const ADMIN_PASSWORD = '123';
// let message;
// const askPassword = prompt('Enter your password to login');
// if (askPassword === ADMIN_PASSWORD) {
//   message = 'Welcome Admin!';
// } else if (askPassword === null) {
//   message = 'Cancelled by user';
// } else if (askPassword !== ADMIN_PASSWORD) {
//   message = 'incorrect password';
// }
// alert(message);

// task 4
// let credits = 10;
// const pricePerDroid = 2;
// let totalPrice = 0;
// const droidsNumber = prompt('Please enter a number of product');
// if (droidsNumber === null) {
//   console.log('Cancelled by user');
// } else {
//   totalPrice += Number(droidsNumber) * pricePerDroid;
//   if (totalPrice > credits) {
//     console.log('Insufficient credits in your account');
//   } else {
//     credits -= totalPrice;
//     console.log('totalPrice:', Number(totalPrice));
//     console.log(
//       `You have bought ${droidsNumber} droids, you have ${credits} credits left.`,
//     );
//   }
// }

// task 5
// const someCountry = prompt('Enter your country.');
// let message;
// if (someCountry === null) {
//   message = 'Cancelled by the user';
// } else if (someCountry[0] === undefined) {
//   console.log('--- empty enter ---');
//   message = 'We do not delivery to your country.';
// } else {
//   const firstLetter = someCountry[0].toUpperCase();
//   const fromSecondLetter = someCountry
//     .slice(1, someCountry.length)
//     .toLowerCase();
//   const country = firstLetter + fromSecondLetter;
//   let price = 0;
//   switch (country) {
//     case 'China':
//       price = 100;
//       message = `Delivery to ${country} will be cost ${price} credits`;
//       break;
//     case 'Chile':
//       price = 250;
//       message = `Delivery to ${country} will be cost ${price} credits`;
//       break;
//     case 'Australia':
//       price = 170;
//       message = `Delivery to ${country} will be cost ${price} credits`;
//       break;
//     case 'India':
//       price = 80;
//       message = `Delivery to ${country} will be cost ${price} credits`;
//       break;
//     case 'Jamaica':
//       price = 120;
//       message = `Delivery to ${country} will be cost ${price} credits`;
//       break;
//     default:
//       message = 'We do not delivery to your country.';
//   }
// }
// alert(message);

// task 6
//let total = 0;
//let input;
//let isEmptyString;
//
//console.log('Before cycle');
//for (let i = 1; i < Infinity; i += 1) {
//  console.log(`---- Step ${i} -----`);
//  input = prompt('Please enter the number to add or "Cancel/Escape" to sum');
//  isEmptyString = input;
//  input = Number(input);
//
//  if (input) {
//    total += input;
//    console.log('Adding: ', input);
//  } else if (isNaN(input) || isEmptyString === '') {
//    alert('You entered not a number, please enter a number.');
//  } else {
//    console.log('Break');
//    alert(`Total: ${total}`);
//    break;
//  }
//}
