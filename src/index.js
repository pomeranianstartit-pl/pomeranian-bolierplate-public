import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//zamiast tego to inne SS 2023-11-08
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//root.render(<App />);
