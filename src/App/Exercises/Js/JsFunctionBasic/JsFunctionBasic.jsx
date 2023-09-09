import './styles.css';
import { useState } from 'react';
// ---------- rodzaje funcji

// named functions
function sum(first, second) {
  console.log('inside sum func:', first, second);
  return first + second;
}

console.log('przyklad named function:', sum(2, 3));
// funkcja anonimowa
// function (first, second) {
//   return first + second
// }
// przykład zastosowania
const result = [1, 5, 3].map(function (item) {
  return item * 2;
});
console.log('przykład funkcja anonimowa:', result);

// funkcja strzałkowa
// (liczba) => { return liczba + 5; }
// (liczba) => liczba + 5
const dodaj = (licz1, licz2) => licz1 + licz2;
// przykłady:
const result2 = [1, 5, 3].map((item) => {
  return item * 2;
});
console.log('przykład 1 funkcja strzałkowa:', result2);
// przykład 2:
const result3 = [1, 5, 3].map((item) => item * 2);
console.log('przykład 2 funkcja strzałkowa:', result3);
// przykład 3:
console.log('przykład 3', dodaj(10, 5));

// --------- Liczba parametrów
console.log(
  'parametry chciałem 15 + 15 ale się pomyliłem z przecinkami',
  dodaj(15, 1, 5)
);
console.log('za mało parametrów', sum('Helo-'));

// --- return(s)
let abc;
console.log('abc', abc);
const nicNieZwraca = () => {
  console.log('nic nie zwrócę');
  // return 'zwracam coś'
};
console.log('nicNieZwraca: ', nicNieZwraca());
// patrz przykłady powyżej
//.. oraz
// można zwrócić wszystkie typy zmiennych;
// jak zwrócić obiekt w arrow function;
const obiekt = {
  imie: 'Artur',
  city: 'London',
};
const zwracaObiekt = () => 'hello';
const zwracaObiekt2 = () => {
  return 'hello';
};
const zwracaObiekt3 = () => ({ hello: 'hello' });
const zwracaObiekt4 = () => {
  /// coć
  // do something else
  // ...
  return { hello: 'hello' };
};
console.log(zwracaObiekt4());

// ---- rekurencja

// addNumbersTo(1) = 1
//    1 setp addNumbersTo(1) => return 1
// addNumbersTo(2) = 1 + 2
//    1 step addNumbersTo => return 2 + addNumbersTo(1)
//    2 setp addNumbersTo(1) => return 1
//    return 2 + 1
// addNumbersTo(3) = 1 + 2 + 3 = 6
//    1 step addNumbersTo(3) => return 3 + addNumbersTo(2)
//    2 step addNumbersTo(2) => return 2 + addNumbersTo(1)
//    3 setp addNumbersTo(1) => return 1
//    return 2 + 1
const addNumbersTo = (value) => {
  if (value === 1) {
    return 1;
  } else {
    return value + addNumbersTo(value - 1);
  }
};
console.time('timer-rekurencja');
console.log('addNumbersTo(3)', addNumbersTo(1000));
console.timeEnd('timer-rekurencja');

// bez rekurencji, powtórka z [].reduce
const addNumbersToReduce = (value) =>
  Array(value)
    .fill(0)
    .reduce((prev, _, index) => prev + index + 1, 0);
console.time('timer-reduce');
console.log('addNumbersToReduce:', addNumbersToReduce(10000));
console.timeEnd('timer-reduce');

// tree structure
// scrapping/ parsing/crawling
const dzialFirmy = {
  name: 'XYZ',
  manager: 'Anna',
  children: [
    {
      name: 'Super dzial',
      manager: 'Piotr',
    },
    {
      name: 'RTY',
      manager: 'Adam',
      children: [
        {
          name: 'URT',
          manager: 'Paweł',
        },
      ],
    },
  ],
};

// -------- function arguments
const multiSumSum = (multi, val1, val2) => {
  return multi * (val1 + val2);
};
console.log('multiSumSum:', multiSumSum(2, 1, 1));
console.log('multiSumSum:', multiSumSum(...[2, 1, 1]));
console.log('multiSumSum:', multiSumSum(2, ...[1, 1]));

