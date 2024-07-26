// controllers/authController.js
const User = require('../models/user'); // Pastikan path ini sesuai
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { JWT_SECRET } = require('../config/config'); // Ambil secret dari konfigurasi

// Fungsi login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Temukan pengguna
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Periksa password
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });

    // Buat token
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
