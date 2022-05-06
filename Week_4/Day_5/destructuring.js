let person1 = {
  name: 'Xico',
  age: 19,
  favouriteMusic: 'Rap',
  address: {
    street: 'Rua Jardim Doca do Tabaco',
    number: 87,
  },
};

//Old way
/* let name = person1.name;
let age = person1.age;
let favouriteMusic = person1.favouriteMusic; */

//Destructuring

//defualt values are only used if the object doesn't have the specific key

/* const {
  name,
  age,
  favouriteMusic: genre,
  country = 'Portugal',
  address: { street, number },
} = person1; */

/* console.log(name);
console.log(age);
console.log(genre);
console.log(country);
console.log(street);
console.log(number);
 */

const pokemon = {
  name: 'Skarmory',
  types: {
    main: 'Steel',
    secondary: 'Flying',
  },
  generation: 2,
  isCatchable: true,
};

//Skarmory is of type Flying and it is from generation 2

const {
  name,
  types: { secondary },
  generation,
} = pokemon;

/* console.log(`${name} is of type ${secondary} and it is from generation ${generation}`);
 */
//Array destructuring

const campuses = ['Lisbon', 'Madrid', 'Barcelona'];

const [firstCampus, , thirdCampus, fourthCampus = 'Berlin'] = campuses;

console.log(firstCampus);
//console.log(secondCampus);
console.log(thirdCampus);
console.log(fourthCampus);

const europeanCampuses = [
  ['Lisbon', 'pt'],
  ['Barcelona', 'es'],
  ['Paris', 'fr'],
  ['Berlin', 'de'],
];

const [[campus1, country1], [campus2, country2], , [campus4, country4]] = europeanCampuses;

//console.log(country1);

let [a, b = 2, c, d = 1] = [3, 4];

/* console.log(a); // 3
console.log(b); // 4
console.log(c); // undefined
console.log(d); // 1 */

// Spread and rest operator

const reptiles = ['alligator', 'snake', 'lizzard'];
const mammals = ['cat', 'dog', 'mongoose'];

//const animals = reptiles.concat(mammals);

const animals = [...reptiles, 'cat', 1, false];
console.log(animals);

//Rest operator

function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));

function showMovie(title, year, ...actors) {
  console.log(`${title} was released in ${year} ${[...actors]}`);
  /*  actors.forEach((actor) => console.log(actor)); */
}

showMovie('Fight Club', 1999, 'Brad Pitt', 'Edward Norton', 'Helena Bohman Carter');
