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
    return `dfjsdkk skjdhfk ${surname}`; // template string -->składnia ${}
  }

  const someArray = ['testset', 'testset'];
  //spread operator to merge to merge array:
  console.log([...someArray, 1, 2, 3, 4]);

  const personalData2 = ['Maciej', 'Dojlido'];
  const accountValue = [12313];
  const newArray = [...accountValue, ...personalData2];

  //Spread operator to merge array:
  console.log('newArray', newArray);

  //Concat function example: skleja personalData2 z accountValue
  const cocatResult = personalData2.concat(accountValue);

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
      Core function (build in function pop( )): {arrayOfArrys[1].pop()}
      <br />
      Core function2 (build in function shift( )): {arrayOfArrys[1].shift()}
      <br />
      Desctructing of array: {`${first} ${theRestOne}`}
      <br />
      Desctructing of objects: {`${name} ${age}`}
      <br />
      Opis template: {getTemplate()}
      {/* /usuwa elementy od indeksu 1 do 2/*/}
      <br />
      Splice example splice(){' '}
      {console.log(
        'splice example elementy usunięte',
        arrayOfArrys[0].splice(1, 2)
      )}
      {/* resultat bedzie 0 kiedy ta dana istnieje w tablicy */}
      Do i have this car?: {arrayOfStrings.indexOf('audi')}
      <br />
      {/* resultat bedzie -1 kiedy ta dana nieistnieje w tablicy */}
      Do i have this car?: {arrayOfStrings.indexOf('maluch')}
      <br />
      {/* lenght example */}
      Lenght property: {arrayOfStrings.length}
      <br />
      {forLoop()}
      {whileLoop()}
      <ExerciseArraysTraining />
    </div>
  );
}
