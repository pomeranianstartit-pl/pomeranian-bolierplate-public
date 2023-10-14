const numbers = [1, 2, 3, 4, 5];

// arrays of objects

const peopleData = [
  { id: 1, name: 'John', age: 35, adress: 'Gdansk' },

  { id: 2, name: 'Matt', age: 25, adress: 'Warszawa' },

  { id: 3, name: 'Tim', age: 15, adress: 'Wroclaw' },

  { id: 4, name: 'Tess', age: 15, adress: 'Wroclaw' },

  { id: 5, name: 'Tess2', age: 17, adress: 'Lodz' },
];

const people = [
  { name: 'John', age: 16 },
  { name: 'Emily', age: 26 },
  { name: 'Peter', age: 36 },
];
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

  const arrA = [1, 2, 3, 4, 5, 13, 13];

  const arrB = [3, 5, 7, 9, 13, 16, 17];

  function SameNumbers(arr1, arr2) {
    const arrResult = [];

    for (const element of arr1) {
      if (arr2.includes(element)) {
        arrResult.push(element);
      }
    }

    const uniqueVal = new Set(arrResult);

    return [...uniqueVal];
  }

  const commonArray = SameNumbers(arrA, arrB);

  console.log('commonArray below:');

  console.log(commonArray);
  // napisz funkcję, która liczy średnią z liczb w tablicy

  // averageFromArray([1, 2, 3, 4, 5, 6]) => 3.5

  const averageFromArrayV1 = (arr) => {
    let sum = 0;

    for (const element of arr) {
      sum += element;
    }

    return sum / arr.length;
  };

  const averageFromArrayV2 = (arr) => {
    return arr.reduce((acc, curr) => acc + curr) / arr.length;
  };

  console.log(averageFromArrayV1([1, 2, 3, 4, 5, 6]));

  console.log(averageFromArrayV2([1, 2, 3, 4, 5, 6]));
  // odwrócenie tablicy
  const averageFromArryaV3 = (arr) => {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      const valueAtIndex = arr[i];
      reversedArray.push(valueAtIndex);
    }
    return reversedArray;
  };
  //druga metoda prostsza
  const reversedArray = (arr) => {
    return arr.reverse();
  };
  console.log(averageFromArryaV3([1, 2, 3, 4, 5, 6]));
  console.log(reversedArray([1, 2, 3, 4, 5, 6]));
  // wywolania samych imion bez wieku z tablicy
  const peopleNames = people.map((name) => name.name);
  console.log('people names', peopleNames);

  return (
    //BEM CSS methodology

    <div className="container--loops">
      <p>Petle (for, while):</p>

      {}
    </div>
  );
};
