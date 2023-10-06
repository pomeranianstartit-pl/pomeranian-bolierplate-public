import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function MaterialUI() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
}
