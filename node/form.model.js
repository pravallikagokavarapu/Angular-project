const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('form', FormSchema);
module.exports = Product;
