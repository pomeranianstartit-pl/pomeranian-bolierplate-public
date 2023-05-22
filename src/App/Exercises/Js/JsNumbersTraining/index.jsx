import './styles.css';

export function JsNumbersTraining() {
  let age = 18;
  let hasDriverLicense = true;
  let hasCar = true;

  function canDrive(age, hasDriverLicense, hasCar) {
    if (age >= 18 && hasDriverLicense && hasCar) {
      return 'You can drive your car!';
    } else if (age >= 18 && hasDriverLicense && !hasCar) {
      return 'You can drive a rental car.';
    } else if (age >= 18 && !hasDriverLicense) {
      return "You can't drive without a driver's license.";
    } else {
      return 'You are too young to drive.';
    }
  }

  function hasEnough(hasEnough) {
    return hasEnough;
  }

  function isStringShort(str) {
    if (str.length < 10) {
      return true;
    }
    return false;
  }

  function CircleArea(radius) {
    const area = Math.PI * radius * radius;
    return area;
  }

  function ZmianaLiczbyNaOcene(liczba) {
    switch (liczba) {
      case 1:
        return 'niedostateczny';
      case 2:
        return 'dopuszczający';
      case 3:
        return 'dostateczny';
      case 4:
        return 'dobry';
      case 5:
        return 'bardzo dobry';
      case 6:
        return 'celujący';
      default:
        return 'złe wejście';
    }
  }

  function ownMax(a, b) {
    return a >= b ? a : b;
  }

  function sumFloat(a, b) {
    const sum = a + b;
    const zaokraglonasum = Number(sum.toFixed(4));
    return zaokraglonasum;
  }

  function mathRevenge(a, b, c) {
    const delta = b * b - 4 * a * c;
    if (delta > 0) {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return `Pierwiastki to: ${x1.toFixed(2)} i ${x2.toFixed(2)}`;
    } else if (delta === 0) {
      const x = -b / (2 * a);
      return `Pierwiastek to: ${x.toFixed(2)}`;
    } else {
      return 'Nie ma pierwiastków';
    }
  }

  function getRandomCalkowita() {
    return Math.random() * 4 + 1.0;
  }

  function getRandomPrzecinek() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function getRandomRownanie(x, y) {
    return Math.floor(Math.random() * (y - x + 1)) + x;
  }

  function Srednia(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'błędne dane';
    }
    const srednia = (a + b) / 2;
    return srednia;
  }

  function absValue(number) {
    if (number < 0) {
      return -number;
    } else {
      return number;
    }
  }
  function isDivisibleBy3Or5(number) {
    return number % 3 === 0 || number % 5 === 0;
  }

  const driveMessage = canDrive(age, hasDriverLicense, hasCar);
  const enough = hasEnough(true);
  const shortString = isStringShort('abcdefdfsdfsfsdffdd');
  const circleAreaResult = CircleArea(3);
  const gradeText1 = ZmianaLiczbyNaOcene(1);
  const gradeText2 = ZmianaLiczbyNaOcene(18);
  const maxNumber = ownMax(4, 7);
  const resultSum = sumFloat(3.141592, 2.141592);
  const deltaResult1 = mathRevenge(1, -3, 2);
  const deltaResult2 = mathRevenge(2, 4, 6);
  const deltaResult3 = mathRevenge(2, 3, 4);
  const randomNumber1 = getRandomCalkowita();
  const randomNumber2 = getRandomPrzecinek();
  const randomNumber3 = getRandomRownanie();
  const sredniawynik1 = Srednia(4, 6);
  const sredniawynik2 = Srednia('2', 5);
  const absnumber = -7;
  const absValueResult = absValue(absnumber);
  console.log(absValueResult);
  const number = 6;
  const isDivisibleResult = isDivisibleBy3Or5(number);
  console.log(
    `Czy liczba ${number} jest podzielna przez 3 lub 5? ${isDivisibleResult}`
  );

  return (
    <div>
      <div>
        Zadanie 1 - na podstawie kodu uprość żagnieżdżone instrukcje warunkowe
        "if" za pomocą operatora logicznego oraz spóbuj wykorzystać odwracanie
        warunku
      </div>

      <div>
        Zadanie 2 - Napisz funkcję isStringShort, która przyjmuje string jako
        argument i zwraca wartość true, jeśli długość stringa jest mniejsza niż
        10, a false, jeśli długość stringa wynosi 10 lub przekracza 10. Funkcja
        powinna wykorzystać technikę early return.{' '}
      </div>

      <div>
        Zadanie 3 - Napisać funkcję zwracającą pole koła podając promień
      </div>

      <div>
        Zadanie 4 - Napisać funkcję zmieniającą ocenę 1-6 na jej wersję tekstową
        w przypadku innej wartości niż 1-6 zwrócić złe wejście.
      </div>

      <div>Zadanie 5 - Napisz własną impementację Math.max bez jej użycia</div>

      <div>
        Zadanie 6 - Napisz funkcję, która policzy bezpiecznie sumę 2 floatów z
        dokładnością do 4 miejsca po przecinku. Resztę obetnij bez zaogrąglenia
      </div>

      <div>
        Zadanie 7 - Napisz funkcję rozwiązującą równanie kwadratowe równiania:
        mathRevenge(a,b,c)
      </div>

      <div>
        Zadanie 8 - Napisz funkcję zwracającą losową liczbę z zakresu (1,5) -
        calkowita i po przecinku, a także z zakresu (x,y)
      </div>
      <div>
        Zadanie 9 - Napisz funkcję zwracająca średnią arytmetyczną dwóch liczb.
        Jeśli przekazane argumenty nie są liczbami, funkcja powinna zwrócić
        "błędnę dane".
      </div>
      <div>
        Zadanie 10 - Napisz funkcję zwracająca wartość bezwględną liczby za
        pomocą instrukcji warunkowej.
      </div>
      <div>
        Zadanie 11 - Napisz funkcję, która przyjmuje liczbę całkowitą i zwraca
        true, jeśli jest oona podzielna przez 3 lub 5, a false w przeciwnym
        razie.
      </div>
      <div>
        Zadanie 12 - Napisz funkcję, która sprawdzi czy x jest liczbą pierwszą.
        Jeśli podamy nie integer funkcja powinna zwrócić złą wartość.
      </div>

      <div>Zadanie 1 - Wynik funkcji canDrive: {driveMessage}</div>
      <div>Zadanie 1 - Wynik funkcji hasEnough: {enough.toString()}</div>
      <div>Zadanie 2 - Is string short? {shortString.toString()}</div>
      <div>Zadanie 3 - Pole koła o promieniu 3: {circleAreaResult}</div>
      <div>Zadanie 4 - Odpowiedź dla liczby 1: {gradeText1}</div>
      <div>Zadanie 4 - Odpowiedź dla liczby 18: {gradeText2}</div>
      <div>Zadanie 5 - Większa z liczb a i b to: {maxNumber}</div>
      <div>
        Zadanie 6 - Zaokrąglona suma po dodaniu 3.141592 i 2.141592 to{' '}
        {resultSum}
      </div>
      <div>Zadanie 7 - Wynik dla równania 1, -3, 2: {deltaResult1}</div>
      <div>Zadanie 7 - Wynik dla równania 2, 4, 6: {deltaResult2}</div>
      <div>Zadanie 7 - Wynik dla równania 2, 3, 4: {deltaResult3}</div>
      <div>Zadanie 8 - Losowa liczba po przecinku to: {randomNumber1}</div>
      <div>
        Zadanie 8 - Losowa liczba całkowita z zakresy (1,5) to: {randomNumber2}
      </div>
      <div>
        Zadanie 8 - Losowa liczba całkowita z zakresy (x,y) to: {randomNumber3}
      </div>
      <div>Zadanie 9 - Średnia arytmetyczna z 4 i 6 to: {sredniawynik1}</div>
      <div>
        Zadanie 9 - Wynik dla nieprawidłowych danych to: {sredniawynik2}
      </div>
      <div>
        Zadanie 10 - Wynik dla liczby {absnumber} to: {absValueResult};
      </div>
      <div>
        Zadanie 11 - Czy liczba {number} podzielna jest przez 3 lub 5:
        {isDivisibleResult.toString()}
      </div>
      <div>Zadanie 12 - Czy {} jest liczbą pierwszą: xx</div>
    </div>
  );
}
