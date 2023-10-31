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

  //console.log(sortedUsers);

 userList[0].name = "You changed my name"
 console.log(userList)

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
