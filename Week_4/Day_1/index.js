// Promises

//SetTimeout (and interval also return a promise)
/* setTimeout(() => {
  console.log('Second');
}, 0);

console.log('Hello first'); */

//Syntax for a promise

/* const myPromise = new Promise((resolve, reject) => {
  if( somnething ){
    resolve(value)
  } else {
    reject()
  }
}) */

//A promise can have 3 states:

//Pending

const myPendingPromise = new Promise((resolve, reject) => {});

//console.log(myPendingPromise);

// Resolved
//Using this syntax we don't need to specify the new keyword

const myResolvedPromise = Promise.resolve(42);

//console.log(myResolvedPromise);

//Rejected
// reject always throws an error, no need to console.log

/* const myRejectedPromise = Promise.reject('We rejected it'); */

const names = ['André', 'Xico', 'Karina', 'Diogo'];

const obtainNames = (count) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log(names[count]);
      if (!names[count]) {
        reject('Name not found!');
      } else {
        resolve(names[count]);
      }
    }, 1000);
  });
};

//Then keyword
//awaits for the first promise before going to the next one (and it also returns a promise)

//Promise chain
/* obtainNames(0)
  .then(() => obtainNames(1))
  .then(() => obtainNames(2))
  .then(() => obtainNames(3))
  .then(() => obtainNames(4)); */

//the then receives the resolved value
//The catch statement receives the rejected value

/* obtainNames(4)
  .then((name) => console.log(name))
  .catch((error) => console.log(error)); */

// Throw errors

//A promise is automatically rejected if you thrown an error

/* const pr3 = new Promise((resolve, reject) => {
  throw new Error('Rejected by throwing an error');
}); */

/* pr3.then((value) => console.log('then()', value)).catch((err) => console.log('catch()', err));
 */

/* const pr4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Ironhack'), 1000);
}); */

/* pr4
  .then((value) => console.log('first', value))
  .then(() => {
    console.log('2nd then');
    throw new Error('Something went wrong');
  })
  .then(() => console.log('third'))
  .catch((err) => console.log('catch', err));
 */

//Chaining then and catch

/* const pr5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('André'), 1000);
}); */

/* pr5
  .then((name) => {
    console.log(name);
    throw new Error('First error');
  })
  .catch((err) => {
    console.log(err);
    return 'Hello from catch';
  })
  .then((value) => {
    console.log(value);
    return 'Nemo';
  })
  .then((fish) => {
    console.log(fish, 'again');
    return 'Bulbasaur';
  })
  .then((pokemon) => console.log(pokemon));
 */

//finally() happens at the end, no matter if there's an error or not

/* pr5
  .then(() => console.log('first'))
  .then(() => Promise.reject('Oops!'))
  .then(() => console.log(3))
  .catch((err) => console.log(err))
  .finally(() => console.log('Will always run no matter what')); */

/* const pr6 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('André'), 10000);
});
const pr7 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(42), 0);
});

const pr8 = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ name: 'Karina' }), 4000);
}); */

// Promise.all() will wait for all the promises to finish and then return all of the values.
//It always waits for the longest one, so that's the amount of time it's gonna take
// If there's an error in one of the promises (or if it's rejected) we will get the error back (only the first one to happen, even if there are multiple)

/* Promise.all([pr6, pr7, pr8])
  .then((values) => console.log(values))
  .catch((err) => console.log(err));
 */

//Async await

//Turning a function async wraps the return in a promise

async function myAsyncFunction() {}

const myAsyncExpression = async () => {
  return true;
};

//console.log(myAsyncExpression());

//We can use the await keyword inside an async function

/* const getNames = async () => {
  const firstName = await obtainNames(0);
  //Everything below will only run after the promise finishes
  const secondName = await obtainNames(1);
  const username = `xXx_${firstName}_xXx`;

  console.log(username);
  return username;
}; */

//getNames();

/* getNames().then((name) => console.log(name));
 */

//Try /catch block

//Refactoring the function
const getNames = async () => {
  try {
    await obtainNames(1);
    await obtainNames(2);
    await obtainNames(3);
    const firstName = await obtainNames(0);

    //Everything below will only run after the awaits

    const username = `xXx_${firstName}_xXx`;

    console.log(username);
    return username;
  } catch (err) {
    console.log(err);
  }
};

//getNames();
