/* let myArray = [1, 2, 3, 4, 5];
let myName = 'André';

//Spread operator
let myCopy = [...myArray];
let myNameCopy = [...myName];

//console.log(myNameCopy);

function sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

sum(1, 2, 3, 4, 567878, 098, 678, 23456, 3456);
 */

// OOP

const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

let dice;

/* let player1 = {
  name: 'Chloé',
  color: 'green',
  position: 0,
  cash: 1000,
  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(`Sorry ${this.name}, you lost!`);
    }
  },
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}`);
  },
};

let player2 = {
  name: 'Ana',
  color: 'red',
  position: 0,
  cash: 1000,
  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(`Sorry ${this.name}, you lost!`);
    }
  },
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}`);
  },
};

let player3 = {
  name: 'Keven',
  color: 'blue',
  position: 0,
  cash: 1000,
  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(`Sorry ${this.name}, you lost!`);
    }
  },
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}`);
  },
};
 */
// Player 1 turn

/* dice = 1 + Math.floor(6 * Math.random());

player1.position = (player1.position + dice) % squares.length;

player1.cash += squares[player1.position];

if (player1.cash <= 0) {
  console.log(`Sorry ${player1.name}, you lost!`);
}

//Player 2 turn
dice = 1 + Math.floor(6 * Math.random());

player2.position = (player2.position + dice) % squares.length;

player2.cash += squares[player2.position];

if (player2.cash <= 0) {
  console.log(`Sorry ${player2.name}, you lost!`);
}

//Player 3

dice = 1 + Math.floor(6 * Math.random());

player3.position = (player3.position + dice) % squares.length;

player3.cash += squares[player3.position];

if (player3.cash <= 0) {
  console.log(`Sorry ${player3.name}, you lost!`);
} */

/* for (let i = 0; i < 10; i++) {
  player1.move();
  player2.move();
  player3.move();
} */

/* player1.displayInfo();
player2.displayInfo();
player3.displayInfo(); */

// Create a library object
// The library should have a "shelf" attribute, which is an array
//Create a method for the library called "addBook" which receives a string has an argument and adds it to the shelf array
//Create a "printLibrary" method that prints all the books in the shelf
// Add 2 books to the library

const library = {
  shelf: [],
  addBook(book) {
    this.shelf.push(book);
  },
  printLibrary() {
    console.log(this.shelf.join(', '));
  },
};

/* library.addBook('Great Gatsby');
library.addBook('Moby Dick');

library.printLibrary(); */

//Class

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1000;
  }

  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash <= 0) {
      console.log(`Sorry ${this.name}, you lost!`);
    }
  }

  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}`);
  }
}

/* let player1 = new Player('Xico', 'red');
let player2 = new Player('Duarte', 'yellow');
let player3 = new Player('João', 'green');

player1.move();
player2.move();
player3.move();

console.log(player1);
console.log(player2);
console.log(player3); */

//Inheritance

class Animal {
  constructor(name, color, sound) {
    this.name = name;
    this.color = color;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class Cat extends Animal {
  constructor(name, color, sound, isAsleep) {
    super(name, color, sound);

    this.isAsleep = isAsleep;
  }

  changeState() {
    this.isAsleep = !this.isAsleep;
  }
}

const tom = new Cat('Tom', 'Blueish Gray', 'meow', false);

tom.makeSound();
tom.changeState();

console.log(tom);

class Penguin extends Animal {
  constructor(name, fishCaught) {
    super(name, 'black and white', 'Pardon, excuse me');
    this.fishCaught = fishCaught;
  }
}

const happy = new Penguin('Happy', 7);
happy.makeSound();
happy.color = 'yellow';
console.log(happy);

//Create a Whale class that extends Animal

//It has one more attribute: "eaten", which is an empty array

//Create a method called "eat" that accepts a string and adds it to the eaten array. It also makes the whale sound

//Create a white whale called Moby with the sound 'Yum'

//Make her eat Ahab and Pequod (separately)

class Whale extends Animal {
  constructor(name, color, sound) {
    super(name, color, sound);
    this.eaten = [];
  }

  makeSound() {
    console.log(this.sound.toUpperCase());
  }

  eat(food) {
    this.eaten.push(food);
    this.makeSound();
  }
}

const moby = new Whale('Moby', 'white', 'Yum!');
moby.eat('Ahab');
moby.eat('Pequod');

console.log(moby);

// OOP principles

//Inheritance
//Abstraction
//Polymorphism
//Encapsulation
