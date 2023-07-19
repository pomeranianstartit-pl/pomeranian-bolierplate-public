import './styles.css';
import { MasterHeaderFaq2 } from '../Components/MasterHeaderFaq2/MasterheaderFaq2';
import { SingleQuestion2 } from './SingleQuestion2';
import React from 'react';


const JakisObiekt = {
  pierwszy: 1,
  drugi: 2
}
// const JakisObiekt2 = {
//   trzeci: 3,
//   czwarty: 4
// }


export const Faq2 = () => {
  let odp = 'jakas odp';

  // function Dodaj({ pierwszy, drugi }) {

  // console.log(pierwszy, drugi);
  //   return <p> Nowy komponent {pierwszy}, {drugi}</p>
  // }



  // Dodaj(JakisObiekt);
  // console.log(JakisObiekt);

  return (


    <div>

      <MasterHeaderFaq2 title='FAQ2haha' />
      {/* <Dodaj />; */}

      <h1>Jak się zapisać</h1>

      <SingleQuestion2 question2='jakieś pytanie' answer23={odp} />
      <SingleQuestion2 question2="jakieś pytanie" answer23={odp} />
      <SingleQuestion2 question2="jakieś pytanie" answer23={odp} />
      <SingleQuestion2 question2="jakieś pytanie" answer23={odp} />
    </div>
  );
};
