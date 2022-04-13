//Objects
// Key-value pairs

let myObj = {
  key1: 1,
  key2: true,
  key3: 'String',
  keyCamelCase: [],
  'key with spaces': {},
};

//const myObj2 = new Object()

const myStore = {
  keyboard: 30.99,
  mouse: 15,
  screen: 'Not available',
};

let productToSearch = 'mouse';
/* 
console.log(myStore.screen);
console.log(myStore['mouse']);
console.log(myStore[productToSearch]); */

myStore.laptop = 1000;

/* console.log(myStore); */

/* console.log('keyboard' in myStore);
console.log('car' in myStore); */

myStore.keyboard = 10.99;

/* console.log(myStore);

console.log(Object.keys(myStore));
console.log(Object.values(myStore)); */

//for in loop

for (let product in myStore) {
  if (myStore[product] === 'Not available') {
    console.log(product);
  }
}

//Create a user object with name and city
// Create 3 different song objects that have title, artist and genre
// add the 3 songs as an array to the user object (user.library)

let user = {
  name: 'André',
  city: 'Lisbon',
};

let song1 = { title: 'Ride on Time', artist: 'Tatsuro Yamashita', genre: 'City Pop' };
let song2 = { title: 'Song 2', artist: 'Blur', genre: 'Rock' };
let song3 = { title: 'Pokerface', artist: 'Lady Gaga', genre: 'Pop' };

user.library = [song1, song2, song3];

console.log(user.library);

user.library.forEach(function (element) {
  console.log(Object.values(element));
});

const dex = [
  { name: 'Bulbasaur', type: 'Grass', generation: 1 },
  { name: 'Charmander', type: 'Fire', generation: 1 },
  { name: 'Pikachu', type: 'Electric', generation: 1 },
];

console.log(dex[1].type);

let newPokemon = { name: 'Abra', type: 'Psychic', generation: 1 };

dex.push(newPokemon);

console.log(dex);

const matrix = [
  ['Bulbasaur', 'Charmander'],
  ['Squirtle', 'Pikachu'],
];

console.log(matrix[1][1]);

const company = [
  [
    { name: 'Ada McKenzie', email: 'zafev@hotmib.cc' },
    { name: 'Emily Fox', email: 'pojepit@pe.tt' },
    { name: 'Francisco Wells', email: 'co@pejpu.cc' },
  ],
  [
    { name: 'Francis Santos', email: 'akpaere@fa.pt' },
    { name: 'William Casey', email: 'tefi@pu.mv' },
    { name: 'Jennie Bridges', email: 'pipahu@zanab.sd' },
  ],
  [
    { name: 'Samuel Hogan', email: 'tainooda@vam.in' },
    { name: 'Randall Christensen', email: 'selzifro@jaom.pt' },
    { name: 'Dean Hughes', email: 'ula@hisoc.ir' },
  ],
];

console.log(company[1][1].email);

let classRoom = {
  staff: {
    teacher: 'André',
    tas: ['Xico', 'Karina'],
  },
  students: [
    { name: 'Ana', grade: 2 },
    { name: 'João', grade: 2 },
  ],
};

console.log(classRoom.staff.tas[1]);
