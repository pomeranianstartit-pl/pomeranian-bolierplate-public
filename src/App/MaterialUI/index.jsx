import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg>
      <Box
        component="polygon"
        points="0,100 50,00, 100,100"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
      />
    </svg>
  </Paper>
);
export function MaterialUI() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div>
      <Button variant="contained">Hello world</Button>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField fullWidth label="Name" id="fullWidth" />
      </Box>

      <Box
        sx={{
          height: 180,
          width: 130,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          {icon}
        </Slide>
      </Box>

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
