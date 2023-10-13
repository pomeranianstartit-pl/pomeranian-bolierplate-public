const peopleData = [
  { id: 1, name: 'John', age: 35, adress: 'Gdansk' },
  { id: 2, name: 'Matt', age: 25, adress: 'Warszawa' },
  { id: 3, name: 'Tim', age: 15, adress: 'Wroclaw' },
  { id: 4, name: 'Tess', age: 15, adress: 'Wroclaw' },
  { id: 5, name: 'Tess2', age: 17, adress: 'Lodz' },
];
const numbers = [1, 2, 3, 4, 5];
const liczby1 = [1, 3, 5, 7, 9];
const liczby2 = [1, 2, 3, 6, 7, 9];

export function Loops() {
  //for loop with break and continue
  for (let counter = 0; counter < 5; counter++) {
    console.log(counter); // 0, 1, 2, 3, 4

    if (counter === 2) {
      continue; // Przechodzi do następnej iteracji, pomijając resztę instrukcji w bieżącej iteracji.
    }

    if (counter === 4) {
      break; // Przerywa pętlę, gdy i osiąga wartość 4.
    }
  }

  //while loop
  let newCounter = 0;
  while (newCounter < 5) {
    console.log(newCounter);
    newCounter++;
  }

  //for of loop
  for (const number of numbers) {
    console.log('for of loop number', number);
  }

  //for in loop

  const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  };

  for (const key in person) {
    console.log(`${key} dsdsad : ${person[key]}`);
  }

  //   ZADANIE: napisz funkcję, która przyjmuje dwie tablice i zwraca nową tablicę, która zawiera tylko elementy, które występują w obu tablicach sameNumbers([1, 2, 3, 4, 5], [3, 5, 7, 9]) => [3, 5]
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

  const Values = sameNumbers(firstArray, secondArray);
  console.log('sameNumbersArray', Values);
  // ////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    //BEM CSS methodology
    <div className="container--loops">
      <p>Petle (for, while):</p>
      {}
    </div>
  );
}