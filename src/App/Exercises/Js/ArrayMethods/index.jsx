import React from 'react';

/*
1. Napisz funkcje ktora przyjmuje dwie tablice i zwraca nowa tablice, ktora zawiera tylko elementy, ktore wystepuja w obu tablicach.
Przykład: getCommonElements([1, 2, 3, 4, 5], [3, 5, 7, 9]) => [3, 5]
2. Napisz funkcje `averageFromArray` która liczy średnią z liczb w tablicy nie używając pętli for i reduce. Przykład: getAverageNumber([1, 2, 3, 4, 5, 6]) => 3.5
3. Napisz funkcję, która przyjmuje tablicę liczb i zwraca tablicę zawierającą te same liczby, ale w
odwróconej kolejności. 
Przykład: getReversedArray([1, 2, 3, 4, 5]) => [5, 4, 3, 2, 1]
4. napisz funkcję, która przyjmuje tablicę obiektów, gdzie każdy obiekt reprezentuje osobę z imieniem i wiekiem, i zwraca tablicę z samymi imionami osób.
Przykład: getNames(people) => ["John", "Emily", "Peter"]
*/

const ARRAY1 = [1, 2, 3, 4, 5, 6];
const ARRAY2 = [5, 2, 1, 4];
const PEOPLE = [
  { name: 'John', age: 30 },
  { name: 'Emily', age: 25 },
  { name: 'Peter', age: 35 },
];

export const ArrayMethods = () => {
  function getCommonElements(arr1, arr2) {
    const result = arr1.filter((element) => arr2.includes(element));

    return `Wspolne elementy to: ${result}`;
  }

  function getAverageNumber(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const result = sum / arr.length;
    return result;
  }

  function getReversedArray(arr) {
    const result = [...arr].reverse();
    return `[${result}]`;
  }

  function getNames(people) {
    const result = people.map((person) => person.name);
    return `Imiona to: ${result}`;
  }

  return (
    <div>
      <ol>
        <li>{getCommonElements(ARRAY1, ARRAY2)}</li>
        <li>{getAverageNumber(ARRAY1)}</li>
        <li>{getReversedArray(ARRAY1)}</li>
        <li>{getNames(PEOPLE)}</li>
      </ol>
    </div>
  );
};
