const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    registrationNumber: { type: String, unique: true, required: true }, // Unique ID
    fullName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    email: { type: String, unique: true, required: true },
    phoneNumber: { type: String, required: true },
    grade: {type: String, required:true},
    enrollmentDate: { type: Date, required: true },
    parentName: { type: String, required: true },
    relationtoStudent: { type: String, enum: ['Father', 'Mother', 'Other'], required: true },
    permanentAddress: { type: String, required: true },
    healthInformation: { type: String, enum: ['Allergies ', 'Medical Conditions', 'OK'], required: true },
    admissionFee: { type: String, enum: ['Paid', 'Pending'], required: true },
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
