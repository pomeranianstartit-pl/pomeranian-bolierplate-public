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
    return `kghjygjg arrayOfStrings ${surname}`; // template string
  }

  const personalData2 = ['Ola', 'Waniczek'];
  const accountVal = [123123];
  const newArray = [...accountVal, ...personalData2];
  console.log('new Array', newArray);
  // let arr = [];
  // arr.push(1) vs spread: [...arr, 1] -> dodawanie nowego elementu na koniec tablicy, lepiej uzywac spread oparator (to drugie [...arr, 1])
  //bo nie edytujemy pierwotnej tablicy (prototypu nr 1) tylko kopię  // mutowalność - jej unikamy uzywając kopii zamiast oryginału bo chcemy zeby był nietknięty

  const concatResult = personalData2.concat(accountVal); //funckja concat łaczy tablcie

  // petla for
  // funckja powinna robic 1 rzecz, powinna byc czytelna i chuda
  function forLoop() {
    for (let i = 0; i <= 5; i++) {
      console.log(i);
    }
  }

  // petla while
  const whileLoop = () => {
    let number = 0;

    while (number < 5) {
      console.log(number);
      number++;
    }
  };

  //infinity loop
  //  while (true) {
  //   console.log(123213);
  //   }

  const tablica = [1, 2, 3, 4, 5];

  for (const element of tablica) {
    console.log(element); // Wypisuje elementy tablicy po kolei
  }

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
      {getTemplate()} <br />
      splice example - elementy usuniete splice() {[1, 2, 3].splice(1, 2)}{' '}
      <br />
      {/*usuwa elementy od indeksu 1 do 2 - powyzsze wyswietli nam usuniete elementy*/}
      splice example - elementy usuniete splice() {arrayOfArrys[1].splice(1, 2)}{' '}
      <br />
      {/* poszukiwanie danego elementu w tablicy:  */}
      do I have this car: {arrayOfStrings.indexOf('tesla')} <br />
      do I have this car: {arrayOfStrings.indexOf('audi')} <br />
      do I have this car: {arrayOfStrings.indexOf('suzuki')} <br />
      Length: {arrayOfStrings.length} <br />
      {forLoop()}
      {whileLoop()}
      <ExerciseArraysTraining />
    </div>
  );
}
