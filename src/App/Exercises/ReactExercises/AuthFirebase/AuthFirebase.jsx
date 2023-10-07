import React from 'react';
import { firebaseConfig } from '../../../Firebase/firebaseConfig';

export function AuthFirebase() {
  console.log(firebaseConfig);
  return (
    <div>
      <p>będzie wpisany FIREBASE nasz tekst</p>
    </div>
  );
}
