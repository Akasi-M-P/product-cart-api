// Placeholder data for the cart
let cart = [];

// Controller functions
const getCart = (req, res) => {
  res.status(200).json(cart);
};

const addToCart = (req, res) => {
  const product = req.body; // Assuming product details are in the request body
  cart.push(product);
  res.status(201).json({ message: 'Product added to cart', cart });
};

const updateCartItem = (req, res) => {
  const { id } = req.params; // Assuming product ID is in the URL
  const { quantity } = req.body; // Assuming new quantity is in the request body

  // Find the product in the cart and update its quantity
  const product = cart.find((item) => item.id === parseInt(id));
  if (product) {
    product.quantity = quantity;
    res.status(200).json({ message: 'Cart updated', cart });
  } else {
    res.status(404).json({ message: 'Product not found in cart' });
  }
};

const removeFromCart = (req, res) => {
  const { id } = req.params;
  cart = cart.filter((item) => item.id !== parseInt(id));
  res.status(200).json({ message: 'Product removed from cart', cart });
};

// Export all functions
module.exports = {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
};