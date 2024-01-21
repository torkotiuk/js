// === 2024 year, Jan. === 2024 2024 2024 2024 2024 2024 2024 2024 === START ===
// task 1
// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
//
// task 2
// const calculateEngravingPrice = function (message, pricePerWord) {
//   return message.split(' ').length * pricePerWord;
// };
// console.log(calculateEngravingPrice('Hello world', 10));
//
// task 3
// const findLongestWord = function (string) {
//   const words = string.split(' ');
//   let maxLength = words[0].length;
//   let longestWord = '';
//   for (let i = 0; i < words.length; i += 1) {
//     if (maxLength < words[i].length) {
//       maxLength = words[i].length;
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// };
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
//
// task 4
// const formatString = function (string) {
//   if (string.length < 41) {
//     return string;
//   }
//   const newString = string.slice(0, 40);
//   return newString + '...';
// };
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
//
// task 5
// const checkForSpam = function (message) {
//   return (
//     message.toLowerCase().includes('spam') ||
//     message.toLowerCase().includes('sale')
//   );
// };
// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
//
// task 6
// v - 1
// const countNumbers = function () {
//   let input;
//   const numbers = [];
//   for (let i = 0; i < Infinity; i += 1) {
//     input = prompt('Enter a number');
//     //
//     if (isNaN(input)) {
//       alert('Not a number, please enter a number');
//       continue;
//     }
//     //
//     if (input === null) {
//       let total = 0;
//       for (const number of numbers) {
//         total += number;
//       }
//       console.log(numbers);
//       1;
//       return total;
//     }
//     numbers.push(Number(input));
//   }
// };
// console.log(countNumbers());
// v - 2
// const addNumbers = function () {
//   let input;
//   const numbers = [];
//   for (let i = 0; i < Infinity; i += 1) {
//     input = prompt('Enter a number');

//     //
//     if (isNaN(input)) {
//       alert('Not a number, please enter a number');
//       continue;
//     }
//     //

//     if (input === null) {
//       console.log(numbers);
//       return numbers;
//     }

//     numbers.push(Number(input));
//   }
// };

// const numbers = addNumbers();

// const countNumbers = function (numbers) {
//   let total = 0;
//   for (const number of numbers) {
//     total += number;
//   }
//   return total;
// };

// console.log(countNumbers(numbers));
//
// task 7
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//   if (login.length > 3 && login.length < 17) {
//     return true;
//   }
//   return 'Error! Login should be from 4 till 16 characters';
// };

// const isLoginUnique = function (allLogins, login) {
//   return !allLogins.includes(login);
// };

// const addLogin = function (allLogins, login) {
//   if (typeof isLoginValid(login) === 'string') {
//     return isLoginValid(login);
//   }

//   if (isLoginUnique(allLogins, login)) {
//     logins.push(login);
//     return 'Success! Login added.';
//   } else {
//     return 'Error! This login has been used already!';
//   }
// };

// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// === =============== === 2024 2024 2024 2024 2024 2024 2024 2024 === END ===
// task 0 - find max number from array
// const numbers = [1, 2, 3, 10, 12, 25, 51, 0 - 10, 125, 1021];
// let maxNumber = numbers[0];
// for (let number of numbers) {
//   if (number > maxNumber) {
//     maxNumber = number;
//   }
// }
// console.log(maxNumber);

// task 1
// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// task 2
// const calculateEngravingPrice = function (message, pricePerWord) {
//   const words = message.split(' ');
//   return words.length * pricePerWord;
// };
// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// );

// task 3
// const findLongestWord = function (string) {
//   const words = string.split(' ');
//   let wordsLength = 0;
//   let message = '';
//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > wordsLength) {
//       wordsLength = words[i].length;
//       message = words[i];
//     }
//   }
//   return message;
// };
// console.log(findLongestWord('May the force be with you')); // 'force'

// task 4
// const formatString = function (string) {
//   if (string.length > 40) {
//     return string.slice(0, 40) + '...';
//   } else {
//     return string;
//   }
// };
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

// task 5
// const checkForSpam = function (message) {
//   return (
//     message.toLowerCase().includes('spam') ||
//     message.toLowerCase().includes('sale')
//   );
// };
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// task 6
// const numbers = [];
// let total = 0;
// let message = 'Please enter a number for counting total';

// for (let i = 0; i < Infinity; i += 1) {
//   let input = Number(prompt(message));

//   if (isNaN(input)) {
//     message = 'It is NoN, please enter a number';
//   } else {
//     if (input) {
//       numbers.push(input);
//     } else {
//       for (let number of numbers) {
//         total += number;
//       }
//       break;
//     }
//   }
// }

// console.log(numbers);
// console.log(`Total: ${total}`);
