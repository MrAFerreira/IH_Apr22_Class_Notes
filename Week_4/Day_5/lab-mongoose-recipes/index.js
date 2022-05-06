const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
/* mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  }); */
let myRecipe = {
  title: 'Tuna Chilly',
  level: 'Easy Peasy',
  ingredients: [
    'Tuna',
    'black beans',
    'Tomato Sauce',
    'Chillies',
    'Onion',
    'Bell Peppers',
    'White Rice',
  ],
  cuisine: 'Weird',
  dishType: 'main_course',
  duration: 120,
  creator: 'André',
};

async function createDatabase() {
  try {
    const connected = await mongoose.connect(MONGODB_URI);
    console.log(connected.connection.name);
    //Deletes the DB
    await Recipe.deleteMany();

    const addRecipe = await Recipe.create(myRecipe);
    console.log(addRecipe);

    const addMultiple = await Recipe.insertMany(data);
    addMultiple.forEach((recipe) => console.log(recipe.title));

    const updatedRecipe = await Recipe.findOneAndUpdate(
      { title: 'Rigatoni alla Genovese' },
      { duration: 100 },
      { new: true }
    );
    console.log(updatedRecipe);

    const deletedRecipe = await Recipe.findOneAndRemove({ title: 'Carrot Cake' });
    console.log(deletedRecipe);

    await mongoose.disconnect(() => console.log('disconnected'));
  } catch (error) {
    console.log(error);
  }
}

createDatabase();
