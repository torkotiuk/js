let elementWidth = '50px';
const result = Number.parseInt(elementWidth);
// console.log(result);

let elementHeight = '50.25px';
const resultParseFloat = Number.parseFloat(elementHeight);
// console.log(resultParseFloat);

let salary = 1300.5247;
salary = salary.toFixed(2);
salary = Number(salary);
// console.log(salary);

// let base = prompt('Enter number for taking power');
// base = Number(base);
// let power = prompt('Enter power');
// power = Number(power);
// const numberForPower = base ** power;
// console.log('numberForPower:', numberForPower);

// console.log(Math.round(Math.random() * (50 - 30) + 30));

const colors = ['tomato', 'teal'];
const min = 0;
const max = colors.length - 1;
const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];
document.body.style.backgroundColor = color;

let brand = 'SaMsUng';
brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// const blackListedWord1 = 'spam';
// const blackListedWord2 = 'sale';
// const string1 =
//   'This is Prince Abdul, it is not spam, I propose you 1 million!';
// const string2 = 'The biggest SALE in this week, do not miss it!';
// const string3 = 'This is commercial company HelloEverybody!';
// console.log(string1.toLowerCase().includes(blackListedWord1));
// console.log(string1.toLowerCase().includes(blackListedWord2));
// console.log('---');
// console.log(string2.toLowerCase().includes(blackListedWord1));
// console.log(string2.toLowerCase().includes(blackListedWord2.toLowerCase()));
// console.log('---');
// console.log(string3.toLowerCase().includes(blackListedWord1));
// console.log(string3.toLowerCase().includes(blackListedWord2));

// console.log(Boolean(NaN));

const stars = 4;
let price;
// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else {
//   console.log('There are not than stars amount');
// }
// In case when we have to equal one value with many different we use "SWITCH more verbal use keys"
// in front of decision above with many if else
// switch (stars) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//     price = 30;
//     break;
//   case 3:
//     price = 50;
//     break;
//   default:
//     console.log('There are not than stars amount');
// }

switch (stars) {
  case 1:
  case 2:
    price = 30;
    break;
  case 3:
    price = 50;
    break;
  default:
    console.log('There are not than stars amount');
}

console.log(price);
