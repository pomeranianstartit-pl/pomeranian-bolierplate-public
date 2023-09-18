import React from 'react';

import './style.css';
import { SeeOrNot } from '../SeeOrNot/SeeOrNot';
import { MoreOrLess } from '../MoreOrLess/MoreOrLess';

export function SubRouteExample() {
  return (
    <div>
      <SeeOrNot />
      <hr />
      <MoreOrLess />
    </div>
  );
}
