import React from 'react';

import './style.css';
import { Click5 } from '../Click5/Click5';
import { SeeOrNot } from '../SeeOrNot/SeeOrNot';
import { MoreOrLess } from '../MoreOrLess/MoreOrLess';
import { MoreOrLessAdvanced } from '../MoreOrLessAdvanced/MoreOrLessAdvanced';

export function Block09() {
  return (
    <div>
      <h1>Blok 9 - 13.06.2023</h1>
      <div>
        <br />
        <Click5 />
        <hr />
        <SeeOrNot />
        <hr />
        <MoreOrLess />
        <hr />
        <MoreOrLessAdvanced />
      </div>
    </div>
  );
}
