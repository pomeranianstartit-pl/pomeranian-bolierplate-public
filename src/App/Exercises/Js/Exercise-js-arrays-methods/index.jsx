import './styles.css';

const arrayOfMultipleTypes = [
  true,
  1,
  'Cześć to Rock In It',
  { Weronika: 'radtke' },
];

const array2d = [1, [2]];
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayOfNumbersOne = [1, 2, 3];
const arrayOfNumbersTwo = [4, 5, 6];

export function ArrayM() {
  function filterMethod(arrayofNumbers) {
    const gratherThan5 = arrayOfNumbers.filter(function (kot) {
      return kot > 5;
    });
    return console.log('filterMethod', gratherThan5);
  }
}
