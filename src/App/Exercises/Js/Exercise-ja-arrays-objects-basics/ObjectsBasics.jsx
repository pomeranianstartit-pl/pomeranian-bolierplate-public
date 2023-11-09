/*
1. delete - usuwanie wlasciwosci z obiektu
2. Object.assign - laczenie obiektow, 2 argument nadpisuje wartosci ktore sie powtarzaja
3. Object.entries - pobieranie tablicy par [klucz, wartosc] z obiektu
4. Object.values - pobranie tablicy wartości z obiektu
5. Object.keys - pobranie tablicy kluczy z obiektu
6. Object.freeze - zamrożenie obiektu, uniemożliwia zmianę wartości
7. Object.seal - zabezpieczenie obiektu przed dodawnaniem oraz usuwaniem właściwości, ale pozwala na zmiany wartośći isniejących właściwości
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
   
    // 4. values
   
    const values = Object.values(newCar);
    console.log('After values:', values);
   
    const keys = Object.keys(newCar);
    console.log('After keys:', keys);
   
    // 6. freeze
    //   Object.freeze(newCar);
    console.log(newCar, 'newCar before freeze');
   
    //   newCar.brand = 'Honda'; - nie zadziała - wyrzuci błąd
    //   newCar.model = 'Civic'; - nie zadziała - wyrzuci błąd
   
    console.log(newCar, 'newCar after freeze');
   
    // 7. seal
    Object.seal(newCar);
   
    newCar.brand = 'Honda';
   
    console.log(newCar, 'newCar after seal');
    //   newCar.wheelAmount = 4; - nie zadziała - wyrzuci błąd
   
    // 1 sposób zrobienie kopii obiektu - uniknięcie zmiany wartości pierwotnego obiektu
    const newCarCopy = Object.assign({}, newCar);
   
    // 2 sposób
    //   const newCarCopy2 = { ...newCar };
   
    // 3 sposób
    //   const newCarCopy3 = JSON.parse(JSON.stringify(newCar));
   
    console.log(newCarCopy, newCar, 'newCarCopy, newCar hard copy before change');
   
    newCarCopy.brand = 'Mazda';
   
    console.log(newCarCopy, newCar, 'newCarCopy, newCar hard copy before change');
   
    // export jako obiekty
   
    // const funkcja1 = () => {};
    // const funkcja2 = () => {};
   
    // export { funkcja1, funkcja2 };
   
    // import { funkcja1, funkcja2 } from './plik';
   
    // import * as modul from './plik';
    // modul.funkcja1();
    // modul.funkcja2();
   
    return (
      <ol>
        <li>{car.year}</li>
        <li>{car.brand}</li>
        <li>{car.model}</li>
      </ol>
    );
  };
   