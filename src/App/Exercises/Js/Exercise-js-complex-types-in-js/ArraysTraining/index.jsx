const userList = [
  { id: 1, name: 'Anna', age: 30 },
  { id: 2, name: 'Jan', age: 25 },
  { id: 3, name: 'Katarzyna', age: 35 },
  { id: 4, name: 'Piotr', age: 28 },
  { id: 5, name: 'Ewa', age: 32 },
];

export function ExerciseArraysTraining() {
  // Przykładowe użycie funkcji find() - znajdź użytkownika o określonym ID
  const foundUser = userList.find((user) => user.id === 3);

  // Przykładowe użycie funkcji filter() - filtruj użytkowników starszych niż 30 lat lub rownych 30 lat
  const filteredUsers = () => userList.filter((user) => user.age >= 30);

  // Przykładowe użycie funkcji sort() - sortuj użytkowników według wieku
  const sortedUsers = [...userList].sort((a, b) => a.age - b.age);

  // Przykładowe użycie funkcji map - połącz imiona użytkowników w jedną ciąg znaków
  const joinedNames = userList.map((user) => user.name);

  // Przykładowe użycie funkcji reduce() - oblicz średnią wieku użytkowników
  const averageAge =
    userList.reduce((total, user) => total + user.age, 0) / userList.length;

  // how to extract particular char from string
  const tekst = 'JavaScript';

  console.log(tekst[0]);
  console.log(tekst[1]);
  console.log(tekst[2]);

  //console.log(sortedUsers);

  //Clone object array test2;
  const test2 = { id: 1, name: 'Anna', age: 30 };

  console.log('test2', test2);

  const newUserList = { ...test2 };
  newUserList.name = 'You changed my name';
  console.log('newUserList', newUserList);
  //End Clone object array test2;

  // Object.assign
  const obiekt1 = { a: 1, b: 2 };
  const obiekt2 = { c: 3, d: 4 };
  const obiekt3 = Object.assign({}, obiekt1, obiekt2); // Łączy obiekt1 i obiekt2 w nowy obiekt3

  console.log(obiekt3); // result { a: 1, b: 2, c: 3, d: 4}

  // Object.entries
  const obiekt = { a: 1, b: 2, c: 3 };
  const entries = Object.entries(obiekt);

  console.log(entries); // Wynik: [["a", 1], ["b", 2], ["c", 3]]

  // Object.values
  const object = { a: 1, b: 2, c: 3 };
  const values = Object.values(object);

  console.log(values); // Wynik: [1, 2, 3]

  // Object.keys
  const object2 = { a: 1, b: 2, c: 3 };
  const keys2 = Object.keys(object2);

  console.log(keys2); // Wynik: [a, b, c]

  return (
    <div className="container--arrays-training">
      <h1>Przykład funkcji wbudowanych w JS: </h1>
      <p>Znalezionu uzytkownik: {foundUser.name}</p>
      <p>
        Uzytkownicy starsi lub równi 30 lat:{' '}
        {filteredUsers().map((user) => user.name)}
      </p>
    </div>
  );
}
