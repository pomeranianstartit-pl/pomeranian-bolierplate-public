import './styles.css';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Button from '@mui/material/Button';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { useState } from 'react';

export const MaterialUIBasicElements = () => {
  const [age, setAge] = useState('');
  const buttonValue = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Button variant="outlined" startIcon={<ArrowCircleRightOutlinedIcon />}>
        {age}
      </Button>
      <FormControl fullWidth>
        <InputLabel id="label">Age</InputLabel>
        <Select
          labelId="label"
          id="id"
          value={age}
          label="Age"
          onChange={buttonValue}
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
