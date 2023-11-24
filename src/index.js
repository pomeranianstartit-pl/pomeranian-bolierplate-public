import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from './App';
// import { app } from './App/Firebase/firebaseConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log('firebase', app.options.projectId);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
