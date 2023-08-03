import React from 'react';
import Button from '@mui/material/Button';
// import ArrowForward from '@mui/icons-material/ArrowForward';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './style.css';

export default function BasicSelect({ setValue, value }) {
  const [sex, setSex] = React.useState('');

  const handleChange = (event) => {
    setSex(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Gender"
          onChange={setValue}
        >
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export function Mui() {
  const [sex, setSex] = React.useState('');

  const handleChange = (event) => {
    setSex(event.target.value);
  };
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" size="large">
          {sex}
        </Button>
      </Stack>
      <BasicSelect setValue={handleChange} value={sex}></BasicSelect>
    </div>
  );
}