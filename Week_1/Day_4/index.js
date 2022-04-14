//Function Declaration - gets hoisted

function sum(a, b) {
  return a + b;
}

let mySum = sum;

//console.log(mySum(1, 2));

//Function expression - doesn't get hoisted

const newSum = function (a, b) {
  return a + b;
};

//console.log(newSum(2, 2));

//Hoisting

//checkFuncDeclaration();

function checkFuncDeclaration() {
  console.log('This is a function declaration');
}

/* checkFuncExpression();

const checkFuncExpression = function () {
  console.log('This is a function expression');
}; */

//Callbacks

function doFirst(callback) {
  setTimeout(function () {
    console.log('Do this first');
    callback();
  }, 1000);
}

function doAfter() {
  console.log('Do this after');
}

/* doFirst();
doAfter(); */

/* doFirst();
doAfter(); */

/* let arr = [1, 2, 3];

arr.forEach(function (element) {
  console.log(element);
}); */

/* function log2(){
  console.log('Wait for 2 seconds')
} */

/* setTimeout(function () {
  console.log('Wait 2 seconds');
}, 2000); */

// Arrow functions

/* const greeting = function (name) {
  console.log(`Hey there ${name}`)
} */

const greeting = (name) => `Hey there ${name}`;

//const sum = (a, b) => a + b;

const greeting2 = () => `Hey hey`;

console.log(greeting('Pedro'));

let arr = [1, 2, 3];

//Method - forEach which accepts a callback function
// Anonymous function
// Arrow Syntax

//arr.forEach((element, index) => console.log(element, index));

const user = {
  name: 'André',
  age: 28,
  getOlder: function () {
    setInterval(() => {
      this.age += 1;
      console.log(this.age);
    }, 1000);
  },
};

//user.getOlder();

//Array methods

//Map

/* let numCopy = [];
arr.forEach((num) => {
  numCopy.push(num * 2);
});

console.log(arr);
console.log(numCopy); */
let names = ['André', 'Karina', 'Xico'];

let numCopy = arr.map((num) => num * 2);

let improvedNames = names.map((name) => name + '!');

const silent = ['can', 'you', 'hear', 'me'];
const scream = silent.map((word) => word.toUpperCase());

//console.log(scream);

//console.log(improvedNames);

//console.log(arr);
//console.log(numCopy);

// Capitalize the first letter in each city

const cities = [
  'miami',
  'barcelona',
  'madrid',
  'amsterdam',
  'berlin',
  'sao paulo',
  'lisbon',
  'mexico city',
  'paris',
];

const capitalCities = cities.map((city) => city[0].toUpperCase() + city.slice(1));

//console.log(capitalCities);

//Reduce

let numArray = [1, 2, 3, 4, 5];

let result = numArray.reduce(function (accumulator, value) {
  return accumulator + value;
}, 0);

let arrowReduce = numArray.reduce((acc, value) => acc + value);

console.log(arrowReduce);

let twinCities = cities.reduce((acc, value) => acc + `, ${value}`);

console.log(twinCities);

//1nd
1 + 2;

//3rd

3 + 3;

//4th

6 + 4;

console.log(result);

// Create a function called calcAvg that receives an array of objects and calculates the average price of all the products

const products = [
  { name: 'Keyboard', price: 30.0, available: true },
  { name: 'Mouse', price: 64.99, available: false },
  { name: 'Controller', price: 59.8, available: true },
  { name: 'Speakers', price: 43.7, available: false },
];
const calcAvg = (array) => {
  let productTotal = array.reduce(function (acc, value) {
    return acc + value.price;
  }, 0);

  return productTotal / array.length;
};

//console.log(calcAvg(products));

//Filter

let numArray2 = [1, 2, 3, 4, 5, 6];

let evenNumbers = numArray2.filter((element) => element % 2 === 0);

let mixed = [1, true, null, {}];

let cleanArray = mixed.filter((value) => typeof value === `object`);

/* console.log(cleanArray);

console.log(evenNumbers);
console.log(numArray2); */

let availableProducts = products.filter((value) => value.available);

//console.log(availableProducts);

//Sort - mutates the array

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

//numbers.sort();

numbers.sort((a, b) => a - b).reverse();

function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  if (a === b) return 0;
}

console.log(numbers);

const words = ['Hey', 'hello', 'Ola', 'oi', 'aloha'];

words.sort(function (a, b) {
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  if (a.toLowerCase() > b.toLowerCase()) return 1;
  if (a.toLowerCase() === b.toLowerCase) return 0;
});

console.log(words);

//Reverse

words.reverse();

console.log(words);
