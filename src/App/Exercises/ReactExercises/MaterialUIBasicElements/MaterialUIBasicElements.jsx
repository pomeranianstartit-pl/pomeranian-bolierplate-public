import React from 'react';

import { Button, Card } from '@mui/material';

import './styles.css';

import { ShoppingBagRounded } from '@mui/icons-material';

import { CalendarIcon } from '../../../Components/Icons/CalendarIcon';

export function MaterialUIBasicElements() {
  return (
    <Card>
      <Button variant="text" startIcon={<ShoppingBagRounded />}>
        Add to Cart
      </Button>

      <Button variant="contained" startIcon={<CalendarIcon />}>
        Add to Cart
      </Button>

      <Button variant="outlined">Add to Cart</Button>
    </Card>
  );
}
