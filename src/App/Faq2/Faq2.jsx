import './styles.css';
import { MasterHeaderFaq2 } from '../Components/MasterHeaderFaq2/MasterheaderFaq2';
import { SingleQuestion2 } from './SingleQuestion2';
import React from 'react';


export const Faq2 = () => {


  return (
    <div>
      <MasterHeaderFaq2 title='FAQ2haha' />
      <h2>Tu znajdziesz odpowiedzi na resztę pytań</h2>
      <hr />
      <SingleQuestion2 />


    </div>
  );
};
