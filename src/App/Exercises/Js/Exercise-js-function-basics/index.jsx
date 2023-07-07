import './styles.css';

export function Exercise() {
  const a = 2;
  const b = 3;
  //deklaracje funkcji
  function multiplyTypeFunction(a, b) {
    return a * b;
  }
  const multiplyArrowFunction = (a, b) => {
    return a * b;
  };
  const filterHelper = (num) => {
    return (num) => 3;
  }; //lambda function
  const filterHelper_lambda = (a, b) => a * b;

  const array_anon_with_declaration = [1, 2, 3].filter((num) => num >= 3);
  const array_with_declaration = [1, 2, 3].filter((num) => filterHelper(num));

  const l1 = 1;
  const l2 = 2;

  console.log(l1 === l2); //false bo mają rózne wartości gdby l1 i l2 =2 to byłoby true

  const obj1 = {};
  const obj2 = {};

  console.group(obj1 === obj2); //false bo są to rózne obiekty w pamięci !!! to samo dotyczy się tablic niezalenie od ich wartości

  //-----------------------------------------
  // ARGUMENTY FUNKCJI
  function multiplyTypeFunction2(...values) {
    return values; //values jako lista!!!!
  }

  const originalArray = [1, 5, 3, 7, 4, 2, 6];
  const sortedArray = originalArray.toSorted();

  console.log(sortedArray);
  console.log(originalArray);

  const originalObj = {
    name: 'karol',
    surname: 'kuligowski',
    age: 27,
  };

  const capitalizedObj = {};
  for (let key in originalObj) {
    const value = originalObj[key];
    const capitalizedValue =
      typeof value === 'string'
        ? value.charAt(0).toUpperCase() + value.slice(1)
        : value;
    capitalizedObj[key] = capitalizedValue;
  }

  console.log(capitalizedObj);
  console.log(originalObj);

  //TABLICA ZE ŚREDNIĄ

  const tablicaOcen = [
    { id: 0, name: 'Ewa', grades: [4, 5, 3, 5, 4, 4, 2, 2] },
    { id: 2, name: 'Iza', grades: [2, 3, 5, 5, 5, 4] },
  ];
  const tablicaWyniki = calcAvr(tablicaOcen);

  function calcAvr(tablica) {
    const tablicaWyniki = [];
    for (let i = 0; i < tablica.length; i++) {
      const { name, grades } = tablica[i];
      const average =
        grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
      tablicaWyniki.push({ name, average });
    }
    console.log(tablicaWyniki);
    return tablicaWyniki;
  }

  //REKURENCJA, FIBONACCI

  function fibonacci(n) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  console.log(fibonacci(4));

  //SUMA ARGUMENTÓW

  function suma(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
  console.log(suma(1, 2, 3));

  //wystąpienia funkcji

  function CountItems(item, array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        count++;
      }
      return count;
    }

    // const tablica = [1, 2, 3, 1, 3, 2, 1, 1, 1];
    // const itemToCount = 1;
    // const itemCount = CountItems(itemToCount, items);
  }
  return (
    //wywołanie funkcji
    <div>
      <h1>{multiplyTypeFunction(2, 3)}</h1>
      <p>{multiplyArrowFunction(2, 3)}</p>
      {/* <p> Zad 1 : {SortedArray()}</p> */}
      <div>
        {() => {
          //deklaracja funkcji anonimowej
          return 2 * 3;
        }}
      </div>
      <div>
        {sortedArray} <br />
        {originalArray}
      </div>
      <div>{capitalizedObj.name}</div>
      <div>{originalObj.name}</div>
      <div>Fibonacci {fibonacci(4)}</div>
      <div>funkcja SUMA {suma(1, 2, 3)}</div>
    </div>
  );
}
