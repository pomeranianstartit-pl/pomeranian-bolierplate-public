import './styles.css';

export function Exercise() {
  // --------------------------------------------------------------------
  // ARRAY
  // --------------------------------------------------------------------

  // 1. Tworzenie tablicy 1 wymiarowej
  // --------------------------------------------------------------------
  const array1D = [1, 2, 3, 4, 5];

  console.log(array1D);

  // 2. Tworzenie tablicy 2 wymiarowej
  // --------------------------------------------------------------------
  const array2D = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  console.log(array2D);

  // 3. Wyciąganie wartości z tablicy
  // --------------------------------------------------------------------
  console.log(array1D[0], 'Pierwszy element z listy array1D');
  console.log(array2D[1], 'Drugi element z listy array2D');
  console.log(array1D[array1D.length - 1], 'Ostatni element z listy array1D');

  // 4. METODA POP() - Usuwanie ostatenie elementu z tablicy i zwraca go
  // --------------------------------------------------------------------
  const arrayPop = [1, 2, 3, 4, { a: 'b' }];
  const poppedValue = arrayPop.pop();
  console.log(poppedValue, 'Wartość ostatniego elementu z tablice arrayPop');
  console.log(arrayPop);

  // 5. METODA SHIFT() - Usuwanie pierwszego elementu z tablicy i zwraca go
  // --------------------------------------------------------------------
  const shiftPop = [1, 2, 3, 4, 5];
  const shiftedValue = shiftPop.shift();

  console.log(shiftedValue);
  console.log(shiftPop);

  // 6. METODA PUSH() - Dodawanie elementu na koniec tablicy
  // --------------------------------------------------------------------
  const pushArray = [1, 2, 3, 4, 5];
  pushArray.push(6, 7, 8, 9, { a: 'b' });
  console.log(pushArray);

  // 7. CONCAT, DESTRUKTURYZACJA - ŁĄCZENIE TABLIC
  // --------------------------------------------------------------------
  const firstArrayToDestruct = [1, 2, 3];
  const secondArrayToDestruct = [4, 5, 6];
  const sumDestructArray = [...firstArrayToDestruct, ...secondArrayToDestruct];
  const sumConcatArray = firstArrayToDestruct.concat(secondArrayToDestruct);
  console.log(sumDestructArray);
  console.log(sumConcatArray);
  console.log(firstArrayToDestruct);
  console.log([...firstArrayToDestruct, 4, 5, 6]);

  // 8. SPLICE - Wybierz elementy z tablice gdzie splice(indexStartowy, ileElementówUsunąć)
  // - WPŁYWA NA PIERWOTNĄ TABLICE
  // --------------------------------------------------------------------
  const spliceArray = ['Jan', 'March', 'April', 'June'];
  const splicedArray = spliceArray.splice(0, 2);
  console.log(splicedArray);
  console.log(spliceArray);

  // 9. SLICE - Wybierz elementy z tablice gdzie splice(indexStartowy, ileElementówUsunąć)
  // - NIE WPŁYWA NA PIERWOTNĄ TABLICE
  // --------------------------------------------------------------------
  const sliceArray = [1, 2, 3, 4, 5];
  const slicedArray = sliceArray.slice(0, 2);
  console.log(slicedArray);
  console.log(sliceArray);

  // 10 PĘTLA FOR - Przejście po elementach tablicy
  // --------------------------------------------------------------------

  // for (inicjalizacja; warunek; krok) {
  // kod do wykonania w kązdej iteracji
  // }

  for (let i = 0; i < 10; i++) {
    console.log(i, 'Pętla for');
  }

  const forArray = [1, 2, 3, 4, 5];
  for (let i = 0; i < forArray.length; i++) {
    console.log(forArray[i], 'Pętla for dla tablicy forArray');
  }

  // 11. PĘTLA FOR OF - Przejście po elementach tablicy
  // --------------------------------------------------------------------
  const forOfArray = [1, 2, 3, 4, 5];
  for (const element of forOfArray) {
    console.log(element);
  }

  // 12. PETLA WHILE - Przejście po elementach tablicy
  // --------------------------------------------------------------------
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }
  console.log(i);

  // 13. PRZYKŁAD Z BREAK I CONTINUE DLA PĘTLI FOR
  // --------------------------------------------------------------------

  for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue;
    }

    console.log(i, 'i z continue');
  }

  for (let i = 0; i < 5; i++) {
    if (i === 3) {
      break;
    }

    console.log(i, 'i z break');
  }

  // 14. INFINITE LOOP
  // --------------------------------------------------------------------

  // while (true) {console.log('Infinite loop')}

  // 15. METODY NA TABLICACH - forEach
  // forEach((elementIterowany, indexElementu) => {})
  // --------------------------------------------------------------------
  const forEachArray = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  forEachArray.forEach((element, index) => console.log(element, index));

  console.log(forEachArray);

  // 15. METODY NA TABLICACH - find znajduje pierwszy element w tablicy spełniający warunek określony w funkcji zwrotnej:
  // find((elementIterowany) => {})
  // --------------------------------------------------------------------

  const findArray = [1, 2, 3, 4, 5];
  const findArrayResult = findArray.find((element) => element === 3);
  console.log(findArrayResult);

  // 16. METODY NA TABLICACH - filter - tworzy nową tablicę zawierającą elementy, które spełniają warunek określony w funkcji zwrotnej:
  const filterArray = [1, 2, 3, 4, 5];
  const filterArrayResult = filterArray.filter((num) => num % 2 === 0);
  console.log(filterArrayResult);

  // 17. METODY NA TABLICACH - reduce -  wykonuje funkcję zwrotną na wszystkich elementach tablicy, aby obliczyć jedną wartość wynikową. Przykład obliczenia sumy elementów
  const reduceNumbers = [1, 2, 3, 4, 5];
  const sum = reduceNumbers.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);

  // https://www.simplilearn.com/tutorials/javascript-tutorial/array-reduce-javascript
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?retiredLocale=pl
  // https://betterprogramming.pub/6-use-cases-for-reduce-in-javascript-49683842ebed

  // METODY NA TABLICACH:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  // --------------------------------------------------------------------

  return <div>test</div>;
}
