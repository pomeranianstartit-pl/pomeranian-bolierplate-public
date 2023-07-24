import './styles.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const MaterialUi = () => {
  return (
    <div>
      <div>
        <div className="MaterialUi">
          <h1> Material Ui</h1>

          <Button variant="contained">Hello World</Button>
        </div>
        <p>Testujemy</p>
        <div>
          <Stack direction="row" spacing={2}>
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="outlined" color="error">
              Error
            </Button>
          </Stack>
          <Button
            onClick={() => {
              alert('clicked');
            }}
          >
            Kliknij i zobacz
          </Button>
        </div>
        <div>
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="fingerprint" color="secondary">
              <Fingerprint />
            </IconButton>
            <IconButton aria-label="fingerprint" color="success">
              <Fingerprint />
            </IconButton>
          </Stack>
        </div>
        <div>
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
              <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
              <AlarmIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
          </Stack>
        </div>
      </div>
      <div>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton aria-label="delete" size="large">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </div>
      <div></div>
    </div>
  );
};
