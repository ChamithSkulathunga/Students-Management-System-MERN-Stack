import {  Button, Grid, Input, Typography, TextField, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";

const StudentForm = ({ createStudent, updateStudent, submitted, data, isEdit }) => {
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [fullName, setFullName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [grade, setGrade] = useState("");
    const [enrollmentDate, setEnrollmentDate] = useState("");
    const [parentName, setParentName] = useState("");
    const [relationtoStudent, setRelationtoStudent] = useState("");
    const [permanentAddress, setPermanentAddress] = useState("");
    const [healthInformation, setHealthInformation] = useState("");
    const [admissionFee, setAdmissionFee] = useState("");

    useEffect(() => {
        if (!submitted) {
            setRegistrationNumber("");
            setFullName("");
            setDateOfBirth("");
            setGender("");
            setEmail("");
            setPhoneNumber("");
            setGrade("");
            setEnrollmentDate("");
            setParentName("");
            setRelationtoStudent("");
            setPermanentAddress("");
            setHealthInformation("");
            setAdmissionFee("");
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.registrationNumber) {
            setRegistrationNumber(data.registrationNumber);
            setFullName(data.fullName);
            setDateOfBirth(data.dateOfBirth);
            setGender(data.gender);
            setEmail(data.email);
            setPhoneNumber(data.phoneNumber);
            setGrade(data.grade);
            setEnrollmentDate(data.enrollmentDate);
            setParentName(data.parentName);
            setRelationtoStudent(data.relationtoStudent);
            setPermanentAddress(data.permanentAddress);
            setHealthInformation(data.healthInformation);
            setAdmissionFee(data.admissionFee);
        }
    }, [data]);

    return (
       
            <Grid
                container
                spacing={1}
                sx={{
                    display:"flex",
                    justifyContent:"center",
                    alignContent:'center',
                    backgroundColor: "#ffffff",
                    padding: "20px",
                    borderRadius: "6px",
                    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                    width: '50%',
                    margin:'auto'
                    // maxWidth: "50%", 
                }}
            >
                <Grid item xs={12}>
                    <Typography variant="h6" sx={{ color: "#333", textTransform: "uppercase", fontWeight: "600", fontSize: "14px" }}>
                        Student Form
                    </Typography>
                </Grid>

                {/* Registration Number Field */}
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <Typography component="label" htmlFor="registrationNumber" sx={{ color: "#333", marginRight: "8px", fontSize: "14px", minWidth: "150px", textAlign: "left" }}>
                        Reg. No.:
                    </Typography>
                    <Input
                        type="text"
                        id="registrationNumber"
                        name="registrationNumber"
                        placeholder="Registration Number"
                        sx={{
                            width: "50%",
                            fontSize: "14px",
                            padding: "8px",
                            borderRadius: "4px",
                            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            "&:focus": { borderColor: "#00c6e6" }, // Add focus effect
                        }}
                        value={registrationNumber}
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                        disabled={isEdit}
                    />
                </Grid>

                {/* Full Name Field */}
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <Typography component="label" htmlFor="fullName" sx={{ color: "#333", marginRight: "8px", fontSize: "14px", minWidth: "150px", textAlign: "left" }}>
                        Full Name:
                    </Typography>
                    <Input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Full Name"
                        sx={{
                            width: "50%",
                            fontSize: "14px",
                            padding: "8px",
                            borderRadius: "4px",
                            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            "&:focus": { borderColor: "#00c6e6" },
                        }}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </Grid>

                {/* Date of Birth Field */}
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <Typography component="label" htmlFor="dateOfBirth" sx={{ color: "#333", marginRight: "8px", fontSize: "14px", minWidth: "150px", textAlign: "left" }}>
                        DOB:
                    </Typography>
                    <TextField
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        sx={{
                            width: "50%",
                            fontSize: "14px",
                            padding: "8px",
                            borderRadius: "4px",
                            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            "&:focus": { borderColor: "#00c6e6" },
                        }}
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                </Grid>

                {/* Gender Field */}
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <Typography component="label" htmlFor="gender" sx={{ color: "#333", marginRight: "8px", fontSize: "14px", minWidth: "150px", textAlign: "left" }}>
                        Gender:
                    </Typography>
                    <FormControl sx={{ width: "50%" }}>
                        <InputLabel>Gender</InputLabel>
                        <Select
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            label="Gender"
                            sx={{
                                fontSize: "14px",
                                borderRadius: "4px",
                                boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            }}
                        >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                {/* Email Field */}
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <Typography component="label" htmlFor="email" sx={{ color: "#333", marginRight: "8px", fontSize: "14px", minWidth: "150px", textAlign: "left" }}>
                        Email:
                    </Typography>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        sx={{
                            width: "50%",
                            fontSize: "14px",
                            padding: "8px",
                            borderRadius: "4px",
                            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            "&:focus": { borderColor: "#00c6e6" },
                        }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>

                {/* Phone Number Field */}
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <Typography component="label" htmlFor="phoneNumber" sx={{ color: "#333", marginRight: "8px", fontSize: "14px", minWidth: "150px", textAlign: "left" }}>
                        Phone:
                    </Typography>
                    <Input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        sx={{
                            width: "50%",
                            fontSize: "14px",
                            padding: "8px",
                            borderRadius: "4px",
                            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            "&:focus": { borderColor: "#00c6e6" },
                        }}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </Grid>

                {/* Grade Field */}
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <Typography component="label" htmlFor="grade" sx={{ color: "#333", marginRight: "8px", fontSize: "14px", minWidth: "150px", textAlign: "left" }}>
                        Grade:
                    </Typography>
                    <Input
                        type="text"
                        id="grade"
                        name="grade"
                        placeholder="Grade"
                        sx={{
                            width: "50%",
                            fontSize: "14px",
                            padding: "8px",
                            borderRadius: "4px",
                            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            "&:focus": { borderColor: "#00c6e6" },
                        }}
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                    />
                </Grid>

                {/* Enrollment Date Field */}
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <Typography component="label" htmlFor="enrollmentDate" sx={{ color: "#333", marginRight: "8px", fontSize: "14px", minWidth: "150px", textAlign: "left" }}>
                        Enrollment Date:
                    </Typography>
                    <TextField
                        type="date"
                        id="enrollmentDate"
                        name="enrollmentDate"
                        sx={{
                            width: "50%",
                            fontSize: "14px",
                            padding: "8px",
                            borderRadius: "4px",
                            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            "&:focus": { borderColor: "#00c6e6" },
                        }}
                        value={enrollmentDate}
                        onChange={(e) => setEnrollmentDate(e.target.value)}
                    />
                </Grid>

                {/* Parent Name Field */}
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <Typography component="label" htmlFor="parentName" sx={{ color: "#333", marginRight: "8px", fontSize: "14px", minWidth: "150px", textAlign: "left" }}>
                        Parent Name:
                    </Typography>
                    <Input
                        type="text"
                        id="parentName"
                        name="parentName"
                        placeholder="Parent Name"
                        sx={{
                            width: "50%",
                            fontSize: "14px",
                            padding: "8px",
                            borderRadius: "4px",
                            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            "&:focus": { borderColor: "#00c6e6" },
                        }}
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                    />
                </Grid>

                {/* Relation to Student Field */}
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <Typography component="label" htmlFor="relationtoStudent" sx={{ color: "#333", marginRight: "8px", fontSize: "14px", minWidth: "150px", textAlign: "left" }}>
                        Relation:
                    </Typography>
                    <Input
                        type="text"
                        id="relationtoStudent"
                        name="relationtoStudent"
                        placeholder="Relation to Student"
                        sx={{
                            width: "50%",
                            fontSize: "14px",
                            padding: "8px",
                            borderRadius: "4px",
                            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            "&:focus": { borderColor: "#00c6e6" },
                        }}
                        value={relationtoStudent}
                        onChange={(e) => setRelationtoStudent(e.target.value)}
                    />
                </Grid>

                {/* Permanent Address Field */}
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <Typography component="label" htmlFor="permanentAddress" sx={{ color: "#333", marginRight: "8px", fontSize: "14px", minWidth: "150px", textAlign: "left" }}>
                        Permanent Address:
                    </Typography>
                    <Input
                        type="text"
                        id="permanentAddress"
                        name="permanentAddress"
                        placeholder="Permanent Address"
                        sx={{
                            width: "50%",
                            fontSize: "14px",
                            padding: "8px",
                            borderRadius: "4px",
                            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            "&:focus": { borderColor: "#00c6e6" },
                        }}
                        value={permanentAddress}
                        onChange={(e) => setPermanentAddress(e.target.value)}
                    />
                </Grid>

                {/* Health Information Field */}
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <Typography component="label" htmlFor="healthInformation" sx={{ color: "#333", marginRight: "8px", fontSize: "14px", minWidth: "150px", textAlign: "left" }}>
                        Health Information:
                    </Typography>
                    <Input
                        type="text"
                        id="healthInformation"
                        name="healthInformation"
                        placeholder="Health Information"
                        sx={{
                            width: "50%",
                            fontSize: "14px",
                            padding: "8px",
                            borderRadius: "4px",
                            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            "&:focus": { borderColor: "#00c6e6" },
                        }}
                        value={healthInformation}
                        onChange={(e) => setHealthInformation(e.target.value)}
                    />
                </Grid>

                {/* Admission Fee Field */}
                <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent:"space-evenly" }}>
                    <Typography component="label" htmlFor="admissionFee" sx={{ color: "#333", marginRight: "8px", fontSize: "14px", minWidth: "150px", textAlign: "left" }}>
                        Admission Fee:
                    </Typography>
                    <Input
                        type="text"
                        id="admissionFee"
                        name="admissionFee"
                        placeholder="Admission Fee"
                        sx={{
                            width: "50%",
                            fontSize: "14px",
                            padding: "8px",
                            borderRadius: "4px",
                            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            "&:focus": { borderColor: "#00c6e6" },
                        }}
                        value={admissionFee}
                        onChange={(e) => setAdmissionFee(e.target.value)}
                    />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12} >
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            backgroundColor: "#00c6e6",
                            color: "#fff",
                            marginTop: "10px",
                            padding: "5px 12px",
                            fontSize: "12px",
                            "&:hover": { backgroundColor: "#009bbf" },
                        }}
                        onClick={() =>
                            isEdit
                                ? updateStudent({
                                      registrationNumber,
                                      fullName,
                                      dateOfBirth,
                                      gender,
                                      email,
                                      phoneNumber,
                                      grade,
                                      enrollmentDate,
                                      parentName,
                                      relationtoStudent,
                                      permanentAddress,
                                      healthInformation,
                                      admissionFee,
                                  })
                                : createStudent({
                                      registrationNumber,
                                      fullName,
                                      dateOfBirth,
                                      gender,
                                      email,
                                      phoneNumber,
                                      grade,
                                      enrollmentDate,
                                      parentName,
                                      relationtoStudent,
                                      permanentAddress,
                                      healthInformation,
                                      admissionFee,
                                  })
                        }
                    >
                        {isEdit ? "Update" : "Add"}
                    </Button>
                </Grid>
            </Grid>
        // </Container>
    );
};

export default StudentForm;
