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
  const tekst = 'Javascript';
  console.log(tekst[1]);
  console.log(tekst[2]);
  console.log(tekst[3]);

  //console.log(sortedUsers);

  const test2 = { id: 1, name: 'Anna', age: 30 };
  console.log('test2', test2);
  const newUserLise = { ...test2 };
  newUserList[0].name = 'You changed my name';
  console.log('newUserList', newUserList);

  // nadpisywanie wartości przy odwolaniu sie do klucza obiektu
  //userList[0].name = 'You changed my name';
  // console.log('userList', userList);

  // const newUserList = { ...userList };
  // newUserList[0].name = 'You changed my name';
  // console.log('newUserList', newUserList);

  // OBJECTS //
  const obiekt1 = { a: 1, b: 2 };
  const obiekt2 = { c: 3, d: 4 };
  const obiekt3 = Object.assign({}, obiekt1, obiekt2); // laczy obiekty 1 i 2 w jeden obiekt3
  console.log(obiekt3);

  const object = { a: 1, b: 2, c: 3, d: 4 };
  const values = Object.values(object);
  const keys = Object.keys(object);
  const entries = Object.entries(object);

  console.log(values);
  console.log(keys);
  console.log(entries);

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
