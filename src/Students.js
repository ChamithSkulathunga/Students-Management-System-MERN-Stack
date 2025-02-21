import { Box } from "@mui/material";
import StudentForm from "./StudentForm";
import StudentsTable from "./StudentsTable";
const student = [
    {
        id: 1,
        name: "Chamith",
    },
    {
        id: 2,
        name: "Sadeepa",
    },
];

const Students = () => {

    return (
        <Box 
        sx={{
            width:'calc(100% - 100px)',
            margin: 'auto',
            marginTop: '100px',
            
        }}
        >
            <StudentForm />
            <StudentsTable rows={student} />
        </Box>
    )
}

export default Students;