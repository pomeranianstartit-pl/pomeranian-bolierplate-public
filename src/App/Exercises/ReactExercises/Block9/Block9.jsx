import React from 'react';

import './style.css';

import { Click5 } from './Click5/Click5';
import { SeeOrNot } from './Seeornot/Seeornot';
import { MoreOrLess } from './Moreorless/MoreOrLess';
import { Compare } from './Compare/Compare';
export function Block9() {

  return (
    <div>
      <h1>Blok 9</h1>
      <Click5 />
     <hr />
      <SeeOrNot />
     <hr />
      <MoreOrLess />
      <hr />
      <Compare />
    </div>
  );
}
