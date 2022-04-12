// Functions
// DRY - Don't Repeat Yourself
// KISS - Keep it Simple, Stupid

//Declaration
//Syntax
/* function funcName(parameters){
  // your code here
  return something;
} */

let firstName = 'Matilde';

function sayHello(name) {
  console.log(`Hello there ${name}`);
}

/* sayHello('Xico');
sayHello('Karina');
sayHello('Dino');
sayHello(firstName); */

//Parameters vs Arguments

function meetGreet(name1, name2) {
  console.log(`Hello ${name1}, meet ${name2}`);
  console.log('Ironhack');
}

//meetGreet('Anna', 'Mariana');

let functionValue = meetGreet('Francisco', 'Pedro');

//console.log(functionValue)

function sayName(name) {
  if (name.length === 0) {
    return 'Please write a name';
  }
  return `Name is ${name}`;
}

let invalid = sayName('');
let myName = sayName('André');

/* console.log(invalid);
console.log(myName); */

function getUserInfo(name, campus) {
  let newName = name + '!';

  campus += ' Ironhack';

  const userInfo = {
    name: newName,
    campus: campus,
  };

  return userInfo;
}

let student1 = getUserInfo('Alexandre ', 'Lisbon');

//console.log(student1);

function catchEm(poke1, poke2, poke3) {
  const dex = [poke1, poke2, poke3];
  return dex;
}

const kevenDex = catchEm('Pikachu', 'Psyduck', 'Weedle');

console.log(kevenDex);

/* function sum(n1, n2) {
  let result = n1 + n2;
  return result;
} */

// create a function called avg that calculates the average of an array

/* function avg(array) {
  //auxiliary variable
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
} */

/* function add5(number){
  let startingValue = 15;
  return number + startingValue
} */

function sale(price, discount) {
  let result = price * discount;
  return result;
}

sale(100, 30);
sale(345, 20);

let myAverageArray = [350, 560, 680, 10];
let array1 = [10, 56, 76, 90, 5678, 98676, 456];
let array2 = [46, 456, 67];

/* console.log(avg(myAverageArray));
console.log(avg(array1));
console.log(avg(array2)); */

// Create a function that accepts a string and tells you the amount of characters it has. It should also tell if that amount is even or odd
// Example: 'The string (string) has (amount of characters), which is an even/odd number'
//if
//length
// %

let checkString1 = 'I wonder what you will get';
let checkString2 = 'I mean, there are only two options right?';

function evenOrOdd(string) {
  if (string.length % 2 === 0) {
    return `The string ${string} has ${string.length} characters, which is an even number`;
  } else {
    return `The string ${string} has ${string.length} characters, which is an odd number`;
  }
}

/* console.log(evenOrOdd(checkString1));
console.log(evenOrOdd(checkString2)); */

// Reusable
// Abstraction
// Separation of concerns
// Single reponsibility

//Refactoring the average function
function sumArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function avg(array) {
  //auxiliary variable
  //let sum = sumArray(array);
  return sumArray(array) / array.length;
}

//console.log(avg(myAverageArray));

// Arrays

const emptyArray = [];

const namesArray = ['André', 'Karina', 'Xico'];

const mixedArray = ['Laptop', 1000, ['Diogo']];

/* console.log(namesArray[1]);
console.log(namesArray.length); */
//console.log(namesArray);

// Array methods

//push - adds to the end

namesArray.push('Marina');
//console.log(namesArray);

//unshift

namesArray.unshift('João');

//console.log(namesArray);

// pop

//namesArray.pop();

//console.log(namesArray);

//shift

//namesArray.shift();

console.log(namesArray);

//splice

let extractArray = namesArray.splice(1, 2);

console.log(namesArray);

console.log(extractArray);

/* for (let i = 0; i < namesArray.length; i++) {
  console.log(namesArray[i]);
}
 */
// Create anb array with 100 elements (from 1 to 100)
// Without using .push()
let myArray = [];

for (let i = 100; i >= myArray.length; i--) {
  myArray.unshift(i);
}

//console.log(myArray);

//forEach
//const namesArray = ['André', 'Karina', 'Xico'];

namesArray.forEach(function (name) {
  console.log(name);
});

namesArray.forEach(function (element, index) {
  console.log(`${element} has index ${index}`);
});

//namesArray.forEach((name) => console.log(name));

let longString = 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?';

let words = longString.split(' ');

console.log(words);
console.log(words.length);
console.log(longString.length);
