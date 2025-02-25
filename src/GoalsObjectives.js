import { Container, Typography, Box, Button, Grid2 } from "@mui/material";

import { useNavigate } from "react-router-dom";

const GoalsObjectives = () => {

    const navigate = useNavigate();

    return (
        <Container maxWidth="lg"
            sx={{
                display: "flex",
                // flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "5px",
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
                    width: "80%",
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


                <Grid2
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "80px 20px ",
                        margin: "10px 20px",
                        backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent background
                        borderRadius: "12px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                >

                    <Typography variant="h3" sx={{ fontFamily: "revert-layer", color: "black", textTransform: 'capitalize', fontWeight: "bold", mb: 5 }}>
                        Goals & Objectives
                    </Typography>

                    <Typography variant="p" sx={{ fontFamily: "revert-layer", textAlign: 'left', color: "black", textTransform: '', fontWeight: "300", mb: 5 }}>

                        <ul>
                            <li style={{
                                margin: "10px 0px"
                            }}>

                                To provide a streamlined system for schools to manage student data efficiently and securely.
                            </li>
                            <li
                                style={{
                                    margin: "10px 0px"
                                }}>
                                To enhance the overall learning experience by keeping track of student progress, attendance, and behavior.
                            </li>
                            <li
                                style={{
                                    margin: "10px 0px"
                                }}
                            >
                                To create a user-friendly interface for teachers and administrators to quickly add, view, and update student details.

                            </li>
                            <li
                                style={{
                                    margin: "10px 0px"
                                }}

                            >
                                To ensure data integrity and security through the use of best practices in database management and encryption techniques.

                            </li>
                            <li

                                style={{
                                    margin: "10px 0px"
                                }}>
                                To enable easy integration with other school systems like grading or timetable management, ensuring seamless operations.

                            </li>
                        </ul>

                    </Typography>




                </Grid2>
            </Box>



        </Container>
    );
};

export default GoalsObjectives;
