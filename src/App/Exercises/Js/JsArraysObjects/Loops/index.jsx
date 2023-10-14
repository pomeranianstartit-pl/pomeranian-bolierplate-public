const peopleData = [
  { id: 1, name: 'John', age: 35, adress: 'Gdańsk' },
  { id: 2, name: 'Matt', age: 25, adress: 'Warszawa' },
  { id: 3, name: 'Tim', age: 15, adress: 'Wrocław' },
  { id: 4, name: 'Tess', age: 15, adress: 'Wrocław' },
];
const numbers = [1, 2, 3, 4, 5];

export function Loops() {
  for (let counter = 0; counter < 5; counter++) {
    console.log(counter); //0,1,2,3,4
  }

  let newCounter = 0;
  while (newCounter < 5) {
    console.log(newCounter);
  }

  //   napisz funkcję, która przyjmuje dwie tablice i zwraca nową tablicę, która zawiera tylko elementy, które
  // występują w obu tablicach
  // sameNumbers([1, 2, 3, 4, 5], [3, 5, 7, 9]) => [3, 5]

  const sameNumbers = (firstArray, secondArray) => {
    // Utwórz pustą tablicę do odkladania wspolnych elementow
    const arrayAccumulator = [];

    for (const element of firstArray) {
      // Jeśli element istnieje w drugiej tablicy (funcka natywna includes() )
      if (secondArray.includes(element)) {
        // zmutuj dodaj wspolny element do tablicu arrayAccumulator
        arrayAccumulator.push(element);
      }
    }

    // zwroc tylko unikalne wartosci dzieki wykorzystaniu new Set()
    const uniqueValues = new Set(arrayAccumulator);
    // transformuj kolekcje danych (nowy specyficzny typ złożony) do zwykłej tablicy
    return [...uniqueValues];
  };

  const firstArray = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8];
  const secondArray = [13, 14, 15, 3, 3, 4, 5, 6, 10, 12];

  sameNumbers(firstArray, secondArray);

  return (
    <div className="container--loops">
      <p>Pętle (for,while)</p>
      <ul></ul>
    </div>
  );
}
