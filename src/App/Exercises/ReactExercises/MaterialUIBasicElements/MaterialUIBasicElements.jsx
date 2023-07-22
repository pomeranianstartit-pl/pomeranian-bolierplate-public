import React from 'react';
import { Button, Card } from '@mui/material';
import './style.css';
import { CalendarIcon } from '../../../Components/Icons/CalendarIcon';
import { ShoppingBagRounded } from '@mui/icons-material';

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
