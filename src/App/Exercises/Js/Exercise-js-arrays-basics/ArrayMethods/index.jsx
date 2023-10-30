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

const ARRAY1 = [1, 2, 3, 4, 5, 6];
const ARRAY2 = [5, 2, 1, 4];
const PEOPLE = [
  { name: 'John', age: 30 },
  { name: 'Emily', age: 25 },
  { name: 'Peter', age: 35 },
];

export const ArrayMethods = () => {
  // Zadanie 1 - mona uyc metod: .filter() .include()
  function getCommonElements(arr1, arr2) {
    if (arr1.length < 1 || arr2.length < 1) {
      return 'Zostały wprowadzone złe tablice';
    }
    const result = arr1.filter((element) => arr2.includes(element));

    return `Rezultat to: ${result}`; // [1, 2, 4, 5]
  }

  // Mona uyć metod: .reduce () i .legth
  function averageFromArray(arr) {
    if (arr.length === 0) {
      return 0; // gdy tablica jest pusta to srednia wynosi 0.
    }
    // do obliczenia suma wszystkich elementow:
    const sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    // to jest obliczanie średniej:
    const result = sum / arr.length;

    return `Rezultat to: ${result}`;
  }

  function getReversedArray(arr) {
    // metoda reverse() do odwrócenia kolejności elementow w tablicy
    const result = [...arr].reverse();

    return `Rezultat to: ${result}`; // reversedArray;
  }

  function getNames(people) {
    // Użyj metody map() do przekształcenia tablicy obiektów w tablicę samych imion
    const result = people.map((person) => person.name);

    return `Rezultat to: ${result}`;
  }

  return (
    <ol>
      <li>{getCommonElements(ARRAY1, ARRAY2)}</li>
      <li>{averageFromArray(ARRAY1)}</li>
      <li>{getReversedArray(ARRAY1)}</li>
      <li>{getNames(PEOPLE)}</li>
    </ol>
  );
};
