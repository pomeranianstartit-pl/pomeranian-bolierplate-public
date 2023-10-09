import React from 'react';

/* OBJECTS
1. delete - Usunięcie właściwości z obiektu
2. Object.assign - Klonowanie obiektu i łączenie go z innym
3. Object.entries - Pobranie tablicy par [klucz, wartość] z obiektu
4. Object.values - Pobranie tablicy wartości z obiektu
5. Object.keys - Pobranie tablicy kluczy z obiektu
6. Object.freeze - Zamrożenie obiektu, uniemożliwia zmiany jego właściwości
7. Object.seal - Zabezpieczenie obiektu przed dodawaniem i usuwaniem właściwości, ale pozwalający na zmiany wartości istniejących właściwości
*/

const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2020,
};

export const ObjectsAndDate = () => {
  console.log('-------------');
  // 1. delete
  delete car.year;
  console.log('After delete:', car); // { brand: 'Toyota', model: 'Camry' }

  // 2. Object.assign
  const additionalInfo = {
    color: 'silver',
    mileage: 50000,
  };
  const newCar = Object.assign({}, car, additionalInfo);
  console.log('After assign:', newCar); // { brand: 'Toyota', model: 'Camry', color: 'silver', mileage: 50000 }

  // 3. Object.entries
  const entries = Object.entries(newCar);
  console.log('After entries:', entries); // [ [ 'brand', 'Toyota' ], [ 'model', 'Camry' ], [ 'color', 'silver' ], [ 'mileage', 50000 ] ]

  // 4. Object.values
  const values = Object.values(newCar);
  console.log('After values:', values); // [ 'Toyota', 'Camry', 'silver', 50000 ]

  // 5. Object.keys
  const keys = Object.keys(newCar);
  console.log('After keys:', keys); // [ 'brand', 'model', 'color', 'mileage' ]

  // 6. Object.freeze
  // Object.freeze(newCar);
  // newCar.model = 'Corolla';
  console.log('After freeze:', newCar); // { brand: 'Toyota', model: 'Camry', color: 'silver', mileage: 50000 }

  // 7. Object.seal
  Object.seal(newCar);
  // newCar.engineCapacity = '2.0L';
  newCar.color = 'black';
  console.log('After seal:', newCar); // { brand: 'Toyota', model: 'Camry', color: 'black', mileage: 50000 }

  // Aktualna data i czas
  const currentDate = new Date();
  console.log(currentDate);
  // currentDate.setDate(currentDate.getDate() + 3);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hours = currentDate.getHours();

  // Timestampy
  const currentTimespamp = Date.now();
  const newYearTimestamp = Date.parse('2023-12-31T23:59:59Z');
  const timeDifference = newYearTimestamp - currentTimespamp;
  const daysUntilNewYear = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <div>
      <ol>
        <li>{currentDate.toLocaleDateString()}</li>
        <li>{year}</li>
        <li>{month}</li>
        <li>{day}</li>
        <li>{hours}</li>
        <li>{currentTimespamp}</li>
        <li>{newYearTimestamp}</li>
        <li>Do sylwestra zostało {daysUntilNewYear} dni</li>
      </ol>
    </div>
  );
};
