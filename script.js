'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
const openingHours = {
  [weekdays[3]]: {
    open: '12:00pm',
    close: '22:00pm',
  },
  [weekdays[4]]: {
    open: '11:00am',
    close: '23:00pm',
  },
  [`Day- ${2 + 4}`]: {
    open: '00:00am', // Open 24 hours
    close: '24:00pm',
  },
};

const restaurant = {
  name: 'Classico Italiano',
  openingHours,
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
// console.log(menu);
for (const [i, element] of menu.entries()) {
  // console.log(item);
  console.log(`${i + 1}: ${element}`);
}
console.log([...menu.entries()]);
//  For advanced object literal we for assignment of functions we ignore the fuction keyword and the colon(:)function declaration and objects and methods assignment we can ignore and it will work perfectly.

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
  console.log(restaurant.openingHours.mon?.open);
  console.log(restaurant.openingHours?.mon?.open); //Only if the monday (mon) property exist the the line would be executed
  const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  for (const days of days) {
    const open = restaurant.openingHours[days]?.open ?? 'closed';
    console.log(`on ${days} we open at ${open}`);
    // console.log(days);
  }
}

const user = [{ name: 'Pius', email: 'piusisonline@gmail.com' }];
console.log(user[0]?.name ?? 'User array is empty');

if (user.length > 0) {
  console.log(user[0].name);
} else {
  console.log('User array is empty');
}

for (const day of Object.keys(openingHours)) {
  console.log(day);
}
const property = Object.keys(openingHours);
console.log(property);

let openStr = `We are open ${property.length} days a week: `;
for (const day of property) {
  openStr += `${day}, `;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
// console.log(entries);
for (const x of entries) {
  console.log(x);
}

for (const [keys, { open, close }] of entries) {
  console.log(`On ${keys} we open at ${open} and close at ${close}`);
}
// for (const day1 of Object.keys(property)) {
//   console.log(day1);
// }
/*
// NODE module
var http = require('http');
// makes an http request
var makeRequest = function (message) {
  var options = {
    host: 'localhost',
    port: 8080,
    path: '/',
    method: 'POST',
  };
  // make request and execute function on recieveing response
  var request = http.request(options, function (response) {
    response.on('data', function (data) {
      console.log(data);
    });
  });
  request.write(message);
  request.end();
};
module.exports = makeRequest;

*/
