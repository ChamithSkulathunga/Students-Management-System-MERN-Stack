import React from "react";
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const StudentsTable = ({ rows, selectedStudent, deleteStudent }) => {
  return (
  
    
    <Grid
      sx={{marginTop:"20px"}}
    >
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ color: "#333", textTransform: "uppercase", fontWeight: "600", fontSize: "14px" }}>
          Student Details
        </Typography>
      </Grid>

      <TableContainer component={Paper} sx={{ marginTop: "10px", boxShadow: "0px 2px 4px rgba(0,0,0,0.1)" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="students table">
          <TableHead sx={{ backgroundColor: "#00c6e6" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}>Action</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}>Reg. No.</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}>Full Name</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}>DOB</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}>Gender</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}>Email</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}>Phone</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}>Grade </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}>Enrollment Date</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}>Parent Name</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}>Relation to Student</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}>Permanent Address</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}>Health Information</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold", fontSize: "12px" }}>Admission Fee</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 ? (
              rows.map((row) => (
                <TableRow key={row.registrationNumber} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>

                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{
                        marginRight: "5px",
                        backgroundColor: "#2196f3",
                        color: "#fff",
                        fontSize: "10px",
                        padding: "2px 8px",
                        minWidth: "50px",
                        "&:hover": { backgroundColor: "#1976d2" },
                      }}
                      onClick={() => selectedStudent(row)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#f44336",
                        color: "#fff",
                        fontSize: "10px",
                        padding: "2px 8px",
                        minWidth: "50px",
                        "&:hover": { backgroundColor: "#d32f2f" },
                      }}
                      onClick={() => deleteStudent(row)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell sx={{ fontSize: "12px" }}>{row.registrationNumber}</TableCell>
                  <TableCell sx={{ fontSize: "12px" }}>{row.fullName}</TableCell>
                  <TableCell sx={{ fontSize: "12px" }}>{row.dateOfBirth}</TableCell>
                  <TableCell sx={{ fontSize: "12px" }}>{row.gender}</TableCell>
                  <TableCell sx={{ fontSize: "12px" }}>{row.email}</TableCell>
                  <TableCell sx={{ fontSize: "12px" }}>{row.phoneNumber}</TableCell>
                  <TableCell sx={{ fontSize: "12px" }}>{row.grade}</TableCell>
                  <TableCell sx={{ fontSize: "12px" }}>{row.enrollmentDate}</TableCell>
                  <TableCell sx={{ fontSize: "12px" }}>{row.parentName}</TableCell>
                  <TableCell sx={{ fontSize: "12px" }}>{row.relationtoStudent}</TableCell>
                  <TableCell sx={{ fontSize: "12px" }}>{row.permanentAddress}</TableCell>
                  <TableCell sx={{ fontSize: "12px" }}>{row.healthInformation}</TableCell>
                  <TableCell sx={{ fontSize: "12px" }}>{row.admissionFee}</TableCell>

                  
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ fontSize: "12px", padding: "10px" }}>
                  No Data Available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
    // </Container>
  );
};

export default StudentsTable;
