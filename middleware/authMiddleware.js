// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401); // Tidak ada token

  jwt.verify(token, config.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Token tidak valid
    req.user = user; // Simpan informasi user dalam req
    next(); // Lanjutkan ke rute berikutnya
  });
}

module.exports = authenticateToken;
