const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create student
app.post('/createStudent', (req, res) => {
    controller.createStudent(req, res);
});

// Get all students
app.get('/getStudent', (req, res) => {
    controller.getStudent(req, res);
});

// Update student
app.post('/updateStudent', (req, res) => {
    controller.updateStudent(req, res);
});

// Delete student
app.post('/deleteStudent', (req, res) => {
    controller.deleteStudent(req, res);
});

module.exports = app;
