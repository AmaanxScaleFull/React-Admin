import React from 'react'
import { useTheme, Button, Typography, Box } from "@mui/material";
import { tokens } from "../theme";
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

const UpdateButton = ({ user }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const handleUpdate = () => {
        console.log(user);
    }
    return (
        <Box>
            <Button
                variant="contained"
                color="primary"
                sx={{ backgroundColor: colors.greenAccent[600], mx: "5px" }}
                startIcon={<EditNoteOutlinedIcon />}
                onClick={handleUpdate}
            >
                <Typography color={colors.grey[100]} sx={{ textTransform: 'lowercase' }}> update</Typography>
            </Button>
        </Box>
    )
}

export default UpdateButton