import React from 'react';

import './style.css';

import { Click5 } from './Click5/Click5';
import { SeeOrNot } from './Seeornot/Seeornot';
import { MoreOrLess } from './Moreorless/MoreOrLess';

export function Block9() {

  return (
    <div>
      <h1>Blok 9</h1>
     <div>
      <Click5></Click5>
     </div>
     <hr />
     <div>
      <SeeOrNot></SeeOrNot>
     </div>
     <hr />
     <div>
      <MoreOrLess></MoreOrLess>
     </div>
      
    </div>
  );
}
