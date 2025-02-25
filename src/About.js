import { Container, Box, Button, Grid2, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

const About = () => {
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
                        About Us
                    </Typography>

                    <Typography variant="h7" sx={{ fontFamily: "revert-layer", color: "black", textTransform: 'capitalize', fontWeight: "400", mb: 5 }}>
                        We are a team of passionate developers committed to making school administration more efficient and organized. Our Students Management System is designed to simplify the process of managing student data for both teachers and administrators. We believe in empowering educators with the tools they need to focus more on teaching and less on administrative tasks.
                    </Typography>

                    <Typography variant="p" sx={{ fontFamily: "revert-layer", textAlign: 'left', color: "black", textTransform: '', fontWeight: "300", mb: 5 }}>

                        <ul>
                            <li style={{
                                margin: "10px 0px"
                            }}>

                                Our Vision: To revolutionize education administration through innovative technology.
                            </li>
                            <li
                                style={{
                                    margin: "10px 0px"
                                }}>
                                Our Mission: To provide schools with a robust, secure, and intuitive platform that enables better student management and performance tracking.
                            </li>
                            <li
                                style={{
                                    margin: "10px 0px"
                                }}
                            >
                                Our Values: Innovation, Security, Usability, and Collaboration.

                            </li>

                        </ul>

                    </Typography>




                </Grid2>

            </Box>
        </Container>
    );
};

export default About;
