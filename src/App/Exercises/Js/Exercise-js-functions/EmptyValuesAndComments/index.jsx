import React from 'react';

export function Exercise() {
  /*
   * Undefined -lack of value
   */

  console.log('dupa');

  //variable with no assignment
  const myFunction = () => {};
  let name = myFunction();
  console.log(name);
  // function returning undefined by default
  const myFunction2 = () => {};
  const surname = myFunction2();

  //Object doesn't have specified key
  const myObject = { a: 1 };
  myObject.b = 'name';
  console.log(myObject.b);

  /*
   * Null - specified value of
   */
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
  return (
    <div>
      <p>{accBalance({ currency: 'CUSTOM', amount: 24 })}</p>
    </div>
  );
}

//   return <div>index</div>;
// }
