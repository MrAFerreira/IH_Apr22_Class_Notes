// ECMAScript Es5 /es6
/* This is a 
multiline comment */

// Variables

// Declaration

let welcome;
let a, b, c;

// var welcomeIronhacker;

//Assignment
welcome = 'Hello Ironhacker';

// Declaration and Initialization

let firstName = 'André';

console.log(firstName, typeof firstName);

firstName = 22;

console.log(firstName, typeof firstName);

//const

const lastName = 'Ferreira';

console.log(lastName);

//lastName = 'Freitas';

//const campus;

// Primitive Data types

//String
//Numbers
//Booleans
//Null
//Undefined
//Symbol

//Numbers

let age = 28;
let price = 10.99;
let myName = 'André';

let division = myName / age;

console.log(division, typeof division);

//  Operators

/* console.log(2 + 2);
console.log(4 - 2);
console.log(4 * 2);
console.log(4 / 2);

console.log(4 ** 3);
console.log(4 % 3);
console.log(1237612367812873 % 2); */

// Strings

let taFirstName = 'Xico';
let taLastName = 'Duarte';

//Old way:

let oldMessage = 'Hello ' + taFirstName + ' ' + taLastName + ' , welcome to Ironhack!';

//console.log(oldMessage);

// New way - String Interpolation

let newMessage = `Hello ${taFirstName} ${taLastName}, welcome to Ironhack!`;

//console.log(newMessage);

//Type coercion
//console.log('Dino' + 2 + 2);

let favouriteBook = 'My favourite book is "Moby Dick"';

let escaped = 'This is " escaped "   ';

// multiline string
let multiline = '1.Frodo \n 2.Bilbo \n 3.Gandalf';

console.log(multiline);

let greeting = 'Welcome';

console.log(greeting);
greeting += ' Ironhacker';

console.log(greeting);

//String methods

let myString = 'This is a long message';

/* console.log(myString.charAt(2));
console.log(myString[2]); */

/* console.log(myString.indexOf('is', 3));

console.log(myString.lastIndexOf('is'));

console.log('ha'.repeat(3));
let lyrics = 'alright ';

console.log(lyrics.repeat(7)); */

let heyMessage = 'Hey there, how are you?';

console.log(heyMessage.substring(10, 12));
console.log(heyMessage.slice(-3, -1));

//localeCompare

/* console.log('age'.localeCompare('bonus'));
console.log('age'.localeCompare('age'));
console.log('bonus'.localeCompare('age'));
console.log('Age'.localeCompare('age'));
console.log('2'.localeCompare('10')); */

// startsWith, endsWith, includes
let question = 'To be, or not to be, that is the question';

/* console.log(question.startsWith('To be'));
console.log(question.startsWith('not to be', 10)); */

/* console.log(question.endsWith('the question'));
 */

/* console.log(question.includes('Not'));
 */

// Boolean

let aBoolean = true;
let bBoolean = false;

/* console.log(aBoolean, typeof aBoolean);
 */

//Operators

// OR ||

/* console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || 10 > 1); */

// AND &&

/* console.log(true && true);
console.log(true && 10 > 1);
console.log(false && true); */

//Not
/* console.log(!true);
console.log(!false);
console.log(!(10 > 1)); */

/* console.log(10 > 1 || false && 'André'); */

// Undefined

let user;
console.log(user, typeof user);

// Null

let username = null;

/* console.log(username, typeof username); */

let empty = '';

// Thruthy and falsy values

/* console.log('André' && true);
console.log(0 && true); */

if (true && '0' && 'false' && {} && [] && 234) {
  console.log('These are truthy values');
}

if (!(false && 0 && null && undefined && NaN && '')) {
  console.log('These are all falsy');
}

let username2 = '';

//Immutability

/* let school = 'Lisbon';
console.log(school);

school = 'Madrid';
console.log(school);

school[0] = 'P';
console.log(school); */

/* let myAge = 28;
myAge += 1;
console.log(myAge + 1);
console.log(myAge);

let d = 1;

d = 2;
console.log(d);

let e = d;

console.log(e); */

// Conditionals and Loops

// If else

let myAge = 76;

if (myAge <= 18) {
  console.log("You're still a kid");
} else if (myAge > 18 && myAge < 70) {
  console.log("You're an adult");
} else {
  if (myAge > 90) {
    console.log('You get a  super senior discount');
  } else {
    console.log('You get a junior senior discount');
  }
}

//Switch

const pokemon = 'Mudkip';

let type = '';

switch (pokemon) {
  case 'Pikachu':
    type = 'Electric';
    break;
  case 'Charmander':
    type = 'Fire';
    break;
  case 'Squirtle':
  case 'Totodile':
  case 'Mudkip':
    type = 'Water';
    break;
  default:
    type = 'Other';
}

console.log(`The chosen pokémon is of type ${type}`);

//Loops

//while

let count = 0;

/* while (count <= 20) {
  console.log(count);
  count++;
} */

/* console.log('final', count); */

//do while

/* do {
  console.log(count);
  count++;
} while (count <= 20);
 */

// Print numbers from 0 to 30
// 10 = 'ten'
//20 = 'twenty'

/* while (count <= 30) {

  if (count == 10) {
    console.log('ten');
  } else if (count == 20) {
    console.log('twenty');
  } else {
    console.log(count);
  }
  
  count++;
} */

//For

/* for (initialization; condition; finalExpression) {
  codeToRun
} */

/* for (let i = 0; i <= 100; i++) {
  console.log(i);
} */

//console.log from 100 to 0

/* for (let i = 100; i >= 0; i--) {
  console.log(i);
}
 */

//for of
// iterable

let lisbonCampus = 'Heden Lisboa';
console.log('length:', lisbonCampus.length);

/* for (let i = 0; i <= lisbonCampus.length - 1; i++) {
  console.log(lisbonCampus[i]);
} */

/* for (const value of lisbonCampus) {
  console.log(value);
}
 */

//Continue & break

let count2 = 0;

while (count2 <= 5) {
  count2++;
  if (count2 === 3) {
    continue;
  }
  console.log(count2);
}

/* let shout = 'HEY THERE';

console.log(shout.toLowerCase());

let whisper = 'george michael';

console.log(whisper.toUpperCase());
 */

// iterate from 0 to 20
// number is even/odd

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`.toUpperCase());
  } else {
    console.log(`${i} is odd`);
  }
}

//DVCS VCS - Distributed Version Control System

//Git
