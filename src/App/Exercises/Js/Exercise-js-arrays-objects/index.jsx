import { Loops } from './Loops';
import { StringMethods } from './StringMethods';
import './styles.css';

export function ExerciseObjectsArrays() {
  // funkcji map()

  // arrays of objects
  const peopleData = [
    { id: 1, name: 'John', age: 35, adress: 'Gdansk' },
    { id: 2, name: 'Matt', age: 25, adress: 'Warszawa' },
    { id: 3, name: 'Tim', age: 15, adress: 'Wroclaw' },
    { id: 4, name: 'Tess', age: 15, adress: 'Wroclaw' },
    { id: 5, name: 'Tess2', age: 17, adress: 'Lodz' },
  ];

  const arrowFunction = () => 'testset';

  // map will create new array
  const names = peopleData.map((person) => person.name);
  console.log('names', names); //new array

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
      <Loops />
      <StringMethods />
    </div>
  );
}
