import './styles.css';

export function Js_Booleans_Numbers() {
  let age = 18;
  let hasDriverLicense = true;
  let hasCar = true;

  function canDrive(age, hasDriverLicense, hasCar) {
    if (age >= 18 && hasDriverLicense && hasCar) {
      return 'You can drive a car!';
    } else if (!hasCar) {
      return 'You can drive a rental car.';
    } else if (!hasDriverLicense) {
      return "you can't drive without a driver's license.";
    } else {
      return 'You are too young to drive.';
    }
  }

  function hasEnough(hasEnough) {
    return hasEnough ? 'true' : 'false';
  }

  function isStringShort(string) {
    return string.length < 10 ? 'true' : 'false';
  }

  function circleRadius(radius) {
    return 2 * radius * Math.PI;
  }

  function zmianaLiczbyNaOcene(grade) {
    if (grade == 1) {
      return 'Niedostateczny';
    } else if (grade == 2) {
      return 'Dopuszczający';
    } else if (grade == 3) {
      return 'Dostateczny';
    } else if (grade == 4) {
      return 'Dobry';
    } else if (grade == 5) {
      return 'Bardzo dobry';
    } else if (grade == 6) {
      return 'Celujący';
    } else {
      return 'Złe wejście';
    }
  }

  function ownMax(x, y) {
    return x >= y ? x : y;
  }

  function sumFloat(x, y) {
    return parseFloat((x + y).toFixed(4));
  }

  function mathRevenge(a, b, c) {
    const delta = b ** 2 - 4 * a * c;

    if (delta > 0) {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return `Równanie ma dwa pierwiastki, są to ${x1} oraz ${x2}.`;
    } else if (delta == 0) {
      let x = (-b / 2) * a;
      return `Równanie ma jeden pierwiastek, który wynosi ${x}.`;
    } else {
      return `Równianie nie ma pierwiastków.`;
    }
  }

  function getRandom() {
    return Math.random() * 4 + 1;
  }

  function getRandom_A() {
    return Math.floor(Math.random() * 5) + 1;
  }

  function getRandom_B(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function arithmeticMean(a, b) {
    if (isNaN(a) == false && isNaN(b) == false) {
      return (a + b) / 2;
    } else {
      return `Błędne dane`;
    }
  }

  function absoluteValue(x) {
    if (isNaN(x) == true) {
      return `Podana wartość nie jest liczbą!`;
    } else if (x >= 0) {
      return x;
    } else {
      return Math.abs(x);
    }
  }

  function isDivisible3or5(x) {
    if (Number.isInteger(x) && (x % 3 == 0 || x % 5 == 0)) {
      return `true`;
    } else {
      return `false`;
    }
  }

  // function isTheFirstNumber(x) {
  //   if (Number.isInteger(x) == true) {
  //     return `Liczba jest całkowita`;
  //   } else {
  //     return `Podana wartość nie jest liczbą całkowitą!`;
  //   }
  // }

  function isPrime(num) {
    if (num <= 1) {
      return `Liczba nie jest liczbą pierwszą`;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return `Liczba nie jest liczbą pierwszą`;
      }
    }
    return `Liczba jest liczba pierwszą`;
  }

  return (
    <div>
      <h4>
        {' '}
        1. Na podstawie kodu uprość zagnieżdżone instrukcje warunkowe IF za
        pomocą operatora logicznego oraz spróbuj wykorzystać odwracanie warunku
      </h4>
      <div>
        <p>
          {' '}
          <i>"Mam 18 lat, z prawem jazdy i własnym autem"</i> -{' '}
          <b>{canDrive(19, true, true)}</b>
        </p>

        <p>
          {' '}
          <i>"Mam 21 lat, bez prawa jazdy, ale z własnym autem"</i> -{' '}
          <b>{canDrive(21, false, true)}</b>
        </p>

        <p>
          {' '}
          <i>"Mam 38 lat, z prawem jazdy, ale bez własnego auta"</i> -{' '}
          <b>{canDrive(38, true, false)}</b>
        </p>

        <p>
          {' '}
          <i>"Mam 16 lat, mam prawo jazdy i własne auto"</i> -{' '}
          <b>{canDrive(1, true, true)}</b>
        </p>
      </div>
      <hr style={{ border: '1px dashed grey' }} />
      <div>
        <p>
          <i>"Mam 10 lat"</i> - <b>{hasEnough(false)}</b>
        </p>
        <p>
          <i>"Mam 33 lata"</i> - <b>{hasEnough(true)}</b>
        </p>
      </div>

      <hr />

      <h4>
        {' '}
        2. Napisz funkcję <i>isStringShort</i>, która przyjmuje 'string' jako
        argument i zwraca wartość true, jeśli długość <i>stringa</i> jest
        mniejsza niż 10, a false, jeśli długość <i>stringa</i> wynosi 10 lub
        przekracza 10. Funkcja powinna wykorzystać technikę <i>early return'</i>
      </h4>
      <div>
        <p>Masło: {isStringShort('masło')}</p>
        <p>Lokomotywa: {isStringShort('lokomotywa')}</p>
        <p>Kodowanie w weekend: {isStringShort('lokomotywa')}</p>
      </div>

      <hr />
      <h4> 3. Napisz funkcję zwracającą pole koła podając promień</h4>
      <p>Pole koła o promieniu 2 równa się: {circleRadius(2)}</p>
      <p>Pole koła o promieniu 5 równa się: {circleRadius(5)}</p>
      <p>Pole koła o promieniu 10 równa się: {circleRadius(10)}</p>

      <hr />
      <h4>
        {' '}
        4. Napisz funkcję zmieniającą ocenę 1-6 na jej wersję tekstową; w
        przypadku innej wartości niż 1-6 zwróć "złe wejście"
      </h4>
      <p> Wpisana ocena: 1 // Słownie: {zmianaLiczbyNaOcene(1)}</p>
      <p> Wpisana ocena: 2 // Słownie: {zmianaLiczbyNaOcene(2)}</p>
      <p> Wpisana ocena: 3 // Słownie: {zmianaLiczbyNaOcene(3)}</p>
      <p> Wpisana ocena: 4 // Słownie: {zmianaLiczbyNaOcene(4)}</p>
      <p> Wpisana ocena: 5 // Słownie: {zmianaLiczbyNaOcene(5)}</p>
      <p> Wpisana ocena: 6 // Słownie: {zmianaLiczbyNaOcene(6)}</p>
      <p> Wpisana ocena: 18 // Słownie: {zmianaLiczbyNaOcene(18)}</p>

      <hr />
      <h4>
        {' '}
        5. Napisz własną implementację <i>Math.max</i> bez jej użycia
      </h4>
      <p>
        Która liczba jest większa, 2 czy 5? <b>Odp.: {ownMax(2, 5)}</b>
      </p>
      <p>
        Która liczba jest większa, -12 czy -55? <b>Odp.: {ownMax(-12, -55)}</b>
      </p>
      <p>
        Która liczba jest większa, 0 czy 0? <b> Odp.: {ownMax(0, 0)}</b>
      </p>

      <hr />
      <h4>
        {' '}
        6. Napisz funkcję, która policzy bezpiecznie sumę 2 floatów z
        dokładnością do 4 miejsca po przecinku. Reszte obetnij bez zaokrąglania.
      </h4>
      <p>
        W przybliżeniu do czterech miejsc po przecinku suma liczb 3.236743 oraz
        6.4325663 wynosi: <b>{sumFloat(3.236743, 6.4325663)}</b>
      </p>
      <p>
        W przybliżeniu do czterech miejsc po przecinku suma liczb -15.87272 oraz
        3.49 wynosi: <b>{sumFloat(-15.87272, 3.49)}</b>
      </p>
      <p>
        W przybliżeniu do czterech miejsc po przecinku suma liczb 63.58379292
        oraz 9.392759 wynosi: <b>{sumFloat(63.58379292, 9.392759)}</b>
      </p>

      <hr />
      <h4> 7. Napisz funkcję rozwiązującą równanie kwadratowe</h4>
      <p>
        Równanie I:{' '}
        <b>
          2x<sup>2</sup>+8x-10
        </b>{' '}
        - {mathRevenge(2, 8, -10)}
      </p>
      <p>
        Równanie II:{' '}
        <b>
          x<sup>2</sup>-2x+1
        </b>{' '}
        - {mathRevenge(1, -2, 1)}
      </p>
      <p>
        Równanie III:{' '}
        <b>
          x<sup>2</sup>+2x+6
        </b>{' '}
        - {mathRevenge(1, 2, 6)}
      </p>

      <hr />
      <h4> 8. Napisz funkcję zwracającą losową liczbę z zakresu (1,5)</h4>
      <p>
        I próba: <b>{getRandom()}</b>
      </p>
      <p>
        II próba: <b>{getRandom()}</b>
      </p>
      <p>
        III próba: <b>{getRandom()}</b>
      </p>
      <p>
        IV próba: <b>{getRandom()}</b>
      </p>
      <p>
        V próba: <b>{getRandom()}</b>
      </p>

      <hr style={{ border: '1px dashed grey' }} />
      <h4>
        {' '}
        8A. Napisz funkcję zwracającą losową liczbę całkowitą z zakresu (1,5)
      </h4>
      <p>
        I próba: <b>{getRandom_A()}</b>
      </p>
      <p>
        II próba: <b>{getRandom_A()}</b>
      </p>
      <p>
        III próba: <b>{getRandom_A()}</b>
      </p>
      <p>
        IV próba: <b>{getRandom_A()}</b>
      </p>
      <p>
        V próba: <b>{getRandom_A()}</b>
      </p>
      <hr style={{ border: '1px dashed grey' }} />
      <h4>
        {' '}
        8B. Napisz funkcję zwracającą losową liczbę całkowitą z zakresu (x,y),
        gdzie liczby x i y należą do zbioru
      </h4>
      <p>
        Szukamy licz całkowitych ze zbioru 5-10: <b>{getRandom_B(5, 10)}</b>
      </p>
      <p>
        Szukamy licz całkowitych ze zbioru 5-10: <b>{getRandom_B(5, 10)}</b>
      </p>
      <p>
        Szukamy licz całkowitych ze zbioru 5-10: <b>{getRandom_B(5, 10)}</b>
      </p>
      <p>
        Szukamy licz całkowitych ze zbioru 5-10: <b>{getRandom_B(5, 10)}</b>
      </p>
      <p>
        Szukamy licz całkowitych ze zbioru 5-10: <b>{getRandom_B(5, 10)}</b>
      </p>

      <hr />
      <h4>
        9. Napisz funkcję zwracającą średnią arytmetyczną dwóch liczb Jeśli
        przekazane argumenty nie są liczbami, funkcja powinna zwrócić "Błędne
        dane"
      </h4>
      <p>
        Średnia arytmetyczna 14 i 18 wynosi: <b>{arithmeticMean(14, 18)}</b>
      </p>
      <p>
        Średnia arytmetyczna -34 i 3 wynosi: <b>{arithmeticMean(-34, 3)}</b>
      </p>
      <p>
        Średnia arytmetyczna 'kota' i 4 wynosi:{' '}
        <b>{arithmeticMean('kot', 4)}</b>
      </p>
      <hr />
      <h4>
        10. Napisz funkcję zwracającą wartość bezwzględną liczby za pomocą
        instrukcji warunkowej.
      </h4>
      <p>
        Wartość bezwzględna z liczby -13 to: <b>{absoluteValue(-13)}</b>
      </p>
      <p>
        Wartość bezwzględna z liczby 4 to: <b>{absoluteValue(4)}</b>
      </p>
      <p>
        Wartość bezwzględna z liczby 'osiem' to: <b>{absoluteValue('osiem')}</b>
      </p>
      <hr />
      <h4>
        11. Napisz funkcję, która przyjmuje liczbę całkowitą i zwraca true,
        jeśli jest ona podzielna przez 3 lub 5, a false w przeciwnym razie.
      </h4>
      <p>
        Czy liczba 7 spełnia warunki? <b>{isDivisible3or5(7)}</b>
      </p>
      <p>
        Czy liczba 21 spełnia warunki? <b>{isDivisible3or5(21)}</b>
      </p>
      <p>
        Czy liczba 48 spełnia warunki? <b>{isDivisible3or5(48)}</b>
      </p>
      <hr />
      <h4>
        12. Napisz funkcję, która sprawdzi, czy x jest liczbą pierwszą. Jeśli
        podamy nie-intiger, funkcja powinna zwrócić "Zła wartość".
      </h4>
      {/* <p>
        Czy 0 jest liczbą pierwszą? <b>{isTheFirstNumber(0)}</b>
      </p>
      <p>
        Czy 2 jest liczbą pierwszą? <b>{isTheFirstNumber(2)}</b>
      </p>
      <p>
        Czy 15 jest liczbą pierwszą? <b>{isTheFirstNumber(15)}</b>
      </p>
      <p>
        Czy 'pies' jest liczbą pierwszą? <b>{isTheFirstNumber('pies')}</b>
      </p>
      <p>
        Czy 4.6 jest liczbą pierwszą? <b>{isTheFirstNumber(4.6)}</b>
      </p>
      <p>
        Czy 71 jest liczbą pierwszą? <b>{isTheFirstNumber(71)}</b>
      </p> */}
    </div>
  );
}
