import './styles.css';

const tablicaWieluTypow = [
  true,
  1,
  { maciej: 'dojlido' },
  'Cześć to Rock In It',
  [true],
];
const arrayOfNumbers = [1, 2, 3, 4, 5];

function forLoop() {
  for (let count = 0; count < 5; count++) {
    console.log(count);
  }
}
forLoop();

function whileLoop() {
  let whileCount = 0;

  while (whileCount <= 5) {
    console.log('whileLoopWithBreak', whileCount);
    if (whileCount === 5) {
      break;
    } //continue
    whileCount++;
  }
}
whileLoop();

export function Exercise() {
  function pushElementToArray(arrayToPush) {
    return console.log('puElementToArray', arrayToPush.push('czesć JS'));
  }
  pushElementToArray(tablicaWieluTypow);

  return (
    <div>
      <h1>test</h1>
    </div>
  );
}
