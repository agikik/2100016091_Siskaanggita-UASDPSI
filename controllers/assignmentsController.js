// controllers/assignmentsController.js
const getAllAssignments = (req, res) => {
  // Logika untuk mendapatkan semua assignments
  res.send('Get all assignments');
};

const createAssignment = (req, res) => {
  // Logika untuk membuat assignment baru
  res.send('Create new assignment');
};

module.exports = {
  getAllAssignments,
  createAssignment
};
