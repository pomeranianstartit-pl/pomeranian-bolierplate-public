const Arr1 = [1, 2, 3, 4, 5, 6];
const Arr2 = [2, 4, 5, 7, 9];
const peepsData = [
  { name: 'Janek', age: 20 },
  { name: 'Emilia', age: 25 },
  { name: 'Piotr', age: 38 },
];

export function ArrayMethods() {
  function CommonNumbers(Arr1, Arr2) {
    const result = Arr1.filter((element) => Arr2.includes(element));
    return `Rezultat to: ${result}`;
  }

  function averageFromArray(Arr1) {
    if (Arr1.lenght === 0) {
      return 'Średnia to: 0';
    }
    const sum = Arr1.reduce((acc, currVal) => acc + currVal, 0);
    const elementAmount = Arr1.lenght;
    const result2 = sum / elementAmount;

    return `Średnia to: ${result2}`;
  }

  function peepsNames(peepsData) {
    const result = peepsData.map((person) => person.name);
    return `Imiona to: ${result} `;
  }

  return (
    <div className="ArrayMethods">
      <ol>
        <li>{CommonNumbers(Arr1, Arr2)}</li>
        <li>{averageFromArray(Arr1)}</li>
        <li>{peepsNames(peepsData)}</li>
      </ol>
    </div>
  );
}
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
