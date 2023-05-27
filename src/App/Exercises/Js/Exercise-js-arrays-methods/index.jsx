import './styles.css';

const arrayOfMultipleTypes = [
  true,
  1,
  'Cześć Rock In IT',
  { wojciech: 'wysocki' },
];

export const objectOfMultipleTypes = {
  wojciech: { daneOsobowe: 'niekarany' },
  kursFE: 'react',
  kursFE1: 1,
  kursFE2: true,
  kursFE3: [],
  kursFE4: () => 'Lubie vanilla JS',
};

const array2d = [1, [2]];

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayOfNumbersOne = [1, 2, 3, 4, 5];
const arrayOfNumbersTwo = [3, 5, 7, 9];

export function Exercise() {
  const { kursFE, kursFE2 } = objectOfMultipleTypes;
  const [let1, let2, let3, let4] = arrayOfMultipleTypes;

  // function filterMethod(arrayOfNumbers) {
  //   const greaterThan5 = arrayOfNumbers.filter(function (kot) {
  //     return kot > 5;
  //   });
  //   return console.log('filterMethod', greaterThan5);
  // }
  // filterMethod(arrayOfNumbers);

  // Ticket 1
  // Title: Take this same elements from array
  // Description:
  // Napisz funkcję, która przyjmuje dwie tablice i zwraca nową tablicę, która zawiera tylko elementy, które występują w obu tablicach.

  // function giveCommonElements(arrayOfNumbersOne, arrayOfNumbersTwo) {
  //   const commonElements = [];
  //   for (let i = 0; i < arrayOfNumbersOne.length; i++) {
  //     if (arrayOfNumbersTwo.includes(arrayOfNumbersOne[i])) {
  //       commonElements.push(arrayOfNumbersOne[i]);
  //     }
  //   }
  //   return console.log('giveCommonElements', commonElements);
  // }
  // giveCommonElements(arrayOfNumbersOne, arrayOfNumbersTwo);

  function mergeObjects() {
    const object1 = { foo: 'bar' };
    const object2 = { name: 'Wojciech' };
    const resultOfMerging = { ...object1, ...object2 };

    console.log('mergeObjects', resultOfMerging);
    return resultOfMerging.foo;
  }

  return (
    <div>
      <p>Działania na tablicach:</p>
      {objectOfMultipleTypes.wojciech.daneOsobowe}
      <br />
      {objectOfMultipleTypes.kursFE4()}
      <br />
      {objectOfMultipleTypes['wojciech']['daneOsobowe']}
      <br />
      {/* {Object.values(objectOfMultipleTypes)} */}
      <br />
      {/* {Object.values(objectOfMultipleTypes)} */}
      <br />
      {mergeObjects()}
      <br />
      {kursFE}
      <br />
      Destrukturyzacja tablicy: {String(kursFE2)}
    </div>
  );
}
