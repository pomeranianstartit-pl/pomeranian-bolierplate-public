import './styles.css';

// Boolean
export function Exercise() {
  // 1.
  // Napisz funkcje sortImmute, ktora przyjmuje jako parametr tablice cyfr i zwraca ją posortowana
  // funkcja ma nie zmieniać pierwotnej tablicy

  const sortImmute = (arr) => arr.slice().sort((a, b) => a - b);

  // const sortImmute = (arr) => {
  //   return arr.slice().sort((a, b) => a - b)
  // };

  // const sortImmute = (arr) => {
  //   const sortedArray = arr.slice().sort((a, b) => a - b)

  //   return sortedArray;
  // };

  const arr = [1, 3, 2, 5, 4];
  const sortedArr = sortImmute(arr);

  console.log(arr);
  console.log(sortedArr);

  //2 ///////Napisz funkcje która jako parametr przyjmuje obiekt, przechodzi po wszystkich jego polach i kapitalizuje im pierwszą literę. funkcja nie zmienia oryginalnego obiektu

  function capitalizeFirstLetter(obj) {
    // Check if the input is an object
    if (typeof obj !== 'object' || obj === null) {
      throw new Error('Input must be an object');
    }

    // Create a new object to store the capitalized values
    const newObj = {};

    // Iterate through the properties of the original object
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // Check if the value is a string before capitalizing
        const value = obj[key];
        const capitalizedValue =
          typeof value === 'string'
            ? value.charAt(0).toUpperCase() + value.slice(1)
            : value;
        // Copy the capitalized value to the new object with the same key
        newObj[key] = capitalizedValue;
      }
    }

    return newObj;
  }

  // Example usage:
  const originalObj = { name: 'john', surname: 'wick', age: 1000 };
  const changedObject = capitalizeFirstLetter(originalObj);

  console.log({ originalObj, changedObject });

  //3////// Napisz funkcje która jako parametr przyjmuje tablice obiektów natomiast zwraca tablice z wyliczoną wartością średnią zamiast ocen.
  //funkcja ma nie zmieniać pierwotnej tablicy

  function calcAvr(primaryArray) {
    // Create a new array to store objects with calculated averages
    const scoreArray = [];

    // Iterate through each object in the primaryArray
    for (const obj of primaryArray) {
      const { id, name, grades } = obj;

      // Calculate the average of grades
      const average =
        grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

      // Create a new object with id, name, and average
      const newObj = { id, name, average };

      // Push the new object into the scoreArray
      scoreArray.push(newObj);
    }

    return scoreArray;
  }

  // Example usage:
  const primaryTable = [
    { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1, 2, 3] },
    { id: 2, name: 'Olivia', grades: [3, 2, 4, 6, 1, 1, 3] },
    // Add more objects if needed...
  ];

  const scoreArray = calcAvr(primaryTable);

  console.log({ primaryTable, scoreArray });

  // 2.
  // funkcja zwraca podany w argumencie element ciągu Fibonacciego
  // napisać rekurencyjnie

  const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  console.log(fibonacci(4));

  // 3.
  // stwórz funkcję calculateWithChar, która przyjmuje jako argument jeden operator matematyczne
  // '+', '-', '*', '/'
  // funkcja calculateWithChar ma zwracać funkcję, która przyjmuje dwie liczby jako argumenty

  const calculateWithChar = (operator) => {
    return (num1, num2) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'złe wejście';
      }

      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num1 / num2;
        case '%':
          return num1 % num2;
        default:
          return 'zły znak';
      }
    };
  };

  console.log(calculateWithChar('+')(1, 2));
  console.log(calculateWithChar('*')(1, 2));
  console.log(calculateWithChar('/')(1, 2));
  console.log(calculateWithChar('---')(1, 2));
  console.log(calculateWithChar('+')('abc', 2));

  return <div>Test</div>;
}
