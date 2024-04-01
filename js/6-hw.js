import users from './users.js';

// task 1 - map
// const getUserNames = users => {
//   return users.map(users => users.name);
// };
// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// task 2 - filter
// const getUsersWithEyeColor = (users, color) =>
//   users.filter(user => user.eyeColor === color);
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// task 3 - filter, map
// const getUsersWithGender = (users, gender) =>
//   users.filter(user => user.gender === gender).map(user => user.name);
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// task 4 - filter
// const getInactiveUsers = users => users.filter(user => !user.isActive);
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// task 5 - find
// const getUserWithEmail = (users, email) =>
//   users.find(user => user.email === email);
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// task 6 - filter
// const getUsersWithAge = (users, min, max) =>
//   users.filter(user => (user.age > min) & (user.age < max));
// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// task 7 - map, reduce
// const calculateTotalBalance = users =>
// decision 1
// users.map(user => user.balance).reduce((acc, element) => (acc += element));
// decision 2
// _.sum(users.map(user => user.balance));
// console.log(calculateTotalBalance(users)); // 20916

// task 8
// const getUsersWithFriend = (users, friendName) => {
//   // Decision 1
//   const userWithFriend = [];
//   users.map(user => {
//     user.friends.find(friend => {
//       if (friend === friendName) {
//         userWithFriend.push(user.name);
//       }
//     });
//   });
//   return userWithFriend;
//   // Decision 2
//   return users.reduce((acc, user) => {
//     if (user.friends.find(friend => friend === friendName) === friendName) {
//       acc.push(user.name);
//     }

//     return acc;
//   }, []);
// };
// console.table(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.table(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// task 9
// const getNamesSortedByFriendsCount = users =>
//   users
//     .sort((cur, next) => cur.friends.length - next.friends.length)
//     .map(user => user.name);
// console.table(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// task 10
// const getSortedUniqueSkills = users =>
// Decision 1
// _.uniq(
//   users
//     .flatMap(user => user.skills)
//     .sort((curEl, nextEl) => {
//       const result = curEl[0] > nextEl[0];
//       if (result) {
//         return 1;
//       }
//       if (!result) {
//         return -1;
//       }
//     }),
// );
// Decision 2
// _.uniq(_.sortBy(users.flatMap(user => user.skills)));
//
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
