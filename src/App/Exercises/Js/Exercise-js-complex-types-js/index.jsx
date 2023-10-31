import { ExerciseArraysTraining } from './ArraysTraining';

import './styles.css';

export function ExerciseJsComplexTypes() {
  const personalData = {
    age: 60,
    name: 'Maciej',
    surname: 'Dojlido',
  };

  const data = [
    'random text', // String
    42, // Number
    true, // Boolean
    {
      // Obiekt
      keyOfObject: 'value',
    },
    [1, 2, 3], // array of arrays
  ];

  const arrayOfArrys = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const arraysOfObjects = [
    {
      name: 'Krzysztof',
    },
    {
      name: 'Maciej',
    },
    {
      name: 'Oleg',
    },
  ];

  const arrayOfStrings = ['audi', 'mercedes', 'tesla', 'bmw'];

  const [first, second, third, ...theRestOne] = arrayOfStrings; // destrukturyzacja tablicy

  const { surname, name, age } = personalData; // destrukturyzacja obiektu

  function getTemplate() {
    return `Dsafsdfkdslfdsf arrayOfStrings ${surname}`; // template string
  }

  const personalData2 = ['Maciej', 'Dojlido', 65];
  const accountValue = [12313];
  const newArray = [...accountValue, ...personalData2];

  //Spread operator to merge array:
  console.log('newArray', newArray);

  //Concat function example:
  const concatResult = accountValue.concat(personalData2);
  console.log('concatResult', concatResult);

  function forLoop() {
    // incrementation/ dodawanie
    for (let counter = 0; counter <= 5; counter++) {
      console.log('for loop: ', counter);
    }
  }

  const whileLoop = () => {
    let counter = 0;

    while (counter < 5) {
      console.log(counter);
      counter++;
    }
  };

  //infinity loop
  //  while (true) {
  //   console.log(123213);
  //   }

  return (
    <div className="container--exercise-js-complex-types">
      Tekst: {data[0]} <br />
      Property obiektu: {data[3].keyOfObject}
      <br />
      Element tablicy tablic: {data[4][2]}
      <br />
      Core function (build in function pop( )): {arrayOfArrys[0].pop()}
      <br />
      Desctructing of array: {`${first} ${theRestOne}`}
      <br />
      Desctructing of objects: {`${name} ${age}`}
      <br />
      {getTemplate()}
      <br />
      {/* / Usuwa elementy od indekus 1 do 2 / */}
      Splice example splice(){' '}
      {console.log(
        'Splice example - elementy usuniete',
        arrayOfArrys[1].splice(1, 2)
      )}
      <br />
      {/* // result is 0 (because this element exist in this array)  */}
      <br />
      Do I have this car?: {arrayOfStrings.indexOf('tesla')}
      {/* //result is -1 (because this element does not exist in this array) */}
      <br />
      Do I have this car?: {arrayOfStrings.indexOf('maluch')}
      {/* length example */}
      <br />
      Length: {arrayOfStrings.length}
      {forLoop()}
      {whileLoop()}

      <ExerciseArraysTraining />
    </div>
  );
}
