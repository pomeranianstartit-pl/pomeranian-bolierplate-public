import './styles.css';

const tablicaWieluTypow = [
  true,
  1,
  'Cześć to Rock In IT',
  { maciej: 'dojlido' },
];

const tableOfObjects = {
  maciej: { daneOsobowe: 'Jestem z Gdańska' },
  kursFe: 'react',
  kursFe1: 1,
  kursFe2: true,
  kursFe3: [],
  kursFe4: () => 'Lubie placki',
};

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayToPoP = ['Marta', 'Kasia', 'Bartek', 'Łukasz'];
let arrayOfNumbersOne = [1, 2, 3, 4, 5, 6];
let arrayOfNumbersTwo = [4, 5, 6, 7, 8, 9];
const array2d = [1, [2]];

// function filterMethod(arrayOfParametrs) {
//   const greaterThan5 = arrayOfParametrs.filter(function (number) {
//     return number > 5;
//   });
//   return console.log('filterMethod', greaterThan5);
// }

// filterMethod(arrayOfNumbers);

function Intersection() {
  const arrOne = [1, 2, 3, 4, 5];
  const arrTwo = [3, 5, 7, 9];

  const result = arrOne.filter(function (numberElement) {
    return arrTwo.includes(numberElement);
  });

  return console.log('Intersection', result);
}

Intersection();

function mergeObjects() {
  const object1 = { foo: 'bar' };
  const object2 = { name: 'Maciej' };
  const resultOfMerging = { ...object1, ...object2 };

  console.log('mergeObjects', resultOfMerging);
}

export function Exercise() {
  // destrukturyzacja obiektów
  const { kursFe1 } = tableOfObjects;
  const [a, b, c, d] = tablicaWieluTypow;

  return (
    <div>
      <p>Metody na tablicach</p>
      {tableOfObjects.kursFe}
      <br></br>
      {tableOfObjects.maciej.daneOsobowe}
      <br></br>
      {tableOfObjects['maciej']['daneOsobowe']}
      <br></br>
      {tableOfObjects.kursFe4()}
      <br></br>
      {/* To poniżej nie działa nie wiem czemu
      {Object.values(tableOfObjects)} */}
      {kursFe1}
      <br></br>
      Destrukturyzacja tablicy: {d.maciej}
      {mergeObjects()}
    </div>
  );
}
