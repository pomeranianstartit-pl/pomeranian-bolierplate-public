import React from 'react';
import {firebaseConfig} from '../../../Firebase/firebaseConfig'

import './style.css';

export function AuthFirebase () {
  console.log(firebaseConfig);
  return (
    <div>
      <h1>Autoryzacja z Firebase</h1>
    </div>
  );
}
