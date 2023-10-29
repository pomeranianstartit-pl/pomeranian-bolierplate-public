import '../styles.css';

const numbers = [1, 2, 3, 4, 5];

// arrays of objects
// const peopleData = [
//   { id: 1, name: 'John', age: 35, adress: 'Gdansk' },
//   { id: 2, name: 'Matt', age: 25, adress: 'Warszawa' },
//   { id: 3, name: 'Tim', age: 15, adress: 'Wroclaw' },
//   { id: 4, name: 'Tess', age: 15, adress: 'Wroclaw' },
//   { id: 5, name: 'Tess2', age: 17, adress: 'Lodz' },
// ];

//named export
export const Loops = () => {
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
  // ćwiczenie 1 wypisz te same liczby z dwóch tablic
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

  // ćwiczenie 1 inna metoda
  const SameNumbersV2 = (firstArray, secondArray) => {
    return firstArray.filter((element) => secondArray.includes(element));
  };
  console.log(
    'Samenumbers v2',
    SameNumbersV2([1, 2, 5], [2, 3, 4, 5, 6, 7, 8, 9, 10])
  );

  // ćwiczenie 2 napisz funkcję, która liczy srednią z liczb w tablicy
  // averageFromArray([1, 2, 3, 4, 5, 6]) => 3.5
  // 1. sposób chat GPT
  function obliczSrednia(averageFromArray) {
    if (averageFromArray.length === 0) {
      return 0;
    }
    const suma = averageFromArray.reduce((a, b) => a + b, 0);
    return suma / averageFromArray.length;
  }
  const averageFromArray = [1, 2, 3, 4, 5, 6];
  const srednia = obliczSrednia(averageFromArray);
  console.log('Średnia:', srednia);

  // sposób 2
  const averageFromArrayV1 = (arr) => {
    let sum = 0;
    for (const element of arr) {
      sum += element;
    }
    return sum / arr.length;
  };
  // sposob 3
  const averageFromArrayV2 = (arr) => {
    return arr.reduce((acc, curr) => acc + curr) / arr.length;
  };
  console.log(averageFromArrayV1([1, 2, 3, 4, 5, 6]));
  console.log(averageFromArrayV2([1, 2, 3, 4, 5, 6]));

  // ćwiczenie 3 napisz funkcję, która przyjmuje tablicę liczb i zwraca tablicę zawierającą te same liczby, ale w
  // odwróconej kolejności reverseFun([1, 2, 3, 4, 5]) => [5, 4, 3, 2, 1]
  // const reversedArray = (arr) => {return arr.reverse();}; - inna deklaracja funkcji

  function odwrocTablice(reverseFun) {
    return reverseFun.reverse();
  }
  const reverseFun = [1, 2, 3, 4, 5];
  const reversArray = odwrocTablice(reverseFun);
  console.log('Odwrocona tablica:', reversArray);

  //ćwiczenie 4 napisz funkcję, która przyjmuje tablicę obiektów, gdzie każdy obiekt reprezentuje osobę z imieniem i
  // wiekiem, i zwraca tablicę z samymi imionami osób getNames(people) => ["John", "Emily", "Peter"]
  const people = [
    { name: 'John', age: 16 },
    { name: 'Emily', age: 26 },
    { name: 'Peter', age: 36 },
  ];

  const NamesArray = people.map((person) => person.name);
  console.log('names', NamesArray);

  return (
    //BEM CSS methodology
    <div className="container--loops">
      <p>Petle (for, while):</p>
      {}
    </div>
  );
};
