// routes/auth.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Dummy data, ganti dengan logika autentikasi Anda
const users = [{ username: 'user', password: 'password' }];

// Login Endpoint
router.post('/login', (req, res) => {
  console.log('Login endpoint hit'); // Tambahkan logging
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ username: user.username }, config.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
