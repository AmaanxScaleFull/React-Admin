import React, { useEffect, useState } from 'react'
import { useTheme, Button, Typography, Box } from "@mui/material";
import { tokens } from "../theme";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import axios from "axios";
import { baseURL } from '../scenes/util/constants';
import { useNavigate } from 'react-router-dom'; // Import useNavigate



const DeleteButton = ({ id }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();

    const [deleted, setDeleted] = useState(false);


    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${baseURL}/delete/${id}`)
            if (response === 200) {
                console.log("User Deleted Successfully!");
                setDeleted(true)
                navigate('/team');
            } else {
                console.log("Error Deleteing User!")
            }
        } catch (error) {
            console.error("Error Deleting User:", error.response)

        }

    }

    useEffect(() => {
        if (deleted) {
            setDeleted(false)
        }
    }, [deleted])
    return (

        <Box>
            <Button
                variant="contained"
                color="primary"
                sx={{ backgroundColor: colors.greenAccent[600], mx: "5px" }}
                startIcon={<DeleteOutlineOutlinedIcon />}
                onClick={handleDelete}
            >
                <Typography color={colors.grey[100]} sx={{ textTransform: 'lowercase' }}> delete</Typography>

            </Button>
        </Box>
    )
}

export default DeleteButton