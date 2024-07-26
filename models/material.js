// models/material.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definisikan model Material
const Material = sequelize.define('Material', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true // Menambahkan allowNull agar content bisa kosong
  }
}, {
  timestamps: true, // Menyimpan informasi waktu pembuatan dan pembaruan
  tableName: 'Materials' // Nama tabel di database
});

module.exports = Material;
