import './styles.css';

export const Exercise = () => {
  // 1. Na podstawie kodu, uprość zagnieżdżone instrukcje warunkowe "if" za pomocą operatora logicznego oraz spróbuj wykorzystać odwracanie warunku

  // 1a. Dane wejściowe
  let age = 18;
  let hasDriverLicense = true;
  let hasCar = true;

  // 1b. funkcja
  function canDrive(age, hasDriverLicense, hasCar) {
    if (age >= 18 && hasDriverLicense && hasCar) {
      return 'You can drive your car!';
      // jeśli (warunki) to otrzymamy określony zwrot
    } else if (age >= 18 && hasDriverLicense && !hasCar) {
      return 'You can drive a rental car!';
    } else if (age >= 18 && !hasDriverLicense && !hasCar) {
      return "You can't drive without a driver's license!";
    } else if (age <= 18 && !hasDriverLicense && !hasCar) {
      return 'You are too young';
    }
  }
  // 2. Napisz funkcję isStringShort, która przyjmuje strungi jako agument i zwraca wartość true, jeśli długość strina jest mniejsza niż 10, a false, jeśli długość stringa wynosi 10 lub przekracza 10. Funkcja powinna wykorzystywać technikę early return

  // isStringShort ('abcde') => true

  function isStringShort(str) {
    if (str.length < 10) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isStringShort('ab'));
  console.log(isStringShort('abcde'));
  console.log(isStringShort('abcdefghij'));

  // 3. Napisz funkcję zawierającą pole koła podając promień

  function circleArea(radius) {
    // 3a dane wejściowe zawarte w funkcji - pi oraz wzór na pole
    const pi = Math.PI;
    const area = pi * radius * radius;
    // 3b  jako return wynik działania
    return area;
  }

  console.log(circleArea(3));
  console.log(circleArea(4));

  // 4. Napisz funkcję zmieniającą ocene 1-6 na jej wersję tekstową w przypadku innej wartości niż 1-6 zwróć uwagę na złe wejście

  function zmianaLiczbyNaOcenę(ocena) {
    switch (ocena) {
      case 1:
        return 'Niedostateczny';
      case 2:
        return 'Dopuszczający';
      case 3:
        return 'Dostateczny';
      case 4:
        return 'Dobry';
      case 5:
        return 'Bardzo Dobry';
      case 6:
        return 'Celujący';
      default:
        return 'Złe wejście';
    }
  }

  console.log(zmianaLiczbyNaOcenę(4));
  console.log(zmianaLiczbyNaOcenę(7));
  // 5. Napisz własną implementację Math.max bez użycia jej

  // function ownMax(a, b) {
  //   let suma = a + b;
  //   return suma.toFixed(4);
  // }

  // 6. Napisz funkcję która policzy bezpiecznie sumę 2 floatów z dokładnością do 4 miejsca po przecinku. Reszte odejmij bez zaokrąglania

  function sumFloat(a, b) {
    let suma = a + b;
    return suma.toFixed(4);
  }

  console.log(sumFloat(4, 6.55486555));

  // 7. Napisz funkcję rozwiązującą równanie kwadratowe równania/
  // mathRevange(a, b, c) => pierwiastki to: lub, pierwstek to lub, nie ma pierwiastków

  function solveQuadraticEquation(a, b, c) {
    const delta = b * b - 4 * a * c;
  
    if (delta > 0) {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return `Pierwiastki to: x1 = ${x1}, x2 = ${x2}`;
    } else if (delta === 0) {
      const x = -b / (2 * a);
      return `Pierwiastek to: x = ${x}`;
    } else {
      return 'Nie ma pierwiastków';
    }

    
  }

  console.log(solveQuadraticEquation(1, -3, 2));  // Pierwiastki to: x1 = 2, x2 = 1
console.log(solveQuadraticEquation(1, -4, 4));  // Pierwiastek to: x = 2
console.log(solveQuadraticEquation(2, 1, 3));   // Nie ma pierwiastków
  return (
    <>
      <div>
        
        <p className="task">
          1. Na podstawie kodu, uprość zagnieżdżone instrukcje warunkowe "if" za
          pomocą operatora logicznego oraz spróbuj wykorzystać odwracanie
          warunku{' '}
        </p>
        <p> {canDrive(18, true, true)}</p>
      </div>

      <div>
        <p className="task">
         2.  Napisz funkcję isStringShort, która przyjmuje strungi jako agument i
          zwraca wartość true, jeśli długość strina jest mniejsza niż 10, a
          false, jeśli długość stringa wynosi 10 lub przekracza 10. Funkcja
          powinna wykorzystywać technikę early return
        </p>
        <p> {isStringShort('abcde')}</p>
      </div>

      <div>
        <p className="task">
          3. Napisz funkcję zawierającą pole koła podając promień
        </p>
        <p> {circleArea(3)}</p>
      </div>

      <div>
        <p className="task">
          4. Napisz funkcję zmieniającą ocene 1-6 na jej wersję tekstową w przypadku innej wartości niż 1-6 zwróć uwagę na złe wejście
        </p>
        <p> {zmianaLiczbyNaOcenę(4)}</p>
      </div>

      <div>
        <p className="task">
          5. Napisz własną implementację Math.max bez użycia jej
        </p>
        <p> {zmianaLiczbyNaOcenę(4)}</p>
      </div>
      


    </>
  );
};
