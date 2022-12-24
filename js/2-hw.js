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
const numbers = [];
let total = 0;

for (let i = 0; i < Infinity; i += 1) {
  let input = Number(prompt('Please enter a number for counting total'));

  if (!isNaN(input)) {
    console.log('It is NoN, please enter a number');
  } else {
    if (input) {
      numbers.push(input);
    } else {
      for (let number of numbers) {
        total += number;
      }
      break;
    }
  }
}

console.log(numbers);
console.log(`Total: ${total}`);
