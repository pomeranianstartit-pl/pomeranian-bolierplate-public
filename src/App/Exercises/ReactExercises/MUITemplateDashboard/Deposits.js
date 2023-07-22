import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Current Balance</Title>
      <Typography component="p" variant="h4">
        PLN 23.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 22 July, 2023
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
