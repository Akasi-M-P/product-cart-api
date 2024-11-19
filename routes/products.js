


const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productsController');

// Validation middleware for adding a product
const validateProduct = [
  body('name').notEmpty().withMessage('Name is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number')
];

// Get all products
router.get('/products', getAllProducts);

// Get a product by ID
router.get('/products/:id', getProductById);

// Add a new product (admin functionality) with validation
router.post('/products', validateProduct, (req, res) => {
  // Check validation results
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Call the controller to handle adding the product
  addProduct(req, res);
});

// Update an existing product (admin functionality)
router.put('/products/:id', updateProduct);

// Delete a product (admin functionality)
router.delete('/products/:id', deleteProduct);

module.exports = router;