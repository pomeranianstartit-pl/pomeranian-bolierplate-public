import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './index.css';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#9E1E9E',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#3D9E1E',
    },
  },
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
