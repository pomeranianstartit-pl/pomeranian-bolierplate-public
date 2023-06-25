import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MaterialUIBasicElements = () => {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button variant="contained" size="small" endIcon={<ArrowForwardIcon />}>
          zarejestruj się
        </Button>
      </div>
    </Box>
  );
};

export default MaterialUIBasicElements;
