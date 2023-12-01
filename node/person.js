const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/productApp');
  console.log(1)
}

const personSchema = new mongoose.Schema({
  first: {
    type: String,
    required:true,
  },
  last: {
    type: String,
    required:true,
  }
})

personSchema.virtual('fullName').get(function () {
  return `${this.first} ${this.last}`
})

const Person = mongoose.model('person', personSchema);

const yusu = new Person({ first: 'shin', last: 'yusu' });
yusu.save().then(res => {
  console.log(res)
  console.log(res.fullName)
})