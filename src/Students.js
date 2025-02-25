import { Container, Box, Button } from "@mui/material";
import StudentForm from "./StudentForm";
import StudentsTable from "./StudentsTable";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Students = () => {
    const navigate = useNavigate();
    const [student, setStudent] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        getStudent();
    }, []);

    const getStudent = () => {
        Axios.get("http://localhost:3001/api/getStudent")
            .then((response) => {
                setStudent(response?.data?.response || []);
            })
            .catch((error) => {
                console.error("Axios Error:", error);
            });
    };

    const createStudent = (data) => {
        setSubmitted(true);
        const payload = {
            registrationNumber: data.registrationNumber,
            fullName: data.fullName,
            dateOfBirth: data.dateOfBirth,
            gender: data.gender,
            email: data.email,
            phoneNumber: data.phoneNumber,
            grade: data.grade,
            enrollmentDate: data.enrollmentDate,
            parentName: data.parentName,
            relationtoStudent: data.relationtoStudent,
            permanentAddress: data.permanentAddress,
            healthInformation: data.healthInformation,
            admissionFee: data.admissionFee,
        };

        Axios.post("http://localhost:3001/api/createStudent", payload)
            .then(() => {
                getStudent();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch((error) => {
                console.error("Axios Error:", error);
            });
    };

    const updateStudent = (data) => {
        setSubmitted(true);
        const payload = {
            registrationNumber: data.registrationNumber,
            fullName: data.fullName,
            dateOfBirth: data.dateOfBirth,
            gender: data.gender,
            email: data.email,
            phoneNumber: data.phoneNumber,
            grade: data.grade,
            enrollmentDate: data.enrollmentDate,
            parentName: data.parentName,
            relationtoStudent: data.relationtoStudent,
            permanentAddress: data.permanentAddress,
            healthInformation: data.healthInformation,
            admissionFee: data.admissionFee,
        };

        Axios.post("http://localhost:3001/api/updateStudent", payload)
            .then(() => {
                getStudent();
                setSubmitted(false);
                setIsEdit(false);
                setSelectedStudent({});
            })
            .catch((error) => {
                console.error("Axios Error:", error);
            });
    };

    const deleteStudent = (data) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            Axios.post("http://localhost:3001/api/deleteStudent", data)
                .then(() => {
                    getStudent();
                })
                .catch((error) => {
                    console.error("Axios Error:", error);
                });
        }
    };

    return (
        <Container maxWidth="lg"
    sx={{
      display: "flex",
      // flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap:"5px",
      height: "100vh",
      textAlign: "center",
      backgroundImage: "url('/bgimage.jpg')", // Corrected Path
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      
    }}
  >
        <Box
            sx={{
                width: "100%",
                margin: "auto",
                marginTop: "50px",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "center",
            }}
        >
            <Button
                size="small"
                color="info"
                variant="contained"
                sx={{ marginBottom: "30px" }}
                onClick={() => navigate("/")}
            >
                Back to Dashboard
            </Button>

            <StudentForm
                createStudent={createStudent}
                updateStudent={updateStudent}
                submitted={submitted}
                data={selectedStudent}
                isEdit={isEdit}
            />

            <StudentsTable
                rows={student}
                selectedStudent={(data) => {
                    setSelectedStudent(data);
                    setIsEdit(true);
                }}
                deleteStudent={deleteStudent}
            />
        </Box>
        </Container>
    );
};

export default Students;
