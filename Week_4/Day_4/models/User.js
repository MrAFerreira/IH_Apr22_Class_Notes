const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Setter

const capitalize = (name) => {
  return name.charAt(0).toUpperCase() + name.substring(1);
};

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    },
    name: {
      type: String,
      set: capitalize,
    },
    age: {
      type: Number,
    },
    job: {
      type: String,
    },
    profilePic: {
      type: String,
      //Applies the default value if a specific one isn't used
      default: 'https://laughingsquid.com/wp-content/uploads/2014/08/hovercat-catfight.jpg',
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
