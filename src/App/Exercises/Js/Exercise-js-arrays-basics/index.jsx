import './styles.css';

const arrayOfMultipleTypes = [
  true,
  1,
  'Cześć Rock In IT',
  { wojciech: 'wysocki' },
];

const array2d = [[]];

const arrayOfNumbers = [1, 2, 3, 4, 5];

const arrayOfNumbersOne = [1, 2, 3];
const arrayOfNumbersTwo = [4, 5, 6];
// `Boolean` = true/false;
// `number` = 1;
// `object` = {maciej:"dojlido"}
// `string` = "Cześć to Rock In It";
// `array` = [true];

export function Exercise() {
  // function getValueByIndex(array) {
  //   return console.log(array[0]);
  // }
  // getValueByIndex(arrayOfMultipleTypes);

  // function shiftElementOfArray(arrayParam) {
  //   return console.log('shiftElementOfArray', arrayParam.shift());
  // }
  // shiftElementOfArray(arrayOfNumbers);

  // function popElementOfArray(arrayParam) {
  //   return console.log('popElementOfArray', arrayParam.pop());
  // }
  // popElementOfArray(arrayOfNumbers);

  // function pushElementToArray(arrayToPush) {
  //   const internalArray = [];
  //   internalArray.push('Cześć, JS jest bardzo intuicyjny...,..');
  //   internalArray.push(2);
  //   return console.log(internalArray);
  // }
  // pushElementToArray(arrayOfMultipleTypes);

  // function concatArrays(arrayOfNumbersOne, arrayOfNumbersTwo) {
  //   const newArray = [].concat(arrayOfNumbersOne, arrayOfNumbersTwo);
  //   return console.log('concatArrays', newArray);
  // }
  // concatArrays(arrayOfNumbersOne, arrayOfNumbersTwo);

  // function spreadTwoArrays() {
  //   const a = [1, 2, 3];
  //   const b = [4, 5, 6];

  //   return console.log('spreadTwoArrays', [...a, ...b]);
  // }
  // spreadTwoArrays();

  // function forLoop() {
  //   for (let count = 0; count < 5; count++) {
  //     console.log(count);
  //   }
  // }
  // forLoop();

  // function whileLoop() {
  //   let whileCount = 0;
  //   while (whileCount <= 5) {
  //     console.log(whileCount);
  //     whileCount++;
  //   }
  // }
  // whileLoop();

  function whileLoopWithBreak() {
    let whileCount = 0;
    while (whileCount <= 10) {
      console.log('whileLoopWithBreak', whileCount);

      if (whileCount === 5) {
        break;
      }

      whileCount++;
    }
  }
  whileLoopWithBreak();

  return (
    <div>
      <p>Działania na tablicach:</p>
      <pre>
        <code>
          {`

          `}
        </code>
      </pre>
    </div>
  );
}
