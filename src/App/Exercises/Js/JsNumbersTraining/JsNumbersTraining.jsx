/*import './styles.css';

export const Exercise = () => {
  //1

  const age = 18;
  let hasDriverLicense = true;
  let hasCar = true;
  let hasEnough = true;

  if (!age >= 18 && !hasDriverLicense && !hasCar)
    console.log('You can drive your car!');
  if (!age >= 18 && !hasDriverLicense && !hasCar(false))
    console.log('You can drive a rental car!');
  if (!age >= 18 && !hasDriverLicense(false))
    console.log('You cant drive without a drivers license.');
  if (age <= 18) console.log('You are too young to drive');

  if (hasEnough(true)) console.log('True');

  //2

  const string  10;
  if (isStringShort  )
};
// true if < 10
// false if >= 10*/
import './styles.css';

export function JsNumbersTraining() {
  // let age = 18;

  // let hasDriverLicense = true;

  // let hasCar = true;

  function canDrive(age, hasDriverLicense, hasCar) {
    // if (age >= 18) {

    //   if (hasDriverLicense) {

    //     if (hasCar) {

    //       return 'You can drive your car!';

    //     } else {

    //       return 'You can drive a rental car.';

    //     }

    //   } else {

    //     return "You can't drive without a driver's license.";

    //   }

    // } else {

    //   return 'You are too young to drive.';

    // }

    // let result = '';

    let result = '';

    if (age >= 18 && hasDriverLicense && hasCar) {
      result = 'You can drive your car!';
    } else if (age >= 18 && hasDriverLicense) {
      result = 'You can drive a rental car.';
    } else if (age >= 18) {
      result = "You can't drive without a driver's license.";
    } else {
      result = 'You are too young to drive.';
    }

    return console.log(result);
  } //1

  function hasEnough(hasEnough) {
    // if (hasEnough) {

    //   return true;

    // } else {

    //   return false;

    // }

    const getEnough = hasEnough ? true : false;

    return console.log(getEnough);
  }

  function isStringShort(string) {
    if (string.length < 10) {
      return console.log(true);
    } else {
      return console.log(false);
    }
  } //2

  function circleArea(value) {
    const result = Math.PI * value * value;

    console.log(result);
  } //3

  function zmianaLiczbyNaOcene(value) {
    let result = '';

    switch (value) {
      case 1:
        result = 'Niedostateczny';

        break;

      case 2:
        result = 'Dopuszczający';

        break;

      case 3:
        result = 'Dostateczny';

        break;

      case 4:
        result = 'Dobry';

        break;

      case 5:
        result = 'Bardzo Dobry';

        break;

      case 6:
        result = 'Ceujący';

        break;

      default:
        result = 'Złe wejście';
    }

    return console.log(result);
  } //4

  function ownMax(number1, number2) {
    let result = number1 > number2 ? number1 : number2;

    return console.log(result);
  } //5

  function sumFloat(number1, number2) {
    const result =
      parseFloat(number1.toFixed(4)) + parseFloat(number2.toFixed(4));

    return console.log(result);
  } //6

  function mathRevenge(a, b, c) {
    let result = 0;

    // b^2-4ac

    const delta = b * b - 4 * a * c;

    // console.log(delta);

    const deltaSqrt = Math.sqrt(delta);

    if (delta > 0) {
      const x1 = (-1 * b - deltaSqrt) / (2 * a);

      const x2 = (-1 * b + deltaSqrt) / (2 * a);

      result = 'Pierwiastki to: ' + x1 + ' oraz ' + x2;
    }

    if (delta === 0) {
      const x1 = (-1 * b) / (2 * a);

      result = 'Pierwiastek to: ' + x1;
    }

    if (delta < 0) {
      result = 'Nie ma pierwiastków';
    }

    return console.log(result);
  } //7

  function getRandom() {
    const result = Math.random();

    return console.log(result);
  } //8

  function getRandomScope(numberMin, numberMax) {
    const result = Math.floor(
      Math.random() * (numberMax - numberMin + 1) + numberMin
    );

    // const random = Math.random();

    // console.log(random);

    // const result = random * (numberMax - numberMin + 1) + numberMin;

    return console.log(result);
  }

  function getAVG(number1, number2) {
    const result = (number1 + number2) / 2;

    return console.log(result);
  } //9

  function getABS(number1) {
    const result = number1 >= 0 ? number1 : Math.abs(number1);

    return console.log(result);
  } //10

  function podzielnePrzez(number, podzielna1, podzielna2) {
    number = parseInt(number);

    let result = false;

    if (number % podzielna1 === 0 || number % podzielna2 === 0) {
      result = true;
    }

    return console.log(result);
  } //11

  function isPrimer(number) {
    let prime = true;

    let result = 'Zła wartość';

    if (parseInt(number) !== parseFloat(number)) {
      return console.log(result);
    }

    if (number === 1) {
      prime = false;
    } else if (number > 1) {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          prime = false;

          break;
        }
      }
    } else {
      return console.log(result);
    }

    result = prime ? 'tak' : 'nie';

    return console.log(result);
  } //12

  return (
    <div>
      <div>
        <p>1. canDrive(18, true, true)</p>

        <button onClick={() => canDrive(18, true, true)}>canDrive</button>
      </div>

      <div>
        <p> hasEnough(true)</p>

        <button onClick={() => hasEnough(true)}>hasEnough</button>

        <hr />
      </div>

      <div>
        <p>2. isStringShort('abcdeabcdeabcde')</p>

        <button onClick={() => isStringShort('abcdeabcdeabcde')}>
          isStringShort
        </button>

        <hr />
      </div>

      <div>
        <p>3. circleArea(3)</p>

        <button onClick={() => circleArea(3)}>circleArea</button>

        <hr />
      </div>

      <div>
        <p>4. zmianaLiczbyNaOcene(2)</p>

        <button onClick={() => zmianaLiczbyNaOcene(2)}>
          zmianaLiczbyNaOcene
        </button>

        <hr />
      </div>

      <div>
        <p>5. ownMax(4 ,7)</p>

        <button onClick={() => ownMax(9, 7)}>ownMax</button>

        <hr />
      </div>

      <div>
        <p>6. sumFloat(3.141592 ,2.141512)</p>

        <button onClick={() => sumFloat(3.141592, 2.141592)}>ownMax</button>

        <hr />
      </div>

      <div>
        <p>7.mathRevenge(1, 2, -3)</p>

        <button onClick={() => mathRevenge(1, 2, -3)}>mathRevenge</button>

        <hr />
      </div>

      <div>
        <p>8. getRandom</p>

        <button onClick={() => getRandom()}>getRandom</button>

        <hr />
      </div>

      <div>
        <p>getRandomScope</p>

        <button onClick={() => getRandomScope(5, 10)}>getRandomScope</button>

        <hr />
      </div>

      <div>
        <p>9. getAVG</p>

        <button onClick={() => getAVG(3, 6)}>getAVG</button>

        <hr />
      </div>

      <div>
        <p>10. getABS</p>

        <button onClick={() => getABS(-3)}>getABS</button>

        <hr />
      </div>

      <div>
        <p>11. podzielnePrzez </p>

        <button onClick={() => podzielnePrzez(27, 3, 5)}>podzielnePrzez</button>

        <hr />
      </div>

      <div>
        <p>12. isPrimer </p>

        <button onClick={() => isPrimer(7)}>isPrimer</button>

        <hr />
      </div>
    </div>
  );
}
