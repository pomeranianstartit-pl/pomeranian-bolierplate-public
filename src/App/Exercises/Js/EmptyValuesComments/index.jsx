import React from 'react';

const Exercise = () => {
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
  // FIXME: Fix me ASAP
  // CHECKME, DOCME, TESTME, PENDING, DISCUSS, REVIEW

  const accBalance = ({ amount, currency }) => {
    const currencySymbols = {
      USD: '$',
      PLN: 'zł',
      EUR: '€',
    };
    return (
      <>
        {currencySymbols[currency]} {`${amount}`}
      </>
    );
  };
  return (
    <div>
      <p>{accBalance({ amount: 24, currency: 'EUR' })}</p>
    </div>
  );

  const symbols = [];

  window.addEventListener('keydown', (e) => {
    symbols.push(e.key);
    console.log(symbols);
  });

  'Łukasz'.localeCompare('Łukasz');
  'Österreich'.localeCompare('Zealand');
  'Österreich'.localeCompare('New Zealand');
  const users = ['Łuaksz', 'Adam', 'John'];
  let sorted = users.sort();
  sorted = users.sort((a, b) => a.localeCompare(b));
  users.push('łukasz');
  users.push('a');
  users.push('A');
  console.log(users);
  sorted = users.sort((a, b) => a.localeCompare(b));
  console.log(sorted);

  return (
    <div>
      <p>
        <input type="text" name="" id="" />
        <input type="password" name="" id="" />
      </p>
    </div>
  );
};
export default Exercise;
