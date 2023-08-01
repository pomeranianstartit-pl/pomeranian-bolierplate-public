import { Key } from '@mui/icons-material';
import './styles.css';

export const ExerciseJSFunctions = () => {
  // Cwiczenie a

  const sortImmute = (arr) => arr.slice().sort();
  const arr = [1, 3, 2, 5, 4];
  const sortedArr = sortImmute(arr);
  console.log(sortedArr);
  console.log(arr);
  console.log('----------------------------');

  // Cwiczenie 1
  const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  console.log(fibonacci(3));
  console.log('----------------------------');

  // Cwiczenie 4

  const calculateWitchChar = (operator) => {
    return (num1, num2) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'złe wejście';
      }
      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num1 / num2;
        case '%':
          return num1 % num2;
        default:
          return 'zły znak';
      }
    };
  };

  console.log(calculateWitchChar('+')(1, 2));
  console.log(calculateWitchChar('*')(1, 2));
  console.log(calculateWitchChar('---')(1, 2));
  console.log(calculateWitchChar('-')(1, 'b'));
  console.log('----------------------------');

  // Cwiczenie b
  const person = { name: 'john', surname: 'wick', age: 1000 };

  const changeForBigLetterPerson = (object) => {
    console.log(Object.entries(object));
    let newObject = Object.assign(
      ...Object.entries(object).map(([key, value]) => {
        if (typeof value === 'string') {
          return { [key]: value[0].toUpperCase() + value.slice(1) };
        }
        return { [key]: value };
      })
    );
    return newObject;
  };

  // const changeForBigLetterPerson = (object) => {
  //   let obj = {};
  //   for (const [key, value] of Object.entries(object)) {
  //     obj[key] =
  //       typeof value === 'string'
  //         ? value[0].toUpperCase() + value.slice(1)
  //         : value;
  //   }
  //   return obj;
  // };

  // dlaczego key jest w [] oraz map([])??
  console.log(person);
  console.log(changeForBigLetterPerson(person));
  console.log(person);

  console.log('----------------------------');
  // Cwiczenie c
  let arrayPeople = [
    { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1, 2, 3] },
    { id: 1, name: 'Eve2', grades: [6, 2, 4, 5, 1, 3, 3] },
  ];
  function getAverageFromObjectKey(array) {
    let newArrayPeople = [];
    array.forEach((object) => {
      let tempObject = {};
      Object.keys(object).forEach((element) => {
        if (element === 'grades') {
          let sum = object[element].reduce((acc, curr) => acc + curr, 0);
          tempObject['avr'] = (sum / object[element].length).toFixed(2);
        } else {
          tempObject[element] = object[element];
        }
      });
      newArrayPeople.push(tempObject);
    });
    return newArrayPeople;
  }
  console.log(getAverageFromObjectKey(arrayPeople));
  console.log('----------------------------');

  // Cwiczenie 2
  function sumOfParam(...args) {
    for (const arg of args) {
      if (typeof arg !== 'number') {
        return 'złe wejście';
      }
    }
    return args.reduce((acc, curr) => acc + curr);
  }
  console.log(sumOfParam(1, 2, 3, 4));

  console.log('----------------------------');
  // Cwiczenie 3
  function countOccurrences(number) {
    if (typeof number !== 'number') {
      return () => 'złe wejśce';
    }
    return (...args) => {
      let sum = 0;
      for (const arg of args) {
        if (arg === number) {
          sum++;
        }
      }
      return sum;
    };
  }
  console.log(countOccurrences(1)(1, '2', 1, 4));

  return <div>Change me X</div>;
};
