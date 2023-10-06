import React from 'react';
import Button from '@mui/material/Button';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Wolf from '../Images/snow-wolf.png';

export function MaterialUI() {
  return (
    <div>
      {' '}
      <Button variant="contained">Material UI...</Button>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Wolf" src={Wolf} />
        <Avatar alt="Wolf" src={Wolf} />
        <Avatar alt="Wolf" src={Wolf} />
      </Stack>
    </div>
  );
}
