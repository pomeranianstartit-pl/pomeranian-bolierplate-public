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

const ARRAY1 = [1, 2, 3, 4, 5, 6, 88];
const ARRAY2 = [5, 2, 1, 4, 88];
const PEOPLE = [
  { name: 'John', age: 30 },
  { name: 'Emily', age: 25 },
  { name: 'Peter', age: 35 },
];

export const ArrayMethods = () => {
  // początek
  /*function getCommonElements(arr1, arr2) {
    const result = [1, 2, 4, 5];
    return `Rezultat to: ${result}`;
  }*/

  // #1 mozna uzyc metod: .filter() .includes()
  /*function getCommonElements(arr1, arr2) {
    const result = arr1.filter((el) => arr2.includes(el));
    return `Rezultat to: ${result}`;
  }*/
  function getCommonElements(arr1, arr2) {
    if (arr1.lenght < 1 || arr2.lenght < 1) {
      return 'Zostały wprowadzone złe tablice';
    }
    const result = arr1.filter((el) => arr2.includes(el));
    return `Rezultat to: ${result}`;
  }

  // #2 Mozna uzyc metod: .reduce(), .length
  function averageFromArray(arr) {
    if (arr.lenght === 0) {
      return 'Rezultat: 0';
    }
    const sum = arr.reduce((acc, currVal) => acc + currVal, 0);
    const elementAmount = arr.lenght;
    const result = sum / elementAmount;

    return `Rezultat to: ${result}`;
  }

  // #3 reverse() mutuje oryginalna tablice, a toreversed() nie mutuje
  function getReversedArray(arr) {
    const result = [...arr].reverse();
    console.log(result);

    return `Rezultat to: ${result}`;
  }

  // #4
  function getNames(arr) {
    const result = arr.map((person) => person.name);

    return `Rezultat to: ${result}`;
  }

  /*function sumArray(ARRAY1, ARRAY2) {
    let ARRAY3 = [];
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
      arr3.push((ARRAY1[i] || 0) + (ARRAY2[i] || 0));
    }
    return ARRAY3;
  }*/

  /*function sumArray(ARRAY1, ARRAY2) {
    let ARRAY3 = [];
    for (var i = 0; i < Math.max(arr1.length, arr2.length); i++) {
      arr3.push(ARRAY1[i] + ARRAY2[i]);
      if (arr1.length > arr2.length) {
        arr1.pop();
      }
      if (arr2.length > arr1.length) {
        arr2.pop();
      }
    }
    return ARRAY3;
  }

  console.log(sumArray([1, 2, 3], [1, 2, 3, 4]));

  console.log(sumArray([1, 2, 3], [1, 2, 3, 4]));*/

  return (
    <ol>
      <li>{getCommonElements([], ARRAY2)}</li>
      <li>{averageFromArray(ARRAY1)}</li>
      <li>{getReversedArray(ARRAY1)}</li>
      <li>{getNames(PEOPLE)}</li>
    </ol>
  );
};
