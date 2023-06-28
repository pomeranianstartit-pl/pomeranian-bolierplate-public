import React from 'react';

export const CastingAndStrings = () => {
  //variable with no assignment
  let name;
  console.log(name);

  //Function returning undefined by default
  const myFunction = () => {};
  const surname = myFunction;
  console.log(surname);

  //Object doesn't have specified key
  const myObject = { a: 1 };
  console.log(myObject.b);

  /*
   *Null-specified value of nothingness
   */
  let b = null;
  console.log(b);

  // Using pressed key to display a message

  window.addEventListener('keydown', (e) => {
    console.log(e.key);
    console.log(e.key === 'H' || e.key === 'h');
  });
  //Comparing Strings and adding new element to an array using push method
  'Łukasz'.localeCompare('Łukasz');
  'Österreich'.localeCompare('Zealand');
  'Österreich'.localeCompare('New Zealand');
  const users = ['Łukasz', 'Adam', 'John'];
  let sorted = users.sort();
  sorted = users.sort((a, b) => a.localeCompare(b));
  users.push('łukasz');
  users.push('a');
  users.push('A');
  console.log(users);
  sorted = users.sort((a, b) => a.localeCompare(b));
  console.log(sorted);

  return <div>Exercises in console</div>;
};
