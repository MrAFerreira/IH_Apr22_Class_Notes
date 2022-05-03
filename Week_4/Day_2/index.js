//HTTP - Hyper Text Transfer Protocol

// Verbs /requests

// GET - Get information
// POST - sensitive information - Create something
// PUT - To change something that already exists
// DELETE - used to delete

// CRUD

//Status code

// 2xx - Okay
// 3xx - Redirect
// 4xx - Client error
// 5xx - Server errors

// Node
console.log('hey');

//using /require a package

const colors = require('colors/safe');
const cowsay = require('cowsay');

console.log(colors.red('Am I red?'));

console.log(colors.rainbow('WEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'));
console.log(colors.red.underline('Can you read this?'));

console.log(
  colors.rainbow(
    cowsay.say({
      text: 'I ❤️ Dom Manipulation',
      e: '🖤❤️‍🩹',
      T: 'U ',
    })
  )
);
