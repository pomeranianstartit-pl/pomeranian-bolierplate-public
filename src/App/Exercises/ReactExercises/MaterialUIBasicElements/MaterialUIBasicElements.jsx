import React, { useState } from 'react';
import {
  Button,
  Card,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  Box,
} from '@mui/material';
import './style.css';
import { CalendarIcon } from '../../../Components/Icons/CalendarIcon';
import { ShoppingBagRounded } from '@mui/icons-material';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export function MaterialUIBasicElements() {
  const [age, setAge] = useState(0);
  return (
    <Card>
      <Button variant="text" startIcon={<ShoppingBagRounded />} color="error">
        Add to Cart
      </Button>
      <Button variant="contained" startIcon={<CalendarIcon />}>
        Add to Cart
      </Button>
      <Button variant="outlined">Add to Cart</Button>
      <BasicSelect />
    </Card>
  );
}
