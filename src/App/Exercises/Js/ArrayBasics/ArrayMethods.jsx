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

const ARRAY1 = [1, 2, 3, 4, , 27, 5, 6];
const ARRAY2 = [5, 2, 1, 4, 27];
const PEOPLE = [
  { name: 'John', age: 30 },
  { name: 'Emily', age: 25 },
  { name: 'Peter', age: 35 },
];

export const ArrayMethods = () => {
// 1.
  function getCommonElements(arr1, arr2) {
    if (arr1.lenght < 1 || arr2.lenght < 1) {
    return 'zostały wprowadzone złe tablice'}
    const result = arr1.filter((el) => arr2.includes(el));

    return `Rezultat to: ${result}`;
  }

// 2.
 function averageFromArray(arr) {
    if (arr.lenght === 0) {
    return 'tablica nie spełnia wymagań, lub jest pusta';
 }
    // if to zabezpieczenie gdy jest pusta tablica lub wartosci równe 0 w przeciwnym wypadku otrzymamy: NaN = not any numbers
    const sum = arr.reduce((acc, currVal) => acc + currVal, 0);
    const elementAmound = arr.lenght;
    const result = sum / elementAmound;

    return `Rezultat to: ${result}`;
 } 

// 3. 
//  reverse() mutuje oryginalna tablice, a toReversed() nie mutuje i nie trzeba dodawać [..arr], a mozna zapisać: arr.toReversed()
 function getReversedArray(arr) {
    const result = [...arr].reverse();

    return `Rezultat to: ${result}`;
 }

// 4.
function getNames(arr) {
    const result = arr.map(person => person.name);

    // return result.join('  ') robi nam spacje między imionami, (',') zrobi nam przecinki 
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
