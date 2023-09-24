import './styles.css';

export function Exercise() {
  // ---- Zadanie 1 -------
  const originalArr = [38, 1, 3, 22, 2];

  function sortImmute(array) {
    const sortedArr = array.toSorted(function (a, b) {
      return a - b;
    });
    console.log({ originalArr, sortedArr });
    console.log({ originalArr });
    return sortedArr;
  }

  // ---- Zadanie 2 -------
  const originalObject = { name: 'john', surname: 'wick', age: 14 };

  const upperObject = (object) => {
    let helperObject = {};
    for (const property in object) {
      const propertyToString = object[property].toString();
      const helperValue = propertyToString[0];
      helperObject[property] =
        helperValue.toUpperCase() + propertyToString.slice(1);
    }
    console.log(helperObject);
    return helperObject;
  };

  // let changedObject = upperObject(originalObject);

  // ---- Zadanie 3 -------

  // function calcAvr() {
  //   const tablicaPierwotna = [
  //     { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1, 2, 3] },
  //     { id: 2, name: 'Eve2', grades: [4, 2, 4, 6, 1, 2, 3] },
  //   ];
  //   let tablicaWynikowa = [];
  //   // console.log(tablica[0].grades);

  //   // let avr = tablica[0].grades.reduce((accumulator, currentValue) => {
  //   //   return accumulator + currentValue;
  //   // });

  //   for (const element of tablicaPierwotna) {
  //     console.log(Object.values(element));
  //   }
  //   // console.log(avr);
  //   console.log(tablicaWynikowa);
  // }

  // let tablicaWynikowa = calcAvr();

  // METODA SZYMONA NA 3 ZADANIE
  const tablicaPierwotna = [
    { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1, 2, 3] },
    { id: 2, name: 'Eve2', grades: [4, 2, 4, 6, 1, 3] },
  ];

  const calcAvr = (peopleArr) => {
    const returnArr = [];

    peopleArr.forEach((person) => {
      let sum = 0;
      let avr = 0;

      person.grades.forEach((num) => (sum += num));

      avr = sum / person.grades.length;

      returnArr.push({
        id: person.id,
        name: person.name,
        avr,
      });
    });

    return returnArr;
  };

  const tablicaWynikowa = calcAvr(tablicaPierwotna);

  console.log(tablicaPierwotna, tablicaWynikowa);

  const arrAll = [
    ['Cecilie', 'Lone'],
    ['Emil', 'Tobias', 'Linus', ['Robin', 'Morgan']],
  ];
  const newArr1 = arrAll.flat();
  const newArr2 = arrAll.flat(Infinity);
  console.log(newArr1);
  console.log(newArr2);
  // ---- Zadanie 4 -------

  // function fibonacci(number) {
  //   let num0 = 0;
  //   let num1 = 1;
  //   let sum = 0;

  //   if (number ===0) {
  //     sum = 0;
  //   } else if (number ===1) {
  //     sum = 1;
  //   } else {
  //   for (let index =0; index <= number; index++ ) {

  //   }
  //   }
  // }

  // fibonacci(4);

  return (
    <div>
      {/* <h4>Zadanie 1 - funkcja 'sortImmute'</h4>
      <div>
        Oryginalna tablica: <b>{originalArr}</b>
      </div>
      <div>
        Posortowana tablica: <b>{sortImmute(originalArr)}</b>
      </div> */}

      <h4>Zadanie 2</h4>
      <p>wynik w konsoli</p>
      {/* <div>{changedObject}</div> */}
      <h4>Zadanie 3</h4>
    </div>
  );
}
