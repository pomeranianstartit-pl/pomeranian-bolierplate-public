import './styles.css';
import { ExerciseBox } from '../../../Components/ExerciseBox';

export const JsNumbersTraining = () => {
  // zadanie 1a
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
    }
    return 'You are too young to drive.';
  }

  // Zadanie 1b
  function hasEnough(hasEnough) {
    return hasEnough ? true : false;
  }

  console.log(canDrive(18, true, true));
  console.log(hasEnough(true));

  //  Zadanie 2
  function isStringShort(string) {
    if (string.length < 10) {
      return true;
    }
    return false;
  }
  console.log(isStringShort('Jenny'));
  console.log(isStringShort('Jenny is funny'));

  // Zadanie 3
  function circleArea(r) {
    return Math.PI * Math.pow(r, 2);
  }
  console.log(circleArea(3));

  // Zadanie 4
  function zmianaLiczbyNaOcenę(grade) {
    if (grade === 1) {
      return 'niedostateczny';
    }
    if (grade === 2) {
      return 'dopuszczający';
    }
    if (grade === 3) {
      return 'dostateczny';
    }
    if (grade === 4) {
      return 'dobry';
    }
    if (grade === 5) {
      return 'bardzo dobry';
    }
    if (grade === 6) {
      return 'celujący';
    }
    return 'złe wejście';
  }

  console.log(zmianaLiczbyNaOcenę(5));
  console.log(zmianaLiczbyNaOcenę(10));
  // zadanie 5
  function showMax(a, b) {
    return a > b ? a : b;
  }

  console.log(showMax(3, 7));
  // Zadanie 6
  function sumFloat(a, b) {
    let sum = a + b;
    return sum.toFixed(4);
  }
  console.log(sumFloat(3.141592, 2.141592));

  // Zadanie 7

  // Zadanie 8
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  console.log(getRandom(1, 5));
  // Zadanie 8 A
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  console.log(getRandom(1, 5));
  // Zadanie 8 B
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  console.log(getRandom(10, 80));
  // Zadanie 9
  function getAverage(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Błędne dane';
    }
    return (a + b) / 2;
  }
  console.log(getAverage('10', 80));
  console.log(getAverage(10, 80));

  //Zadanie 10
  function getUncodiValue(number) {
    if (number >= 0) {
      return number;
    } else {
      let string = number.toString();
      string = string.slice(1);
      return +string;
    }
  }
  // -number podwojna negacja liczby -- to plus
  console.log(getUncodiValue(-6));

  // Zadanie 11
  function ifNumberIs(number) {
    if (number % 3 === 0 || number % 5 === 0) {
      return true;
    }
    return false;
  }
  console.log(ifNumberIs(13));
  //Zadanie 12
  function isFirst(number) {
    if (!Number.isInteger(number)) {
      return 'Zła wartość';
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(isFirst(7));

  return (
    <div>
      <h2>bal ba</h2>
      <ul>
        <li>
          <ExerciseBox task="Napisz funkcję isStringShort, która przyjmuje string jako argument i zwraca wartość true, jeśli długość stringa jest mniejsza niż 10, a false, jeśli długość stringa wynosi 10 lub przekracza 10. Funkcja powinna wykorzystać technikę early return." />
        </li>
      </ul>
    </div>
  );
};
