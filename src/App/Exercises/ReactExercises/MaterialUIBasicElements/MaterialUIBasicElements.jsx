import React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import DeleteIcon from '@mui/icons-material/Delete';

import './style.css';

export function MaterialUIBasicElements() {
  return (
    <div>
      {' '}
      <Button variant="text">
        <DeleteIcon /> Text
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Link href="#">Link</Link>
      <Link href="#" color="inherit">
        {'color="inherit"'}
      </Link>
      <Link href="#" variant="body2">
        {'variant="body2"'}
      </Link>
    </div>
  );
}
