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
  const arrA = [1, 2, 3, 4, 5, 13, 13,];
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

  return (
    //BEM CSS methodology
    <div className="container--loops">
      <p>Petle (for, while):</p>
      {}
    </div>
  );
};
