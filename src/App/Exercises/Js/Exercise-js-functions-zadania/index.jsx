import React from 'react';
import './styles.css';

const sortImmune = (arr) => {
  const sortedArr = [...arr];
  sortedArr.sort((a, b) => a - b);
  return sortedArr;
};

const upperObject = (obj) => {
  const changedObject = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
      changedObject[capitalizedKey] = obj[key];
    }
  }

  return changedObject;
};

const calaAvr = (arr) => {
  const resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    const grades = obj.grades;
    const sum = grades.reduce((total, grade) => total + grade, 0);
    const avgGrade = (sum / grades.length).toFixed(2);

    resultArr.push({ ...obj, grades: avgGrade });
  }

  return resultArr;
};

const sumOfParam = (...args) => {
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== 'number') {
      return 'złe wejście';
    }

    sum += args[i];
  }

  return sum;
};

const ZliczWystapienia = (element) => {
  let count = 0;

  return (...args) => {
    if (element === 'nie liczba') {
      if (args.some((arg) => typeof arg !== 'number')) {
        return 'złe wejście';
      }
    } else {
      count = args.filter((arg) => arg === element).length;
    }

    return count;
  };
};

export function Exercise() {
  const originalArr = [1, 3, 2];
  const sortedArr = sortImmune(originalArr);

  console.log({
    originalArr: originalArr,
    sortedArr: sortedArr,
  });

  const originalObj = { name: 'john', surname: 'wick', age: 1000 };
  const changedObject = upperObject(originalObj);

  console.log({
    originalObj: originalObj,
    changedObject: changedObject,
  });

  const originalArray = [
    { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1, 2, 3] },
    { id: 2, name: 'Eve2', grades: [4, 2, 4, 6, 1, 2, 3] },
  ];
  const resultArray = calaAvr(originalArray);

  console.log(resultArray);

  const sum1 = sumOfParam(1, 2, 3, 4, 5, 6);
  const sum2 = sumOfParam(1, 2, 3, 'not a number', 5, 6);

  console.log(sum1);
  console.log(sum2);

  const countOccurrences1 = ZliczWystapienia(1);
  const countOccurrences2 = ZliczWystapienia('nie liczba');

  const occurrences1 = countOccurrences1(1, 1, 2, 3, 5, 7, 8, 1);
  const occurrences2 = countOccurrences2('nie liczba', 1, 1, 2, 3, 5, 7, 8, 1);
  const occurrences3 = countOccurrences1(
    1,
    1,
    1,
    2,
    3,
    'x',
    'y',
    'z',
    {},
    [],
    1
  );

  console.log(occurrences1);
  console.log(occurrences2);
  console.log(occurrences3);

  return (
    <div>
      <div>
        Zadanie 1 - Napisz funkcję sortImmute, która przyjmuje jako parametr
        tablice cyfr i zwraca ją posortowaną. Funkcja ma nie zmieniać pierwotnej
        tablicy.
      </div>
      <div>Wynik sortowania tablicy: {JSON.stringify(sortedArr)}</div>
      <div>
        Zadanie 2 - Napisz funkcję, która jako parametr przyjmuje obiekt,
        przechodzi po wszystkich jego polach i kapitalizuje im pierwszą literę.
        Funkcja nie zmienia oryginalnego obiektu.
      </div>
      <div>
        Oryginalny obiekt: {JSON.stringify(originalObj)}
        <br />
        Zmieniony obiekt: {JSON.stringify(changedObject)}
      </div>
      <div>
        Zadanie 3 - Napisz funkcję, która jako parametr przyjmuje tablicę
        obiektów, natomiast zwraca tablicę z wyliczoną wartością średnią zamiast
        ocen. Funkcja ma nie zmieniać pierwotnej tablicy.
      </div>
      <div>
        Tablica pierwotna: {JSON.stringify(originalArray)}
        <br />
        Tablica wynikowa: {JSON.stringify(resultArray)}
      </div>
      <div>
        Zadanie 4 - Funkcja zwraca podany w argumencie element ciągu
        Fibonacciego.
      </div>
      <div>
        Zadanie 5 - Stwórz funkcję, która przyjmuje dowolną liczbę argumentów za
        pomocą "...args" i zwraca ich sumę.
      </div>
      <div>
        Suma argumentów (1, 2, 3, 4, 5, 6): {sum1}
        <br />
        Suma argumentów (1, 2, 3, 'not a number', 5, 6): {sum2}
      </div>
      <div>
        Zadanie 6 - Stwórz funkcję, która zwróci funkcję, która zliczy wszystkie
        wystąpienia pierwotnie wywołanej funkcji.
      </div>
      <div>
        Liczba wystąpień (1, 1, 2, 3, 5, 7, 8, 1): {occurrences1}
        <br />
        Liczba wystąpień ('nie liczba', 1, 1, 2, 3, 5, 7, 8, 1): {occurrences2}
        <br />
        Liczba wystąpień (1, 1, 1, 2, 3, 'x', 'y', 'z', {}, [], 1):{' '}
        {occurrences3}
      </div>
      <div>Zadanie 7</div>
    </div>
  );
}
