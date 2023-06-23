import React from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export const MaterialUIBasicElements = () => { 
    return <>
            <Button variant="contained" endIcon={<SendIcon />}>
                Zarejestruj się
            </Button>
        </>
}
