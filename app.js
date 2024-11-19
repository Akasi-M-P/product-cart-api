
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

// Initialize the app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/product-cart-api', {
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// Use product and cart routes
app.use('/api', productRoutes);
app.use('/api', cartRoutes);

const basicAuth = require('express-basic-auth');

app.use('/admin', basicAuth({
  users: { admin: 'password123' }, 
}));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});