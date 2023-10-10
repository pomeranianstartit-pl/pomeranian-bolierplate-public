import React from 'react';

/* 
1. Napisz funkcje ktora przyjmuje dwie tablice i zwraca nowa tablice, ktora zawiera tylko elementy, ktore wystepuja w obu tablicach.
Przykład: getCommonElements([1, 2, 3, 4, 5], [3, 5, 7, 9]) => [3, 5]
2. Napisz funkcje `averageFromArray` która liczy średnią z liczb w tablicy. Przykład: getAverageNumber([1, 2, 3, 4, 5, 6]) => 3.5
3. Napisz funkcję, która przyjmuje tablicę liczb i zwraca tablicę zawierającą te same liczby, ale w
odwróconej kolejności. 
Przykład: getReversedArray([1, 2, 3, 4, 5]) => [5, 4, 3, 2, 1]
4. Napisz funkcję, która przyjmuje tablicę obiektów, gdzie każdy obiekt reprezentuje osobę z imieniem i wiekiem, i zwraca tablicę z samymi imionami osób.
Przykład: getNames(people) => ["John", "Emily", "Peter"]
*/

const ARRAY1 = [1, 2, 3, 4, 5];
const ARRAY2 = [3, 5, 7, 9];
const ARRAY3 = [1, 2, 3, 4, 5, 6];
const PEOPLE = [
  { name: 'John', age: 30 },
  { name: 'Emily', age: 25 },
  { name: 'Peter', age: 35 },
];

export const ArrayMethods = () => {
  function getCommonElements(arr1, arr2) {
    const result = arr1.filter((el) => arr2.includes(el));
    return `Rezultat to: ${result}`;
  }

  function averageFromArray(arr3) {
    const sum = arr3.reduce((acc, currVal) => acc + currVal, 0);
    const result = sum / arr3.length;
    return `Rezultat to: ${result}`;
  }

  function reverseArray(arr3) {
    const reversed = [...arr3].reverse();
    const result = reversed;
    return `Rezultat to: ${result}`;
  }

  function getNames(people) {
    const result = people.map((person) => person.name);
    return `Rezultat to: ${result}`;
  }

  return (
    <ol>
      <li>{getCommonElements(ARRAY1, ARRAY2)}</li>
      <li>{averageFromArray(ARRAY3)}</li>
      <li>{reverseArray(ARRAY3)}</li>
      <li>{getNames(PEOPLE)}</li>
    </ol>
  );
};
