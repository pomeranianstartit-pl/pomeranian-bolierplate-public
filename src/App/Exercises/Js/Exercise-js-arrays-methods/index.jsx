import './styles.css';

const tablicaWieluTypow = [
  true,
  1,
  { maciej: 'dojlido' },
  'Cześć to Rock In It',
  [true],
];
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function filterMethod(arrayOfNumbers){
//   const greatherThan5 = arrayOfNumbers.filter(function {kot} {
//   return kot > 5;
// })};
// return console.log('filterMethod', greatherThan5);
// filterMethod();

const Numbers1 = [1, 2, 3, 4, 5];
const Numbers2 = [3, 5, 7, 9];

function mergeArrays(Numbers1, Numbers2) {
  return [...Numbers1, ...Numbers2];
}

export function Exercise() {
  return (
    <div>
      <h1>Metody na tablicach</h1>

      <p></p>
    </div>
  );
}
