const Student = require('./model');

// Add student (C)
const createStudent = (req, res, next) => {
    const student = new Student({
        registrationNumber: req.body.registrationNumber, // Unique ID
        fullName: req.body.fullName,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        grade: req.body.grade,
        enrollmentDate: req.body.enrollmentDate,
        parentName: req.body.parentName,
        relationtoStudent: req.body.relationtoStudent,
        permanentAddress: req.body.permanentAddress,
        healthInformation: req.body.healthInformation,
        admissionFee: req.body.admissionFee,

    });

    student.save()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

// Get all students (R)
const getStudent = (req, res, next) => {
    Student.find()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};

// Update student (U)
const updateStudent = (req, res, next) => {
    const { registrationNumber, fullName, dateOfBirth, gender, email, phoneNumber, grade, enrollmentDate, parentName, relationtoStudent, permanentAddress, healthInformation, admissionFee  } = req.body;

    Student.updateOne(
        { registrationNumber: registrationNumber }, 
        { $set: { fullName, dateOfBirth, gender, email, phoneNumber, grade, enrollmentDate, parentName, relationtoStudent, permanentAddress, healthInformation, admissionFee  } }
    )
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ message: error });
        });
};

// Delete student (D)
const deleteStudent = (req, res, next) => {
    const { registrationNumber } = req.body;

    Student.deleteOne({ registrationNumber: registrationNumber })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ message: error });
        });
};

exports.createStudent = createStudent;
exports.getStudent = getStudent;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
