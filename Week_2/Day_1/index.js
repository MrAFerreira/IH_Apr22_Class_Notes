//Scope

// Global

//Function

//Block {}

//console.log(message);
/* var message = 'Hello from the global scope';

function innerScope() {
  var innerMessage = 'Hey from function scope';
  console.log(message);
  return innerMessage;
}

innerScope();

var message = 'Oops';

console.log(message); */

/* for (let i = 0; i <= 30; i++) {
  console.log(i);
}

console.log(i); */

let name = 'André';

if (true) {
  let name = 'Karina';
  //console.log(name);
}

//console.log(name);

const obj = { lastName: 'Costa' };

/* obj = { name: 'Matilde' }; */

obj.name = 'Matilde';

//console.log(obj);

/* const myObj = {};

myObj = {}; */

/* let message = 'Global scope';

let a = 1;
let b = 2;

function inner() {
  a = 4;
  let b = 3;
  console.log(b);
}

inner();

console.log(a);
console.log(b); */

//Asynchronous and callbacks
console.log('First');

function someCallback() {
  console.log('Hello');
}

const timeoutId = setTimeout(someCallback, 0);

//clearTimeout(timeoutId);

console.log('second');

/* let counter = 0;

let intervalId = setInterval(() => {
  counter++;
  console.log(counter);
  if (counter == 10) {
    clearInterval(intervalId);
  }
}, 1000);
 */

//Create a function countTen that counts to ten (once per second) and then stops.

function countTen() {
  let currentTime = 1;
  let intervalId = setInterval(() => {
    if (currentTime >= 10) {
      clearInterval(intervalId);
    }
    console.log(currentTime);
    currentTime++;
  }, 1000);
}

const user = {
  name: 'Vitor',
  age: 25,
  getOlder: function () {
    setInterval(() => {
      this.age += 1;
      console.log(this.age);
    }, 1000);
  },
};

/* user.getOlder(); */
let myName = 'André';

const multiply = (a, b) => {
  myName = 'Karina';
  let result = 0;
  result = a * b;
  return result;
};

multiply(2, 3);

function add(n1) {
  return n1 + n2;
}

function make_calc(n1, n2, operation) {
  if (operation === 'add') {
    return add(n1, n2);
  }
}

function init() {
  const result = make_calc(2, 3, 'add');
  console.log(result);
}

//init();

// try / catch block

function powerOfThree(num) {
  return number ** 3;
}

try {
  powerOfThree(9);
} catch (error) {
  console.log('Incorrect input for function power of three, try again');
} finally {
  console.log('This will always run');
}

function getUsername(user) {
  if (!user.name) {
    throw new Error('Incomplete user data');
  }
  return user.name;
}

try {
  getUsername({ lastName: 'Duarte' });
} catch (error) {
  console.log(error);
}
