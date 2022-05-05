//Mongoose - ODM - Object Document Mapper

const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/exampleApr22')
  .then((x) => console.log(`Connected to Mongo, database name: ${x.connections[0].name}`))
  .catch((err) => console.log(err));

//Model needs a name and a schema
//The schema is the set of rules and properties the model has
const Cat = mongoose.model('Cat', { name: String });

//This will create an
const kitty = new Cat({ name: 'Garfield' });

//Saving the cat to the DB (variable/save method)
/* kitty
  .save()
  .then((newCat) => console.log(`New cat created: ${newCat.name}`))
  .catch((err) => console.log(err));
 */

//Find in the database - callback method
/* Cat.find({}, (err, cats) => {
  if (err) {
    console.log(err);
  }
  console.log(cats);
}); */

//Refactor creating a cat

const addCat = (catName) => {
  const kitty = new Cat({ name: catName });

  kitty
    .save()
    .then((newCat) => console.log(`New cat created: ${newCat.name}`))
    .catch((err) => console.log(err));
};

const showCats = () => {
  //Promise version of the find method
  Cat.find()
    .then((cats) => {
      cats.forEach((cat) => console.log(cat.name));
    })
    .catch((err) => console.log(err));
};

function addTenCats() {
  for (let i = 0; i < 10; i++) {
    addCat(`Fluffy the ${i + 1}`);
  }
}

addTenCats();
//addCat('Felix');
showCats();

setTimeout(showCats, 1500);
