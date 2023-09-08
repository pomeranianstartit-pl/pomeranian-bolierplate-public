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

  // if age >= 18 && hasDriverLicense && hasCar ? console.log('You can drive your car!') : console.log('You are too young to drive');

  const isCarDriver =
    age >= 18 && hasDriverLicense && hasCar
      ? 'You can drive your car'
      : 'You are too young to drive';
  console.log(isCarDriver);

  // 1. -----------------------------------------------------------------
  function Driving(age, hasDriverLicense, hasCar) {
    if (age >= 18 && hasDriverLicense && hasCar) {
      console.log('You can drive your car');
    } else if (age >= 18 && hasDriverLicense) {
      console.log('You can drive a rental car.');
    } else if (age >= 18 && hasCar) {
      console.log("You can't drive without a driver's license.");
    } else {
      console.log('You are too young to drive');
    }
  }

  Driving(19, false, true);

  // 2 ------------------------------------------------------------------
  let word = 'slobardzooooowo';
  function isStringShort(word) {
    if (word.length < 10) {
      return true;
    } else {
      return false;
    }
  }

  console.log(isStringShort(word));

  // 3 --------------------------------------------------------------------
  let r = 3;
  function circleArea(r) {
    return Math.PI * r ** 2;
  }

  console.log(circleArea(r));

  // 4 --------------------------------------------------------------------

  let liczba = 10;

  function zmianaLiczbyNaOcene(liczba) {
    switch (liczba) {
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
        console.log('złe wejście');
    }
  }
  zmianaLiczbyNaOcene(liczba);

  // 5 ---------------------------------------------------------------------------
  const x = 1;
  const y = 4;
  function ownMax(x, y) {
    if (x > y) return x;
    if (y > x) return y;
  }

  console.log(ownMax(x, y));

  // 6 ------------------------------------------------------------------------------
  const z = 3.141592;
  const n = 2.141592;

  function sumFloat(z, n) {
    return (z + n).toFixed(4);
  }

  console.log(sumFloat(z, n));

  // 7 ---------------------------------------------------------------------------------
  const a = 1;
  const b = 4;
  const c = 3;

  function mathRevenge(a, b, c) {
    let delta = b ** 2 - 4 * a * c;
    let x0 = -b / (2 * a);
    let x1 = (-b - Math.sqrt(delta)) / (2 * a);
    let x2 = (-b + Math.sqrt(delta)) / (2 * a);

    if (delta > 0) console.log('Pierwiastki to: ' + `${x1}` + ' i ' + `${x2}`);
    if ((delta = 0)) console.log('Pierwiastek to: '`${x0}`);
    if (delta < 0) console.log('nie ma pierwiastkow');
  }

  mathRevenge(1, 4, 3);
  // 8 ---------------------------------------------------------------------------------
  const f = 1;
  const g = 5;

  function getRandom(f, g) {
    let s = 5 * Math.random();
    return Math.floor(s);
  }

  console.log(getRandom(f, g));

  const i = 6;
  const j = 9;

  function get2Random(i, j) {
    let s = (j - i + 1) * Math.random() + i;
    return Math.floor(s);
  }

  console.log(get2Random(i, j));
  // 9 ---------------------------------------------------------------------------------
  const m = 5;
  const o = 6;

  function meanValue(m, o) {
    if (!isNaN(m) && !isNaN(o) == true) {
      return (m + o) / 2;
    } else {
      return 'Błędne dane';
    }
  }
  console.log(meanValue(m, o));

  // 10 ------------------------------------------------------------------------------------
  const valueToAbs = -2;

  function AbsVal(valueToAbs) {
    if (valueToAbs < 0) return Math.abs(valueToAbs);
  }

  console.log(AbsVal(valueToAbs));

  //11 --------------------------------------------------------------------------------------
  const p = 19;

  function If3Or5(p) {
    if (p % 3 == 0 || p % 5 == 0) {
      return true;
    } else {
      return false;
    }
  }

  console.log(If3Or5(p));

  // 12 ----------------------------------------------------------------------------------

  const liczbap = 19.77;

  function isPrime(liczbap) {
    //const ispierwsza = true;
    if (!Number.isInteger(liczbap)) console.log('Błędne dane');

    for (let i = 2; i < Math.floor(liczbap / 2); i++) {
      if (liczbap % i == 0) {
        return false;
      }
    }
    return true;
  }

  console.log(isPrime(liczbap));
};
