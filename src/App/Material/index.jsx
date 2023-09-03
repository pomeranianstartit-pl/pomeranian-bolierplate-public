import React from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Public from '@mui/icons-material/Public';
import Garage from '@mui/icons-material/Garage';
import Link from '@mui/icons-material/Link';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const Material = () => {
  return (
    <div>
      <h1>Material</h1>
      <div>
        <Stack spacing={3} direction="column" width={220}>
          <Button variant="contained" size="large" startIcon={<Public />}>
            Hello world
          </Button>
          <Button variant="contained" size="large" startIcon={<Garage />}>
            CAR
          </Button>
          <Button
            variant="outlined"
            href="#outlined-buttons"
            size="large"
            endIcon={<Link />}
          >
            Link
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton>
    </ToggleButtonGroup>
  );
}
