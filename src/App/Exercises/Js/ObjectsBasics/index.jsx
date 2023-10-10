import React from 'react';

/*
1. delete - usuwanie wlasciwosci z obiektu
2. Object.assign - laczenie obiektow, 2 argument nadpisuje wartosci ktore sie powtarzaja
3. Object.entries - pobieranie tablicy par [klucz, wartosc] z obiektu
4. Object.values -
5. Object.keys - 
6. Object.freeze - 
7. Object.seal -
*/

export const ObjectsBasics = () => {
  console.log('------------');
  const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
  };

  // 1. delete
  delete car.year;
  console.log('After delete:', car);

  // 2. assign
  const additionalInfo = {
    model: 'Corolla',
    color: 'silver',
    kmage: 240000,
  };

  const newCar = Object.assign(car, additionalInfo);
  console.log('After assign:', newCar);

  // 3. entries
  const entries = Object.entries(newCar);
  console.log('After entries:', entries);

  return (
    <ol>
      <li>{car.year}</li>
      <li>{car.brand}</li>
      <li>{car.model}</li>
    </ol>
  );
};
