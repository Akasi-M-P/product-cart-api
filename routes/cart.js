const express = require('express');
const router = express.Router();
const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
} = require('../controllers/cartController'); 


console.log({
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
  })





// Define routes
router.get('/', getCart);
router.post('/', addToCart);
router.put('/:id', updateCartItem);
router.delete('/:id', removeFromCart);

module.exports = router; // Export router