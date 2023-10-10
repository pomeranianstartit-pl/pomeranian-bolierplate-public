/* 
1. Napisz funkcje ktora przyjmuje dwie tablice i zwraca nowa tablice, ktora zawiera tylko elementy, ktore wystepuja w obu tablicach. 
Przykład: getCommonElements([1, 2, 3, 4, 5], [3, 5, 7, 9]) => [3, 5]
2. Napisz funkcje `averageFromArray` która liczy średnią z liczb w tablicy. Przykład: getAverageNumber([1, 2, 3, 4, 5, 6]) => 3.5
3. Napisz funkcję, która przyjmuje tablicę liczb i zwraca tablicę zawierającą te same liczby, ale w odwróconej kolejności. 
Przykład: getReversedArray([1, 2, 3, 4, 5]) => [5, 4, 3, 2, 1]
4. Napisz funkcję, która przyjmuje tablicę obiektów, gdzie każdy obiekt reprezentuje osobę z imieniem i wiekiem, i zwraca tablicę z samymi imionami osób.
Przykład: getNames(people) => ["John", "Emily", "Peter"]
*/

const ARRAY1 = [5, 2, 1, 4, 6, 11, 244];
const ARRAY2 = [5, 2, 1, 4, 6, 88, 122];
const PEOPLE = [
  { name: 'John', age: 30 },
  { name: 'Emily', age: 25 },
  { name: 'Peter', age: 35 },
];

export const ArrayMethods = () => {
  // Mozna uzyc metod: .filter() .includes()
  function getCommonElements(arr1, arr2) {
    if (arr1.length < 1 || arr2.length < 1) {
      return 'Zostały wprowadzone złe tablice';
    }
    const result = arr1.filter((el) => arr2.includes(el));

    return `Rezultat to: ${result}`;
  }

  // Mozna uzyc metod: .reduce(), .length
  function averageFromArray(arr) {
    if (arr.length === 0) {
      return 'Rezultat: 0';
    }
    const sum = arr.reduce((acc, currVal) => acc + currVal, 0);
    const elementAmount = arr.length;
    const result = sum / elementAmount;

    return `Rezultat: ${result}`;
  }

  // reverse() mutuje oryginalną tablice, a toReversed() nie mutuje
  function getReversedArray(arr) {
    const result = [...arr].reverse();

    return `Rezultat to: ${result}`;
  }

  function getNames(arr) {
    const result = arr.map((person) => person.name);

    return `Rezultat to: ${result}`;
  }

  return (
    <ol>
      <li>{getCommonElements([], ARRAY2)}</li>
      <li>{averageFromArray(ARRAY1)}</li>
      <li>{getReversedArray(ARRAY1)}</li>
      <li>{getNames(PEOPLE)}</li>
    </ol>
  );
};
