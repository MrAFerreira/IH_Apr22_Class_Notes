const mongoose = require('mongoose');
//importing the cat model we created
const Cat = require('./models/Cat');
const User = require('./models/User');

mongoose
  .connect('mongodb://localhost/exampleApr22')
  .then((x) => console.log(`Connected to Mongo, database name: ${x.connections[0].name}`))
  .catch((err) => console.log(err));

let person1 = { name: 'andré', job: 'Teacher', age: 28, email: 'a@b.com' };
let person2 = { name: 'xico', job: 'TA', age: 19, email: 'x@b.com' };
let person3 = { name: 'karina', job: 'TA', age: 24, email: 'k@b.com' };

//Create
//Callback version
/* User.create(person1, (err, newUser) => {
  if (err){
    console.log(err)
    return;
  }
  console.log('User saved in the db')
}) */

//Promise version

/* User.create(person2)
  .then((newUser) => console.log(`created new user: ${newUser}`))
  .catch((err) => console.log(err)); */

//Read

//Find all
/* User.find({})
  .then((allUsers) => console.log(allUsers))
  .catch((err) => console.log(err)); */

// query

/* User.find({ age: { $lt: 28 } })
  .then((allUsers) => console.log(allUsers))
  .catch((err) => console.log(err)); */

//Projection - passed as a string after the query object
/* User.find({}, 'name age')
  .then((allUsers) => console.log(allUsers))
  .catch((err) => console.log(err));
   */

/* User.find({}, null, { sort: { age: 1 } })
  .then((allUsers) => console.log(allUsers))
  .catch((err) => console.log(err));
 */

/* User.findOne({ name: 'André' })
  .then((user) => console.log(user))
  .catch((err) => console.log(err)); */

/* User.findById('6273acf3d86def79709bfbc1')
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
 */

//Update

/* User.updateMany(
  { profilePic: 'https://laughingsquid.com/wp-content/uploads/2014/08/hovercat-catfight.jpg' },
  { profilePic: 'imgs/hovercat' }
)
  .then((users) => console.log(users))
  .catch((err) => console.log(err)); */

/* User.updateOne({ name: 'Xico' }, { job: 'Developer' })
  .then((user) => console.log(user))
  .catch((err) => console.log(err)); */

/* User.findByIdAndUpdate('6273acf3d86def79709bfbc1', { job: 'Teacher' }, { new: true })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
 */

//Delete
/*  User.deleteMany({profilePic: 'images/hovercat'})
  .then(users => console.log(users))
  .catch(err => console.log(err)) */

/* User.deleteOne({ name: 'Xico' })
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
 */
/* User.findByIdAndRemove('6273acf3d86def79709bfbc1')
  .then((user) => console.log(user))
  .catch((err) => console.log(err)); */

User.countDocuments({ job: 'TA' })
  .then((count) => {
    console.log(count);
    mongoose.disconnect(() => console.log('Disconnected'));
  })
  .catch((err) => console.log(err));

app.get('/profile', (req, res, next) => {
  User.find({ name: 'André' })
    .then((user) => {
      res.render('profile', user);
    })
    .catch((err) => console.log(err));
});
