import React from 'react';

import './style.css';
import { Click5 } from './Click5/Click5';
import { SeeOrNot } from '../SeeOrNot/SeeOrNot';
import { MoreOrLess } from '../MoreOrLess/MoreOrLess';

export function Block9() {
  return (
    <div>
      <h1>Blok 9 - 13.06.2023</h1>
      <div>
        <Click5 />
        <hr />
        <SeeOrNot />
        <hr />
        <MoreOrLess />
      </div>
    </div>
  );
}
