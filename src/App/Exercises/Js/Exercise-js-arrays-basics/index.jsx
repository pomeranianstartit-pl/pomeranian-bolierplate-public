import './styles.css';

const arrayOfMultipleTypes = [
  true,
  1,
  'Cześć to Rock In It',
  { Weronika: 'radtke' },
];

const array2d = [1, [{ Weronika: 'radtke' }]];

const arrayOfNumbers = [1, 2, 3, 4, 5];

export function ArrayB() {
  function getValueByIndex(array) {
    return console.log(array[0]);
  }
  getValueByIndex(arrayOfMultipleTypes);

  function shiftElementOfArray(arrayParam) {
    return arrayParam.shift();
  }
  return (
    <div>
      <p> Działania na tablicach: </p>
    </div>
  );
}
