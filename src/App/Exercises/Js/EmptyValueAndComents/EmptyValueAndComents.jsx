import React from 'react';

import './style.css';

export function EmptyValueAndComents() {
  /*
   * Undefined - lack of value
   */

  // variable with no assignment
  let name;
  console.log(name);

  // Function returning undefined by default
  const myFunction = () => {};
  const surname = myFunction();
  console.log(surname);

  // Object doesn't have specified key
  const myObject = { a: 1 };
  console.log(myObject.b);

  /*
   * Null - specified value of nothingness
   */

  let b = null;
  console.log(b);

  // napraw to później
  console.log('Check if renders');
  console.log('dupa dupa');

  // TODO: Function returns string instead of numbers
  // FIXME: Function returns string instead of numbers
  // CHECKME, DOCME, TESTME, PENDING, DISCUSS, REVIEW

  let amount = 24;
  const accBalance = ({ amount, currency }) => {
    const currencySymbols = {
      USD: '🗽',
      PLN: '🧅',
      EUR: '🥨',
      CUSTOM: <img src={'./index.jpg'} />,
    };
    return (
      <>
        {currencySymbols[currency]} {`${amount}`}
      </>
    );
  };
  window.addEventListener('keyup',(e) =>{
    console.log(e.key)
    if (e.key === 'h' || e.key === "ArrowRight") console.log("dzwonię pod 112")
  })
  return (
    <div>
      <p>{accBalance({ currency: 'CUSTOM', amount: 24 })}</p>
    </div>
  );
};
