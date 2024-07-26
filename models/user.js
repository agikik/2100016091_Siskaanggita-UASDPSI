// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definisikan model User
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // Pastikan username unik
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true, // Menyimpan informasi waktu pembuatan dan pembaruan
  tableName: 'Users' // Nama tabel di database
});

module.exports = User;
