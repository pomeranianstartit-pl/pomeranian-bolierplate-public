import './styles.css';

export function Exercise() {
  // Zadanie 1 - napisz funkcję która przyjmuje jako parametr tablicę cyfr i zwraca ją posortowaną (funkcja ma nie zmieniać pierwotnej tablicy)
  //   function sortImmune() {
  //     const originalArr = [1, 3, 2];
  //     const sortedArr = originalArr.slice().sort();
  //     console.log({
  //       originalArr,
  //       sortedArr,
  //     });
  //     return `${originalArr}, ${sortedArr}`;
  //   }
  //   sortImmune();
  //   return <div>{sortImmune()}</div>;
  // }
  // Zadanie 2 - podejście 1 - napisz funkcję która jako parametr przyjmuje obiekt, przechodzi po wszystkich jego polach i kapitalizuje im pierwszą literę (funkcja nie zmienia oryginalnego obiektu)
  //   const originalObj = { name: 'john', surname: 'wick', age: 1000 };
  //   const upperObject = (object) => {
  //     const helperObject = {};
  //     for (const property in object) {
  //       const propertyToString = object[property].toString();
  //       const helperValue = propertyToString[0];
  //       helperObject[property] =
  //         helperValue.toUpperCase() + propertyToString.slice(1);
  //     }
  //     return helperObject;
  //   };
  //   const changedObj = upperObject(originalObj);
  //   console.log(changedObj, originalObj, '0-0');
  //   return (
  //     <div>
  //       <div></div>
  //     </div>
  //   );
  // }
  // Zadanie 2 - podejście 2
  //  const upperObject = (obj) => {
  // const changedObj = {};
  //   Object.keys(originalObj).forEach((key) => {
  //     const helperString = String(originalObj[key]);
  //     changedObj[key] =
  //     helperString.charAt(0).toUpperCase() + helperString.slice(1);
  //   });
  //   return changedObj;
  // };
  // console.log(upperObject(originalObj), originalObj);
  // return (
  //   <div>
  //     <div>
  //       a
  //     </div>
  //   </div>
  // )
  // Zadanie 3 - funkcja, która jako parametr przyjmuje tablicę obiektów, natomiast zwraca tablicę z wyliczoną wartością średnią zamiast ocen (funkcja ma nie zmieniać pierwotnej tablicy)
  //   const tablicaPierwotna = [
  //     { id: 0, name: 'Eve', grades: [4, 3, 5, 5, 1, 3, 4] },
  //     { id: 2, name: 'Eve2', grades: [6, 2, 4, 6, 6, 2, 3] },
  //   ];
  //   const calcAvr = (peopleArr) => {
  //     const returnArr = [];
  //     peopleArr.forEach((person) => {
  //       let sum = 0;
  //       let avr = 0;
  //       person.grades.forEach((num) => (sum += num));
  //       avr = sum / person.grades.length;
  //       returnArr.push({
  //         id: person.id,
  //         name: person.name,
  //         avr,
  //       });
  //     });
  //     return returnArr;
  //   };
  //   const tablicaWynikowa = calcAvr(tablicaPierwotna);
  //   console.log(tablicaPierwotna, tablicaWynikowa);
  //   return (
  //     <div>
  //       <div></div>
  //     </div>
  //   );
  // }

  // Zadanie 4 - funkcja zwracająca podany w argumencie element ciągu Fibonacciego (napisać rekurencyjnie)
  // fibonacci(3) -> 2
  // fibonacci(12) -> 144

  //   function fibonacci(n) {
  //     if (n <= 0) {
  //       return 'Podaj wartość większą od zera';
  //     } else if (n === 1) {
  //       return 0;
  //     } else if (n === 2) {
  //       return 1;
  //     } else {
  //       return fibonacci(n - 1) + fibonacci(n - 2);
  //     }
  //   }

  //   const fibonacciNumber = fibonacci(6);
  //   console.log(fibonacciNumber);
  // }

  // Zadanie 5 - funkcja, która przyjmuje dowolną liczbę argumentów za pomocą "...args" i zwraca ich sumę
  // sumOfParam(1,2,3,4,5,6) -> x
  // sumOfParam(1,2,3, 'not a number',5,6) -> "złe wejście"

  // DO POPRAWYYYYYYYYY
  const numberSet = [1, 2, 3, 4, 5, 6];

  function sumOfParam(numberSet) {
    numberSet.forEach((numbers) => {
      let sum = 0;
      numbers.forEach((num) => (sum += num));
      console.log(sum);
    });
  }
  return;
}
