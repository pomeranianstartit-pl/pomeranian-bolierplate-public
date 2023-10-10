import React from 'react';
import './styles.css';
import { LoopsExercise } from './Loops';
export function ExerciseJsArraysObjectsBasics() {
  //arrays of objects
  const peopleData = [
    { id: 11, name: 'Maciej', age: 65, adress: 'Gdansk' },
    { id: 13, name: 'Jasmine', age: 25, adress: 'warszawa' },
    { id: 14, name: 'Lilian', age: 3, adress: 'Gdansk' },
    { id: 15, name: 'Adrian', age: 17, adress: 'Gdansk' },
  ];

  const peopleNames = peopleData.map((person) => person.name);
  console.log(peopleNames); // ["Maciej",  "Jasmine","Lilian"] --> flat array

  const peopleFromGdansk = peopleData.filter(
    (personBlaBla) => personBlaBla.adress === 'Gdansk'
  );
  console.log('peopleFromGdansk', peopleFromGdansk); // [{ id: 11, name: "Maciej", age: 65, adress: "Gdansk" }, { id: 14, name: "Lilian", age: 3, adress: "Gdansk" }] --> flat array
  /*
1. continue - pomija iteracje, ale pętla wykonuje się dalej
2. break - przerywa pętlę
*/
  // Continue
  //   for (let i = 5; i > 0; i--) {
  //     if (i > 3) {
  //       continue;
  //     }

  // Break
  //for (let i = 0; i <= 5; i++) {
  //if (i === 3) {
  //break;
  //}
  //console.log(i);
  //}

  //   for (let i = 0; i < NUMBERS.length; i++) {
  //     const num = NUMBERS[i];
  //     if (num % 2 === 0) {
  //       console.log('Jestem parzystą liczbą:', num);
  //       continue;
  //     }
  //     console.log('Jestem nieparzystą liczbą:', num);
  //   }

  // const firstEven = NUMBERS.find((num) => num % 2 === 0);
  // console.log(firstEven);

  // const sum = NUMBERS.reduce((accumulator, currentValue) => {
  //   if (currentValue % 2 === 0) {
  //    accumulator.push(currentValue);
  //  }
  //   return accumulator;
  //}, []);

  return (
    <div className="container--array-objects-basics">
      <p>Działania na tablicach: 2023-10-09</p>
      <ul>
        {
          // React require uniq id for listed items (iteration thrue array of objects)
          peopleData.map((personData, index) => (
            <li key={personData.id}>
              Imie: {personData.name}, Wiek: {personData.age}
            </li>
          ))
        }
      </ul>
      <br />
      <br />
      <ul>
        {
          // React require uniq id for listed items (iteration thrue flat array )
          peopleNames.map((peopleName, index) => (
            <li key={index}>Imie: {peopleName}</li>
          ))
        }
      </ul>
      Imie pierwszej osoby:{' '}
      {
        peopleNames[0] //Maciej
      }
      <br />
      <br />
      <div className="container--people-from-gdansk">
        {peopleFromGdansk.map((peopleDataFromGdansk) => (
          <div className="container--people-data" key={peopleDataFromGdansk.id}>
            <div>Imie: {peopleDataFromGdansk.name}</div>
            <div>Wiek: {peopleDataFromGdansk.age}</div>
            <div>Adres: {peopleDataFromGdansk.adress}</div>
            <div>Id: {peopleDataFromGdansk.id}</div>
          </div>
        ))}
      </div>
      Import loops exercise:
      <LoopsExercise />
    </div>
  );
}
