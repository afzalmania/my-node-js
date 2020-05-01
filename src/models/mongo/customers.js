const mongoose = require('mongoose');

const { Schema } = mongoose;

const customersSchema = new Schema(
  {
    id: String,
    firstName: String,
    lastName: String,
    age: String,
    address: Object,
    phoneNumber: Array,
  },
  {
    collection: 'customers',
  }
);

module.exports = mongoose.model('customerModel', customersSchema);
