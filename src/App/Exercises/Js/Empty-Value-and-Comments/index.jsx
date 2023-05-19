import './styles.css';
import React from 'react';

const zdanie = 'ala_ma_kota_a_tomek_ma_psa';

let pierwszaL = zdanie.substring(0, 1);
let pierwszaD = pierwszaL.toUpperCase();
let linie = zdanie.replaceAll('_', ' ').substring(1);

const zdaniekoniec = pierwszaD + linie + '.';

//----

let zdanie1 = zdanie.replace('a', 'A');
let zdanie2 = zdanie1.replaceAll('_', ' ');
let zdanie3 = zdanie2.replace('psa', 'psa.');
let zdanie4 = zdanie3.replace('tomek', 'Tomek');

//--------------------------------------------------

let a = '1080';
let b = '1920';
let c = a * b;
let d = c / 1000000;
let e = d + 'mpx';

//----

const px1 = '1080px';
const px2 = '1920px';

const pxCalc = (x, y) => {
  x = parseInt(x);
  y = parseInt(y);
  const totalPx = x * y;

  return String(totalPx) + 'px';
};

//-------------------------------------------------

console.log(typeof 7);

console.log(typeof 'Ala ma kota');

console.log(typeof true);
console.log(typeof false);

console.log(typeof undeclaredVariable);

let liczba = null;
console.log(liczba);

//----hindus ze stack overflow

// let niezdefliczba = (value) => {
//   return !value || !/\S/.test(value) || value === null ? true : false;
// };
// console.log('niezdefiniowana -->' + niezdefliczba(undefined));
// console.log('null -->' + niezdefliczba(null));
// console.log('pusto -->' + niezdefliczba(''));
// console.log('spacja -->' + niezdefliczba(' '));
// console.log('Liczba 7 -->' + niezdefliczba(7));
// console.log('ABC -->' + niezdefliczba(abc));
// console.log('prawda falsz -->' + niezdefliczba(true));

//------------------------------------------------------

export function EmptyValues() {
  return (
    <div>
      <div>{zdanie}</div>
      <div>{zdanie4}</div>
      <div>{zdaniekoniec}</div>
      <div>{e}</div>
      <div>{pxCalc(px1, px2)}</div>
      <hr />
      <br />
      <div>Watch your language</div>
      <form>
        <label>
          <input type="text" name="inputText" />
        </label>
        <button type="submit" onClick="">
          try me
        </button>
      </form>
    </div>
  );
}
