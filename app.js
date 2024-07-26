const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const assignmentsRoutes = require('./routes/assignments');
const materialsRoutes = require('./routes/materials');
const sequelize = require('./config/database');
const authenticateToken = require('./middleware/authMiddleware'); // Impor middleware autentikasi
require('dotenv').config();


// Middleware
app.use(express.json());

// Rute
app.use('/api/auth', authRoutes); // Rute autentikasi tidak memerlukan autentikasi

// Terapkan middleware autentikasi untuk rute yang memerlukan perlindungan
app.use('/api/assignments', authenticateToken, assignmentsRoutes);
app.use('/api/materials', authenticateToken, materialsRoutes);

// Rute root untuk debugging
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Sinkronisasi model dan mulai server
sequelize.sync()
  .then(() => {
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });
