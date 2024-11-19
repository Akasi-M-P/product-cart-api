
const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  image: {
    thumbnail: { type: String, required: true },
    mobile: { type: String, required: true },
    tablet: { type: String, required: true },
    desktop: { type: String, required: true }
  }
});

// Create a model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;