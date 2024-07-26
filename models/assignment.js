// models/assignment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definisikan model Assignment
const Assignment = sequelize.define('Assignment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  timestamps: true, // Menyimpan waktu pembuatan dan pembaruan
  tableName: 'Assignments' // Nama tabel di database
});

module.exports = Assignment;
