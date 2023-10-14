const numbers = [1, 2, 3, 4, 5];

// arrays of objects
const peopleData = [
  { id: 1, name: 'John', age: 35, adress: 'Gdansk' },
  { id: 2, name: 'Matt', age: 25, adress: 'Warszawa' },
  { id: 3, name: 'Tim', age: 15, adress: 'Wroclaw' },
  { id: 4, name: 'Tess', age: 15, adress: 'Wroclaw' },
  { id: 5, name: 'Tess2', age: 17, adress: 'Lodz' },
];

//named export
export const LoopsWeek4 = () => {
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

  // --------------------------------
  //   napisz funkcję, która przyjmuje dwie tablice i zwraca nową tablicę, która zawiera tylko elementy, które
  //   występują w obu tablicach
  //   sameNumbers([1, 2, 3, 4, 5], [3, 5, 7, 9]) => [3, 5]

  const sameNumbers = (firstArray, secondArray) => {
    // Utwórz pustą tablicę do odkladania wspolnych elementow
    const arrayAccumulator = [];

    for (const element of firstArray) {
      // Jeśli element istnieje w drugiej tablicy (funkcja natywna includes() )
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

  //--------------------------------------

  const SameNumbersV2 = (arr1, arr2) => {
    return arr1.filter((element) => arr2.includes(element));
  };

  console.log(
    'Same numbers v2',
    SameNumbersV2([1, 2, 5], [2, 3, 4, 5, 6, 7, 8, 9, 10])
  );

  // --------------
  // napisz funkcję, która liczy średnią z liczb w tablicy
  // averageFromArray([1, 2, 3, 4, 5, 6]) => 3.5
  // 1. sposob - loop
  const averageFromArrayV1 = (arr) => {
    let sum = 0;

    for (const element of arr) {
      sum += element;
    }

    return sum / arr.length;
  };

  console.log(averageFromArrayV1([1, 2, 3, 4, 5, 6]));

  // ------------------
  // 2. sposob - reduce

  const averageFromArrayV2 = (arr) => {
    return arr.reduce((acc, curr) => acc + curr) / arr.length;
  };

  console.log(averageFromArrayV2([1, 2, 3, 4, 5, 6]));

  // ----------------------------
  // napisz funkcję, która przyjmuje tablicę liczb i zwraca tablicę zawierającą te same liczby, ale w
  // odwróconej kolejności
  // reverseFun([1, 2, 3, 4, 5]) => [5, 4, 3, 2, 1]

  function reverseFun(arr1) {
    return arr1.reverse();
  }
  console.log(reverseFun([1, 2, 3, 4, 5]));

  // -----------------------
  //   napisz funkcję, która przyjmuje tablicę obiektów, gdzie każdy obiekt reprezentuje osobę z imieniem i
  // wiekiem, i zwraca tablicę z samymi imionami osób
  // people = [{name: 'John', age: 16},{name: 'Emily', age: 26},{name: 'Peter', age: 36},]
  // getNames(people) => ["John", "Emily", "Peter"]

  function getNames(people) {
    const names = people.map((person) => person.name);
    return names;
  }

  console.log(
    getNames([
      { name: 'John', age: 16 },
      { name: 'Emily', age: 26 },
      { name: 'Peter', age: 36 },
    ])
  );

  return (
    //BEM CSS methodology
    <div className="container--loops">
      <p>Petle (for, while):</p>
      {}
    </div>
  );
};
