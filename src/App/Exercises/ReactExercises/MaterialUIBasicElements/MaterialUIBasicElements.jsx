import React from 'react';
import Button from

import './style.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Select } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

export default function BasicSelect({setValue, vaue}) {
    const [sex, setSex] = React.useState('');

    const handleChange = (event) => {
        setSex(event.target.value);
    };
    return (
        <Box sx={{ mirWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sex}
                label="Age"
                onchange={handleChange}
                >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}


export function MaterialUIBasicElements() {
    const [sex, setSex] = React.useState('');

    const handleChange = (event) => {
        setSex(event.target.value);
    };
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" size="large" endIcon={<ArrowForward />}>
                    {sex}
                </Button>
            </Stack>
            <BasicSelect setValue={handleChange} value={sex}></BasicSelect>
        </div>
    );
};