const multiSumSumMore = (multi, val1, val2, ...args) => {
  const sumArgs = args.reduce((prev, curr) => prev + curr, 0);
  return multi * (val1 + val2 + sumArgs);
};
console.log('multiSumSumMore:', multiSumSumMore(2, 1, 1));
console.log('multiSumSumMore:', multiSumSumMore(2, 1, 1, 1));
console.log('multiSumSumMore:', multiSumSumMore(2, 1, 1, 1, 2));
console.log('multiSumSumMore:', multiSumSumMore(2, 1, 1, 1, 2, 3, 2, 2));
const dane = [1, 1, 1, 2, 3, 2, 2];
console.log('multiSumSumMore:', multiSumSumMore(2, ...dane));
const multiSumSumMoreV2 = (multi, ...args) => {
  const sumArgs = args.reduce((prev, curr) => prev + curr, 0);
  return multi * sumArgs;
};
console.log('multiSumSumMoreV2:', multiSumSumMoreV2(2, 1, 1, 2));

function multiSumSumNoArgs() {
  const [, val1, val2] = arguments;
  const multi = arguments[0];
  return multi * (val1 + val2);
}
// const multiSumSumNoArgsArrow = () => {
//   const [, val1, val2] = arguments;
//   const multi = arguments[0];
//   return multi * (val1 + val2);
// }
console.log('multiSumSumNoArgs:', multiSumSumNoArgs(2, 1, 1));

// ---------- default arguments
const multiplyAdd = (val1, val2, addMe = 0) => val1 * val2 + addMe;
console.log('multiply', multiplyAdd(2, 2));
console.log('multiply', multiplyAdd(2, 2, 10));

// // ------- referencaj vs value && passing arguments to functions
// console.log('liczba', 3);
// const tekst = 'Hello'; // wartość
// console.log('tekst', tekst);
// const obiekt1 = { name: 'Adam' }; // adres
// console.log('obiekt', obiekt1);
// let tekst2 = tekst;
// console.log(
//   'wynik porównania wartości:',
//   tekst === tekst2 && tekst === 'Hello'
// );
// console.log('wynik porównania referencji: ', obiekt1 === { name: 'Adam' });
// const obiekt0 = { name: 'Adam' };
// console.log('wynik porównania referencji: ', obiekt1 === obiekt0);
// /// przykłady modyfikacji
// tekst2 = 'Bey';
// console.log('warość, po zmianie:', tekst2 === tekst, tekst2, tekst);
// let obiek2 = obiekt1;
// console.log('porównanie adresów/referencji:', obiekt1 === obiek2);
// obiek2.name = 'Paweł';
// console.log('po zmianie nadal to samo:', obiekt1 === obiek2);
// console.log('obiekt1: ', obiekt1);
// const tablica1 = [];
// const tablica2 = [];
// console.log(tablica1 === tablica2);

// ------- referencaj vs value && passing arguments to functions
console.log('liczba', 3);
const tekst = 'Hello'; // wartość
console.log('tekst', tekst);
const obiekt1 = { name: 'Adam' }; // adres
console.log('obiekt', obiekt1);
let tekst2 = tekst;
console.log(
  'wynik porównania wartości:',
  tekst === tekst2 && tekst === 'Hello'
);
console.log('wynik porównania referencji: ', obiekt1 === { name: 'Adam' });
const obiekt0 = { name: 'Adam' };
console.log('wynik porównania referencji: ', obiekt1 === obiekt0);
/// przykłady modyfikacji
tekst2 = 'Bey';
console.log('warość, po zmianie:', tekst2 === tekst, tekst2, tekst);
let obiek2 = obiekt1;
console.log('porównanie adresów/referencji:', obiekt1 === obiek2);
obiek2.name = 'Paweł';
console.log('po zmianie nadal to samo:', obiekt1 === obiek2);
console.log('obiekt1: ', obiekt1);
const tablica1 = [];
const tablica2 = [];
console.log(tablica1 === tablica2);

const razyDwa = (valueObj) => {
  valueObj.value = valueObj.value * 2;
  return valueObj.value;
};

let wartosc = { value: 2 };
console.log(wartosc);
console.log('razyDwa:', razyDwa(wartosc));
console.log(wartosc);

export const JsFunctionBasic = () => {
  const [items, setItems] = useState(['hello', 'bey']);
  const handleOnClick = () => setItems([...items, 'Bey']);
  return (
    <div>
      <h1>Funkcje</h1>
      <h2>Rodzaje funkcji</h2>
      <h2>Liczba parametrów</h2>
      <h2>return(s)</h2>
      <h2>rekurencja</h2>
      <h2>adv. argumenty/parametry</h2>
      <h2>default arguments</h2>
      <h2>referencaj vs value && passing arguments to functions</h2>
      <div>
        <button onClick={handleOnClick}>Dodaj element do tablicy</button>
      </div>
      <div>
        {items.map((item) => (
          <span style={{ margin: '1rem' }}>{item}</span>
        ))}
      </div>
    </div>
  );
};
