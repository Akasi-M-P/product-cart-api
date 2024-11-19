
const Product = require('../models/productModel');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch products from MongoDB
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Fetch product by ID
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Add a new product
const addProduct = async (req, res) => {
  try {
    const { name, category, price, image } = req.body;
    const newProduct = new Product({ name, category, price, image });
    await newProduct.save();
    res.status(201).json({ message: 'Product added', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update an existing product
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedProduct) {
      res.status(200).json({ message: 'Product updated', product: updatedProduct });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (deletedProduct) {
      res.status(200).json({ message: 'Product deleted' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
};