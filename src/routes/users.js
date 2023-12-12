// // routes/users.js
// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // Handle user registration
// router.post('/signup', async (req, res) => {
//   try {
//     // Extract user registration data from request body
//     const { username, email, password } = req.body;

//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Create a new user
//     const newUser = new User({ username, email, password });
//     await newUser.save();

//     // You may want to generate and send a token for authentication

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// // Add more routes for user authentication, profile, etc.

// module.exports = router;
