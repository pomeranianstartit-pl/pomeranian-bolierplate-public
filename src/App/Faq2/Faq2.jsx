import './styles.css';
import { MasterHeaderFaq2 } from '../Components/MasterHeaderFaq2/MasterheaderFaq2';
import { SingleQuestion2 } from './SingleQuestion2';
import React from 'react';


export const Faq2 = () => {
  let odp = 'jakas odp';
  return (
    <div>

      <MasterHeaderFaq2 title='FAQ2haha' />
      <h1>Jak się zapisać</h1>

      <SingleQuestion2 question2='jakieś pytanie' answer23={odp} />
      <SingleQuestion2 question2="jakieś pytanie" answer23={odp} />
      <SingleQuestion2 question2="jakieś pytanie" answer23={odp} />
      <SingleQuestion2 question2="jakieś pytanie" answer23={odp} />
    </div>
  );
};
