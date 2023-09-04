export const Exercise = () => {
  let age = 18;
  let hasDriverLicense = true;
  let hasCar = true;

  function canDrive(age, hasDriverLicense, hasCar) {
    if (age >= 18) {
      if (hasDriverLicense) {
        if (hasCar) {
          return 'You can drive your car!';
        } else {
          return 'You can drive a rental car.';
        }
      } else {
        return "You can't drive without a driver's license.";
      }
    } else {
      return 'You are too young to drive.';
    }
  }
  function hasEnough(hasEnough) {
    if (hasEnough) {
      return true;
    } else {
      return false;
    }
  }
  canDrive(18, true, true);
  hasEnough(true);

  // Ex2

  function isStringShort(string) {
    if (string.length < 10) return true;
    if (string.length >= 10) return false;
  }
  console.log(isStringShort('abcdejhguyfus'));

  //Ex3

  const liczbaPi = 3.14;
  let R = 3;
  const x = R * R;

  console.log(liczbaPi * x);

  //

  //Ex4
  // ocena 1-6 jeśli inne wartości zwrócić złe wejście

  const ocena = 6;

  switch (ocena) {
    case 1:
      console.log('niedostateczny');
      break;
    case 2:
      console.log('dopuszczający');
      break;
    case 3:
      console.log('dostateczny');
      break;
    case 4:
      console.log('dobry');
      break;
    case 5:
      console.log('bardzo dobry');
      break;
    case 6:
      console.log('celujący');
      break;
    default:
      console.log('Złe wejście');
  }

  //

  //Ex5
  // ownMax(4,7) -> 7 napisz własną wersję bez użycia math
  // Math.max - wywołaj metodę odpowiedzialną za zwrócenie największej liczby z podanych

  function ownMax(x, y) {
    if (x > y) console.log(x);
    if (x < y) console.log(y);
    if (x === y) console.log(x);
  }

  ownMax(4, 9);

  //Ex6
  //suma 2 floatów z dokładnością do 4 miejsca po przecinku . Reszte obetnij do 4 miejsc po przecinku

  function sumFloat(x, y) {
    const endValue = x + y;
    console.log(endValue.toFixed(4));
  }

  sumFloat(3.141592, 2.141592);

  // -----toFixed() - zaokrągla liczbę do podanej liczby miejsc po przecinku
  // const valueToFixed = 3.14159265359;
  // console.log(valueToFixed.toFixed(2)); // 3.14

  //Ex7
  // funkcja rozwiązująca równania kwadratowe ... mathRevenge(a,b,c) -> pierwiastki to:...lub pierwiastek to.... , lub nie ma pierwiastów
  // y = ax^2+bx+c, Delta=b^2-4ac
  function mathRevenge(a, b, c) {
    let delta;

    delta = b * b - 4 * a * c;
    const deltaSqrt = Math.sqrt(delta);
    // console.log(delta);
    // console.log(deltaSqrt);
    const x1 = (-b - deltaSqrt) / (2 * a);
    const x2 = (-b + deltaSqrt) / (2 * a);
    const x0 = -b / (2 * a);
    // console.log(x1);
    // console.log(x2);
    // console.log(x0);

    if (delta > 0) {
      console.log('pierwiastki to: ' + x1.toFixed(2) + ' i ' + x2.toFixed(2));
    } else if (delta == 0) {
      console.log('pierwiastek to: ' + x0);
    } else {
      console.log('nie ma pierwiatsków');
    }
  }

  // delta=0 jedno miejsce zerowe "x0"; delta<0 nie ma miejsc zerowych

  mathRevenge(1, -11, 12);

  //Ex8
  // liczba losowa z zakresu 1-5

  //getRandom() -> 1.232324

  // randomValue = math.random();
  // console.log(randomValue);
  function getRandom(x) {
    const randomValue = x + Math.round(Math.random() * 4);
    console.log(randomValue);
  }

  getRandom(1);

  function getRandom1(x, y) {
    const randomValue1 =
      Math.round(Math.random() * x) + Math.round(Math.random() * y);
    console.log(randomValue1);
  }

  getRandom1(11, 22);

  //Ex9
  //funkcja zwracająca średnią arytmetyczną , jeśli przekazane argumenty nie są liczbami powinna zwrócić "błędna dane"

  function arithmeticAverage(x, y) {
    x = 3;
    y = 5;

    if (isNaN(x) | isNaN(y)) {
      console.log('Błędne dane');
    } else {
      console.log((x + y) / 2);
    }
  }

  // console.log(100 / 'abc');
  // if ((x , y)) {
  //console.log((x + y) / 2);

  arithmeticAverage();

  //Ex10
  //napisz funkcję zwracającą wartość bezwzględną liczby za pomocą instrukcji warunkowej
  function mathAbs(x) {
    x = -3;
    console.log(Math.abs(x));
  }
  mathAbs();

  //

  //Ex11
  //funkcja przyjmuje liczbę całkowitą i zwraca true, jeśli jest podzielna przez 3 i 5 , a false w przeciwnym razie
  function mathRound(x) {
    const xValue = Math.round(x);

    if (xValue % 3 == 0) {
      console.log(xValue % 3);
      console.log(true);
    } else if (xValue % 5 == 0) {
      console.log(xValue % 5);
      console.log(true);
    } else {
      console.log(false);
    }
  }
  mathRound(1.7);
  //
  // RESZTA Z DZIELENIA ( % )
  //
  // console.log(5 % 3); // 2

  //

  // Ex12
  // napisać fcje która sprawdzi czy x jest liczbą pierwszą . jeśli podamy nie integer funkcja zwróci zła wartość
  function isPrime(x) {}

  isPrime();
  // isPrime(7) -> tak
  // isPrime(4) -> Nie
  // isPrime(7.2) -> zła wartość

  //
};
