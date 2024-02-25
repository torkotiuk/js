// 1. Key
// const person = {
//   name: 'John',
//   age: 40,
//   tracks: ['track 1', 'track 2'],
//   sayName: function () {
//     console.log('May name is John');
//   },
//   changeName(newName) {
//     this.name = newName;
//   },
//   addTrack(newTrack) {
//     this.tracks.push(newTrack);
//   },
// };

// person.changeName('Mike');
// person.addTrack('new Track');
// console.log(person.tracks);

// console.log(person.name); // John
// console.log(person['name']); // John

// 2. Computed value
// const inputName = 'colour';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);

// 3. Arrays & functions are objects
// const array = [];
// array.push(1);
// console.log(array); // [ 1 ]
// array.element = '123';
// console.dir(array); // [ 1, element: '123' ]

// 4. Object iterate
// const objectForIterate = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };
// const keys = Object.keys(objectForIterate);
// console.log(keys); // ['good', 'neutral', 'bad'];

// for (const key of keys) {
//   console.log(`For "${key}" value: ${objectForIterate[key]}`);
// }

// let totalValues = 0;
// const values = Object.values(objectForIterate);
// for (const value of values) {
//   totalValues += value;
// }
// console.log(totalValues);

// 6. Spread operation and spread old method in objects
// const a = { x: 5, y: 2 };
// const b = { x: 2, z: 12 };
// const c = {};
// Object.assign(c, a, b);
// console.log(c); // {x: 2, y: 2, z: 12}
// const c = { ...a, ...b };
// console.log(c);

// 7. Destructuring
// const playlist = {
//   name: 'My list',
//   rating: 5,
//   tracks: ['track 1', 'track 2', 'track 3'],
//   trackCount: 3,
//   stats: {
//     followers: 10,
//     views: 84,
//     likes: 22,
//   },
// };

// const { tracks, rating } = playlist;
// console.log(tracks);
// console.log(rating);

// B - if there is no key/value pair in object, but we have to show smth, it means default value
// const { author = 'John Week' } = playlist;
// console.log(author);

// C - if we have pair key/value author: 'Mice' in object, name "John Week" will not be shown.
// const { name = 'My super list' } = playlist;
// console.log(name);

// D - Rename object key to necessary
// const { trackCount: numberOfTracks } = playlist;
// console.log(numberOfTracks);

// E - Deep destructuring
// const { stats } = playlist;
// const { followers, views, likes } = stats;
// or
// const {
//   stats: { followers, views, likes },
// } = playlist;
// console.log(followers);

// F - ...restProps
// const { name, rating, ...rest } = playlist;
// console.log(name);
// console.log(rating);
// console.log(rest);

// 8. Arrays destructuring
// A
// const rgb = [125, 200, 250];
// const [red, green, blue] = rgb;
// console.log(green);
// B
// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };
// const entries = Object.entries(authors);
// console.log(entries);
//
// for (const entry of entries) {
//   const name = entry[0];
//   const rating = entry[1];
//   console.log(name, rating);
// }

// 9. Object settings pattern
// const showProfileInfo = function (userProfile) {
//   console.log(userProfile);
// };
// 9. 1.
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://i.pravatar.cc/300',
//   stats: {
//     followers: 100,
//     views: 530,
//     likes: 200,
//   },
// };
// 9. 2.
// const makeProfileMarkup = function (userProfile) {
//   const {
//     avatar,
//     name,
//     tag,
//     location,
//     stats: { followers, views, likes },
//   } = userProfile;

//   return `
//           <div>
//             <img src="${avatar}" alt="avatar-img" />
//             <p>
//               ${name}
//               <span>@${tag}</span>
//             </p>
//             <p>Location: ${location}</p>
//             <ul>
//               <li>Followers:${followers}</li>
//               <li>Views: ${views}</li>
//               <li>Likes: ${likes}</li>
//             </ul>
//           </div>
//           `;
// };
// 9. 4.
// const markup = makeProfileMarkup(profile);
// const exampleObjectSettings = document.getElementById(
//   'example-object-settings',
// );
// exampleObjectSettings.insertAdjacentHTML('beforeend', markup);

// 5. Example
// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     // v - 1
//     // this.items.push(product);

//     // v - 2
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let index = 0; index < items.length; index += 1) {
//       const element = items[index];
//       console.log(element);

//       if (productName === element.name) {
//         // console.log(`Product ${productName} has been found and has to delete`);
//         items.splice(index, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;
//     for (const item of this.items) {
//       total += item.price * item.quantity;
//     }
//     return total;
//   },
//   increaseTotalQuantity(productName) {
//     const { items } = this;
//     for (const item of items) {
//       if (productName === item.name) {
//         item.quantity += 1;
//       }
//     }
//   },
//   decreaseTotalQuantity(productName) {
//     const { items } = this;
//     for (const item of items) {
//       if (productName === item.name) {
//         item.quantity -= 1;

//         if (item.quantity === 0) {
//           console.log(`Now quantity of ${productName} = ${item.quantity}`);
//           this.remove(productName);
//         }
//       }
//     }
//   },
// };

// cart.add({ name: '🍉', price: 10 });
// cart.add({ name: '🍋', price: 7 });
// cart.add({ name: '🍌', price: 8 });
// cart.add({ name: '🍄', price: 15 });
// cart.add({ name: '🍄', price: 15 });
// cart.add({ name: '🍄', price: 15 });

// console.table(cart.getItems());
// cart.increaseTotalQuantity('🍋');
// cart.decreaseTotalQuantity('🍄');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('🍉');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());
