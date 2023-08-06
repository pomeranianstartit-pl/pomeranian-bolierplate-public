import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './style.css';
import { Link } from 'react-router-dom';

export function MaterialUIBasicElement() {
  const [age, setAge] = React.useState('');
  const [use, setUse] = useState('Zarejestruj się');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const selectChange = (use) => {
    setUse(use);
  };
  return (
    <>
      <h2 className="todo-container__title">
        <Link to="/exercises/react">⯇ MUI</Link>
      </h2>
      <Tooltip title="zarejestruj się">
        <Button style={{ marginBottom: '20px' }} variant="contained">
          {use}
          <ArrowForwardIcon />
        </Button>
      </Tooltip>
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
            <MenuItem onClick={() => selectChange('Ten')} value={10}>
              Ten
            </MenuItem>
            <MenuItem onClick={() => selectChange('Twenty')} value={20}>
              Twenty
            </MenuItem>
            <MenuItem onClick={() => selectChange('Thirty')} value={30}>
              Thirty
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <UI age={age} /> {/* Przekazanie wartości age jako props */}
    </>
  );
}

function UI(props) {
  const { age } = props; // Odebranie wartości age jako props

  // Wykorzystanie wartości age w komponencie UI
  return (
    <div>
      <p>Wiek: {age}</p>
    </div>
  );
}
