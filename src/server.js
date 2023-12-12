// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('your-mongodb-uri', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
