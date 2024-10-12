const mongoose = require('mongoose');
const Dog = require('./server');

mongoose.connect('mongodb://localhost:27017/adoptme');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');

  const dogs = [
    { name: 'a', gender: 'male', age: 'adult', image: 'images/adultm.webp' },
    { name: 'w', gender: 'female', age: 'adult', image: 'images/adultf.webp' },
    { name: 'pippo', gender: 'male', age: 'puppy', image: 'images/puppym.webp' },
    { name: 'mod', gender: 'female', age: 'puppy', image: 'images/puppyf.webp' },
  ];

  try {
    await Dog.insertMany(dogs);
    console.log('Data inserted');
  } catch (err) {
    console.error(err);
  } finally {
    db.close();
  }
});
