import { Container, Typography, Button, Box, Grid2 } from "@mui/material";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundImage: "url('/bgimage.jpg')", // Corrected Path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
        
      }}
    >
     
      <Grid2
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent background
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >

      
      <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left Side Image Section */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection:'column',
            justifyContent: "center",
            alignItems: "center",
            padding:"80px 20px ",
            margin:"10px 20px",
            // backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent background
            // borderRadius: "12px",
            // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
             <Typography variant="h5" sx={{ fontFamily: "revert-layer",fontWeight:"800" , color: "green", mb: 2 }}>
        " Welcome to.... "
      </Typography>
      <Typography variant="h3" sx={{ fontFamily: "revert-layer", color: "black", textTransform: 'capitalize', fontWeight: "bold", mb: 5 }}>
        Students Management System
      </Typography>

          {/* Add an Image Here If Needed */}
        </Box>

        {/* Right Side Buttons in Column */}
        <Box
          sx={{
            width: "40%",
            padding: "30px",
            // backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
            // borderRadius: "12px",
            // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => navigate("/GoalsObjectives")}
          >
            Goals & Objectives
          </Button>

          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => navigate("/StudentView")}
          >
            View Students Details
          </Button>

          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => navigate("/students")}
          >
            Add New Students
          </Button>

          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => navigate("/About")}
          >
            About us
          </Button>
        </Box>
      </Box>
      </Grid2>
    </Container>
  );
};

export default App;
