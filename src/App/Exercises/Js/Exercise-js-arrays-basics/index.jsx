import './styles.css';

const tablicaWieluTypow = [
  true,
  1,
  'Cześć to Rock In IT',
  { maciej: 'dojlido' },
];

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7];
const arrayToPoP = ['Marta', 'Kasia', 'Bartek', 'Łukasz'];
const arrayOfNumbersOne = [1, 2, 3];
const arrayOfNumbersTwo = [4, 5, 6];

// FUNKCJE NA POTRZEBY TESTÓW
export function spreadTwoArrays() {
  const a = [1, 2, 3];
  const b = [4, 5, 6];

  return [...a, ...b];
}

export function whileLoop() {
  let liczba = 0;

  while (liczba <= 5) {
    console.log(liczba);
    liczba++;
  }
}

export function Exercise() {
  // let tablicaLiczb = [1, 2, 3, 4, 5];
  // let usunietyElement = tablicaLiczb.shift();

  // function getValueByIndex(array) {
  //   return console.log(array[0]);
  // }

  // function deleteFirstElement(arg) {
  //   console.log(arg.shift());
  //   console.log(arrayOfNumbers);
  // }

  // function popTest(popArray) {
  //   console.log('popTest', popArray);
  //   console.log('popTest', popArray.pop());
  //   console.log(popArray);
  // }

  // function pushElementToArray(arrayToPush) {
  //   console.log('pushElementToArray', arrayToPush.push('Cześć'));
  //   console.log(tablicaWieluTypow);
  // }

  // function concatArrays(arrayNumberOne, arrayNumberTwo) {
  //   const newArray = [].concat(arrayNumberOne, arrayNumberTwo);

  //   return console.log('concarArrays', newArray);
  // }

  // function spreadTwoArrays() {
  //   const a = [1, 2, 3];
  //   const b = [4, 5, 6];

  //   return console.log([...a, ...b]);
  // }

  // spreadTwoArrays();

  // function forLoop() {
  //   for (let count = 1; count < 5; count++) {
  //     console.log(count);
  //   }
  // }
  // forLoop();

  // function whileLoop() {
  //   let liczba = 0;

  //   while (liczba <= 5) {
  //     console.log(liczba);
  //     liczba++;
  //   }
  // }

  // whileLoop();

  // function whileLoopWithBreak() {
  //   let whileCount = 0;

  //   while (whileCount <= 10) {
  //     console.log('whileLoopWithBreak', whileCount);

  //     if (whileCount === 5) {
  //       break;
  //     }
  //   }
  // }

  // whileLoopWithBreak();

  return (
    <div>
      <p>Działania na tablicach</p>
      {/* {getValueByIndex(tablicaWieluTypow)} */}
      {/* {deleteFirstElement(arrayOfNumbers)} */}
      {/* {popTest(arrayToPoP)} */}
      {/* {pushElementToArray(tablicaWieluTypow)} */}
      {/* {concatArrays(arrayOfNumbersOne, arrayOfNumbersTwo)} */}
    </div>
  );
}
