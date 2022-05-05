const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schemas define the rules for our model

//Data types:
//String
//Number
//Date
//Boolean
//Array [String]
//Schema.Types.ObjectID
//Schema.Types.Mixed

const catSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  color: {
    type: String,
    enum: ['black', 'orange', 'white', 'mixed'],
  },
  age: {
    type: Number,
    min: 0,
    max: 30,
  },
  linkedinProfile: {
    type: String,
    validate: {
      validator: (text) => {
        return text.indexOf('https://www.linkedin.com/') === 0;
      },
      message: 'Linkedin profile must start with https://www.linkedin.com/',
    },
  },
});

const Cat = mongoose.model('Cat', catSchema);

//This will export the cat model so we can use it anywhere (if we require it)
module.exports = Cat;
