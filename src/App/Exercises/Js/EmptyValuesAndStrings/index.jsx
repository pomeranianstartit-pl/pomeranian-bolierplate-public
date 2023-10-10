/* eslint-disable no-new-wrappers */

/* eslint-disable eqeqeq */

import React from 'react';

/* Typy null i undefined

1. null i undefiend oba oznaczaja ze zmienne nie mają wartości

2. jezeli porownamy wartosci obu to podwojne porownanie zwroci true bo oba mowia ze nie maja wartosci

3. jezeli porownamy wartosci obu to potrojnie porownanie zwroci false bo sprawdzany jest dodatkowo typ

*/

/* Deklaracja stringów

1. singleQuote - const str1 = 'Hello I'm single quote'

2. doubleQuote - const str2 = "Hello I'm double quote"

3. template strin - const str3 = `Hello I'm "template string"`

4. new String - const str4 = new String('Hello I'm new String')

*/

export const EmptyValuesAndStrings = () => {
  let a; // undefined

  const b = null; // null

  const str1 = 'Hello I am single quote';

  const str2 = "Hello I'm double quote";

  const str3 = `Hello I'm "template string" ${b}`;

  const str4 = new String(`Hello I'm new String`);

  console.log(a, b);

  return (
    <>
      <h3>undefined and null</h3>

      <ol>
        <li>null == undefined - {String(null == undefined)}</li>

        <li>null === undefined - {String(null === undefined)}</li>

        <li>undefined == true - {String(undefined == true)}</li>

        <li>undefined === true - {String(undefined === true)}</li>

        <li>null == true - {String(null == true)}</li>

        <li>null === true - {String(null === true)}</li>

        <li>{b ? 'null - jestem true' : 'null - jestem false'}</li>

        <li>
          {undefined ? 'undefined - jestem true' : 'undefined - jestem false'}
        </li>

        <li>let a; - {String(a)}</li>

        <li>const b = null - {String(b)}</li>
      </ol>

      <h3>string</h3>

      <ol>
        <li>{str1}</li>

        <li>{str2}</li>

        <li>{str3}</li>

        <li>{str4}</li>
      </ol>
    </>
  );
};

/*
1. continue - pomija iteracje, ale pętla wykonuje się dalej
2. break - przerywa pętlę
3. find - zwraca na pierwsza wartość, która spełnia warunek
4. sort, toSorted - sortuje tablice (sort mutuje oryginalna tablice, a toSorted nie mutuje)
5. join - zwraca string złączony na podstawie parametru, kazdy element w tablic
6. reduce - akumuluje wynik i zwraca go jezeli cala petla sie wykona
*/

const NUMBERS = [1, 3, 66, 9, 155, 2];
const STRINGS = ['Apple', 'Banana', 'Orange'];

export const ArrayBasics = () => {
  console.log('-----');
  // Continue
  //   for (let i = 5; i > 0; i--) {
  //     if (i > 3) {
  //       continue;
  //     }
  //     console.log(i);
  //   }

  // Break
  //   for (let i = 0; i <= 5; i++) {
  //     if (i === 3) {
  //       break;
  //     }
  //     console.log(i);
  //   }

  //   for (let i = 0; i < NUMBERS.length; i++) {
  //     const num = NUMBERS[i];
  //     if (num % 3 === 0) {
  //       console.log(num);
  //       continue;
  //     }
  //   }

  //   const firstEven = NUMBERS.find((num) => num % 2 === 0);
  //   console.log(firstEven);

  //   const sortedArray = [...NUMBERS].sort((a, b) => a - b);
  //   console.log(sortedArray);
  //   console.log(NUMBERS);

  const stringFromArray = STRINGS.join('-');
  console.log(stringFromArray);

  const sum = NUMBERS.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(sum);

  return <div>ArrayBasics</div>;
};
