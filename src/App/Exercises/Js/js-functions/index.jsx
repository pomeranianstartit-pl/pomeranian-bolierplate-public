import './styles.css';

export function JsFunctions() {
  // const testNumber = (param) => {
  //   if (param > 50) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  // -------- 1 wersja, 1 zad

  //return param > 50 ? true : false - jeśli usunąć true/false to i tak zadziałą booleanowsko

  // -------- 2 wersja, 1 zad koniec

  //console.log(testNumber(40));
  //console.log(testNumber(52));

  // const add2Num = (num1, num2) => {
  //   if (num1 > 50) {
  //     return num1 + num2;
  //   } else {
  //     return num1;
  //   }
  // };

  /// ------ zadanie 2, koniec

  // const planets = [
  //   'Słońce',
  //   'Merkury',
  //   'Wenus',
  //   'Ziemia',
  //   'Mars',
  //   'Jowisz',
  //   'Saturn',
  //   'Uran',
  //   'Neptun',
  // ];
  // const planetNum = 4;

  // const checkPlanets = (number) => {
  //   return planets[number];
  // };

  // -------------

  // const users = [
  //   {
  //     name: 'Kamil',
  //     age: 33,
  //     sport: 'Basketball',
  //   },
  //   {
  //     name: 'Arek',
  //     age: 22,
  //     sport: 'Volleyball',
  //   },
  //   {
  //     name: 'Igor',
  //     age: 18,
  //     sport: 'Soccer',
  //   },
  //   {
  //     name: 'Aleksander',
  //     age: 25,
  //   },
  // ];

  ///----------------
  const users = [
    {
      name: 'Kamil',
      age: 33,
      sport: 'Basketball',
      image: 'https://shorturl.at/deFU7',
    },

    {
      name: 'Arek',
      age: 22,
      sport: 'Volleyball',
      image: 'https://shorturl.at/itT37',
    },

    {
      name: 'Igor',
      age: 18,
      sport: 'Soccer',
      image: 'https://shorturl.at/vxEUW',
    },

    {
      name: 'Aleksander',
      age: 25,
    },
  ];
  ///---------------------------------

  const obj = {
    name: 'dog',
    legs: 4,
    color: 'white',
  };
  //const animal = (param) => {
  //return 'This' + param.name + 'have' + param.legs;
  //};

  // NOWOŚĆ NOWOŚĆ
  //-----------------------------------------------
  const animal = ({ name, legs }) => {
    return `This ${name} have ${legs} legs!`;
  };
  //------------------------------------------------

  const check = (usersList, userName, param) => {
    return usersList.find((item) => item.name === userName)[param];
  };

  return (
    <div>
      <ul>
        <li>
          Zad 1. Stwórz funkcję, która wyświetli true jeśli liczba będzie
          większa od 50.
        </li>
        <li>
          Zad 2. Do pierwszej funkcji dajemy drugi parametr - jeśli większa od
          50 to zwróć true, a jak nie to liczbę: tutaj był wstawiony element
          funkcji
        </li>
        <li>
          Zad 3. Z podanej tablicy planet po wpisaniu numeru indeksu w tablicy,
          {/* żeby wyświetliło planetę: {checkPlanets(planetNum)} to {planetNum}{' '} */}
          planeta od Słońca
        </li>
        <li>
          Zad 4. Użyć metody jakielkolwiek: Funkcja, która na wywołanie imienia,
          zwraca jaki uprawia sport, tablica zawiera różne elementy:
          {/* {users.map(({ name, sport = 'nie gra w nic' }) => (
            <p>
              {name} gra w {sport}
            </p>
          ))} */}
        </li>
        <li>
          {' '}
          Zadanie tablica zakomentowane Zad tablica{' '}
          <div>{check(users, 'Igor', 'sport')}</div>
          <img src={check(users, 'Igor', 'image')} alt="sport ball" />
        </li>
      </ul>
      <li>Zadanie tablica pies {animal(obj)}</li>
    </div>
  );
}
