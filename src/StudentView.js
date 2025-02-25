import {Container, Box, Button } from "@mui/material";

import StudentsTable from "./StudentsTable";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentView = () => {
    const navigate = useNavigate();
    const [student, setStudent] = useState([]);
  

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
                // backgroundColor: "#f9f9f9",
                borderRadius: "12px",
                // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
            }}
        >
            <Button
                variant="contained"
                 size="small"
            color="info"
                sx={{ marginBottom: "30px" }}
                onClick={() => navigate("/")}
            >
                Back to Dashboard
            </Button>


            <StudentsTable
                rows={student}
                deleteStudent={deleteStudent}
            />
        </Box>
        </Container>
    );
};

export default StudentView;
