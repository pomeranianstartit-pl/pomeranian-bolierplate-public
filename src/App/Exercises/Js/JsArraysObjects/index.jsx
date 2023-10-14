import './styles.css';

export function JsArraysObjects() {
  //funkcji map()
  //arrayys of objects
  const peopleData = [
    { id: 1, name: 'John', age: 35, adress: 'Gdańsk' },
    { id: 2, name: 'Matt', age: 25, adress: 'Warszawa' },
    { id: 3, name: 'Tim', age: 15, adress: 'Wrocław' },
    { id: 4, name: 'Tess', age: 15, adress: 'Wrocław' },
  ];

  const names = peopleData.map((person) => person.name);
  console.log('names', names);

  const birthYears = peopleData.map(
    (personObject) => new Date().getFullYear() - personObject.age
  );
  console.log('birthYears', birthYears);

  // filter specyfic data
  const over30 = peopleData.filter(
    (dataPerson) => dataPerson.age >= 30 && dataPerson.adress === 'Wroclaw'
  );
  console.log('over30', over30); //   []

  //pop()
  const numbers = [1, 2, 3, 4, 5];
  const lastValue = numbers.pop(); // Usuwa ostatni element i zwraca go
  console.log(lastValue); // Ostatnia wartość: 5
  console.log(numbers); // Tablica po usunięciu: [1, 2, 3, 4]

  // shift()
  const numbers2 = [1, 2, 3, 4, 5];
  const firstValue2 = numbers2.shift(); // Usuwa pierwszy element i zwraca go
  console.log(firstValue2); // Pierwsza wartość: 1
  console.log(numbers2); // Tablica po usunięciu: [2, 3, 4, 5]

  // push()
  const array13 = ['Dab', 'Klon', 'Jesion'];
  array13.push('Brzoza');
  console.log('array13', array13); // ['Dab', 'Klon', 'Jesion', 'Brzoza']

  // spread ... for array
  const numbers3 = [1, 2, 3, 4, 5];
  //destrukturyzacja w JS (ES6)
  const [maciej, dojlido, ...rest] = numbers3;
  console.log(maciej); // Pierwszy element: 1
  console.log(dojlido); // Drugi element: 2
  console.log(rest); // Reszta tablicy: [3, 4, 5]

  // spread for objects
  const objectTest = {
    test1: 'Maciej',
    test2: 'Dojlido',
    test3: 'Gdansk',
  };

  const { test1, test2 } = objectTest;
  console.log('test1', test1); // "Maciej"
  console.log('test2', test2); // "Dojlido"

  // merge and create new array

  const newMergedArray2d = [numbers2, ...array13]; //2d
  console.log('newMergedArray2d', newMergedArray2d);

  // concat() zachowuje sie jak zapis ponizej
  const newMergedArray1d = [...numbers2, ...array13]; //1d
  console.log('newMergedArray1d', newMergedArray1d);

  // array of arrays
  const newMergedArray3d = [numbers2, array13]; //3d
  console.log('newMergedArray3d', newMergedArray3d);

  // indexOf()
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
  const index = fruits.indexOf('Cherry');
  console.log('index', index); // 2 poniewaz "Cherry" fruits

  console.log('length of fruits', fruits.length); // 4

  //Array methods
  //find, filter, sort, join, reduce, includes, some

  const sortedPeople = peopleData.sort(
    (personA, personB) => personB.age - personA.age
  );
  console.log('sortedPeople', sortedPeople);

  //reduce (mainly used for object transforamation; agregation)

  const ages = peopleData.map((person) => person.age);
  const totalAge = ages.reduce(
    (perviousAge, currentAge) => perviousAge + currentAge,
    0
  );
  console.log(totalAge);
  const numbers_1 = [1, 2, 3, 4, 5];

  const numbers_2 = [3, 5, 7, 9];
  const sameNumbers = [numbers_1, numbers_2]; //3d
  console.log('newMergedArray3d', sameNumbers);

  // napisz funkcję, która liczy średnią z liczb w tablicy
  // averageFromArray([1, 2, 3, 4, 5, 6]) => 3.5

  const averageFromArrayV1 = (arr) => {
    let sum = 0;
    for (const element of arr) {
      sum += element;
    }
    return sum / arr.length;
  };

  const averageFromArrayV2 = (arr) => {
    return arr.reduce((acc, curr) => acc + curr) / arr.length;
  };

  console.log(averageFromArrayV1([1, 2, 3, 4, 5, 6]));

  console.log(averageFromArrayV2([1, 2, 3, 4, 5, 6]));

  //   napisz funkcję, która przyjmuje tablicę liczb i zwraca tablicę zawierającą te same liczby, ale w
  // odwróconej kolejności
  // reverseFun([1, 2, 3, 4, 5]) => [5, 4, 3, 2, 1]

  const reverseFun = (arr) => {
    return arr.reverse();
  };

  // const names2 = peopleData.map((person) => person.name);
  // console.log('names', names2);
  let people = [
    { name: 'John', age: 16 },
    { name: 'Emily', age: 26 },
    { name: 'Peter', age: 36 },
  ];

  const getNames = (arr) => {
    const names2 = arr.map((person) => person.name);
    return names2;
  };
  console.log(getNames(people));

  console.log(reverseFun([1, 2, 3, 4, 5]));
  return (
    //BEM CSS methodology
    <div className="container--arrays-objects-week4">
      <p>Działania na tablicach i obiektach:</p>
      <ul>
        {peopleData.map((personalData) => (
          <li>
            <div>Name: {personalData.name}</div>
            <div>Age: {personalData['age']}</div>
            <div>Adress: {personalData.adress}</div>
          </li>
        ))}
      </ul>
      Name: <b>{peopleData[0]['name']}</b>
      <br />
      <br />
    </div>
  );
}
