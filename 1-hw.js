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

const someCountry = prompt('Enter your country.');
if (someCountry === null) {
  console.log('Cancelled by the user');
} else if (someCountry[0] === undefined) {
  console.log('--- empty enter ---');
  console.log('We do not delivery to your country.');
} else {
  const firstLetter = someCountry[0].toUpperCase();
  const fromSecondLetter = someCountry
    .slice(1, someCountry.length)
    .toLowerCase();
  const country = firstLetter + fromSecondLetter;
  let price = 0;
  switch (country) {
    case 'China':
      price = 100;
      console.log(`Delivery to ${country} will be cost ${price} credits`);
      break;
    case 'Chile':
      price = 250;
      console.log(`Delivery to ${country} will be cost ${price} credits`);
      break;
    case 'Australia':
      price = 170;
      console.log(`Delivery to ${country} will be cost ${price} credits`);
      break;
    case 'India':
      price = 80;
      console.log(`Delivery to ${country} will be cost ${price} credits`);
      break;
    case 'Jamaica':
      price = 120;
      console.log(`Delivery to ${country} will be cost ${price} credits`);
      break;
    default:
      console.log('We do not delivery to your country.');
  }
}
