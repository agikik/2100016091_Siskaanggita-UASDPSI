const express = require('express');
const router = express.Router();

// Dummy data for illustration
const assignments = [
  { id: 1, title: 'Assignment 1', description: 'Description for assignment 1' },
  { id: 2, title: 'Assignment 2', description: 'Description for assignment 2' }
];

// Handle GET request to /api/assignments
router.get('/', (req, res) => {
  // Return the list of assignments
  res.json(assignments); // Ensure this is returning the data as expected
});

// Handle POST request to /api/assignments
router.post('/', (req, res) => {
  // Handle creation of a new assignment
  res.status(201).json({ message: 'Assignment created' });
});

module.exports = router;
