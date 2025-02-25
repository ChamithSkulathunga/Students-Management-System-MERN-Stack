const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Create student
router.post('/createStudent', controller.createStudent);

// Get all students
router.get('/getStudent', controller.getStudent);

// Update student
router.post('/updateStudent', controller.updateStudent);

// Delete student
router.post('/deleteStudent', controller.deleteStudent);

module.exports = router;
