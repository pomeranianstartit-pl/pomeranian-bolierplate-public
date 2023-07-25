import './styles.css';
import React, { useState } from 'react';

// Boolean
// 1.
export function Exercise() {
  let age = 18;
  let hasDriverLicense = true;
  let hasCar = true;
  function canDrive(age, hasDriverLicense, hasCar) {
    if (age < 18) {
      return 'You are too young to drive.';
    }

    if (!hasDriverLicense) {
      return "You can't drive without a driver's license.";
    }

    return hasCar ? 'You can drive your car!' : 'You can drive a rental car.';
  }

  function hasEnough(hasEnough) {
    return hasEnough ? true : false;
  }
  canDrive(18, true, true);
  hasEnough(true);

  //2. Funkcja isStringShor
  function isStringShort(word) {
    return word.lenght >= 10 ? false : true;
  }

  // const [inputValue, setInputValue] = useState('');
  // const [result, setResult] = useState('');

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const checkIsStringShort = () => {
  //   const word = inputValue;
  //   const resultMessage = isStringShort(word)
  //     ? "It's a short string"
  //     : "It's not a short string";
  //   setResult(resultMessage);
  // };

  console.log(isStringShort('abcde'));
  //3. Funkcja zwracająca promiń koła
  function circleArea(num) {
    return Math.PI * (num * num);
  }
  console.log(`The area of the circle is ${circleArea(3)}`);

  //4. Funkcja zmieniająca ocene 1-6
  function zmianaLiczbyNaOcenę(num) {
    switch (num) {
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
  console.log(zmianaLiczbyNaOcenę(3));
  //5. Własna implementacja Math.max bez jej użycia.

  function ownMax(num1, num2) {
    if (num1 > num2) console.log(num1);
    else if (num2 > num1) console.log(num2);
    else console.log('są równe');
  }

  console.log(`${ownMax(4, 7)}`)

  //6. Funkcja która policzy bezpiecznie sumę 2 floatów z dokładnościa do 4 miejsca po przeciunku
  function sumFloat(num1, num2) {
    return (num1 + num2).toFixed(4);
  }

  console.log(sumFloat(3.141592, 2.141592));

  //7. Napisz funkcje rozwiązująco równianie kwadratowe
  let pierwiastek1, pierwiastek2;

  function mathRevenge(a, b, c) {
    if (a === 0) return;

    let delta = b * b - 4 * a * c;

    console.log(`Delta to ${delta}`);
    if (delta > 0) {
      pierwiastek1 = (-b - Math.sqrt(delta)) / (2 * a);
      pierwiastek2 = (-b + Math.sqrt(delta)) / (2 * a);
      console.log(`Pierwiastki to ${pierwiastek1}, ${pierwiastek2}`);
    } else if (delta === 0) {
      pierwiastek1 = -b / (2 * a);
      console.log(`Pierwiatek to ${pierwiastek1}`);
    } else if (delta < 0) {
      console.log('Nie ma pierwiastków');
    }
  }
  mathRevenge(2, 8, -10);
  //8. Funkcja zwracająca lososą liczbę z zakresu (1,5)
  function getRandom(num1, num2) {
    return Math.random() * (num2 - num1 + 1) + num1;
  }
  console.log(getRandom(1, 5));

  //9. Średnia arytmetyczna.
  function arithmeticMean(num1, num2) {
    return (typeof num1 == 'number') & (typeof num2 == 'number')
      ? (num1 + num2) / 2
      : 'Błędne dane';
  }
  console.log(arithmeticMean('', 3));

  //10. Absolute number.
  function absoluteValue(num) {
    if (num > 0) return num;
    else if (num < 0) return num * -1;
    else return 0;
  }
  console.log(absoluteValue(-3));

  //11. Czy jest podzielna przez 3 lub 5
  function isNumberDividedBy3or5(number) {
    return number % 3 === 0 || number % 5 === 0;
  }

  console.log(isNumberDividedBy3or5(2));

  //12.
  function isPrimeNumber(number) {
    if (number < 2) return "It's not a prime number";

    let is_prime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        is_prime = false;
        break;
      }
    }

    return is_prime ? "It's a prime number" : "It's not a prime number";
  }
  console.log(isPrimeNumber(1));

  return (
    <div>

    </div>
  );
}
