import './styles.css';

export function Exercise() {
  // 1 exercise

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

  console.log(canDrive(18, true, true));
  console.log(hasEnough(true));

  //function canDrive(age, hasDriverLicense, hasCar) {
  //return age >= 18
  // ? hasDriverLicense
  // ? hasCar
  //   ? 'You can drive your car!'
  //  : 'You can drive a rental car.'
  // : "You can't drive without a driver's license."
  //: 'You are too young to drive.';
  // }

  // function hasEnough(hasEnough) {
  //  return hasEnough;
  // }

  console.log(canDrive(18, true, true));
  console.log(hasEnough(true));

  // 2 Exercise

  function isStringShort(string) {
    if (string.length < 10) {
      return true;
    }

    // else return false;

    if (string.lenght >= 10) return false;
  }

  // 3 exercise

  const radius = 3;
  const pi = Math.PI;
  const areaOfCircle = (radius, pi) => {
    return pi * radius * radius;
  };
  console.log('The area of the circle is: ' + areaOfCircle(radius, pi));

  // 4 exercise

  function convertToGradeText(gradeNumber) {
    switch (gradeNumber) {
      case 1:
        return 'First Grade';
      case 2:
        return 'Second Grade';
      case 3:
        return 'Third Grade';
      case 4:
        return 'Fourth Grade';
      case 5:
        return 'Fifth Grade';
      case 6:
        return 'Sixth Grade';
      default:
        return 'Wrong entry';
    }
  }

  // Example usage:
  console.log(convertToGradeText(1)); // Output: "First Grade"
  console.log(convertToGradeText(3)); // Output: "Third Grade"
  console.log(convertToGradeText(6)); // Output: "Sixth Grade"
  console.log(convertToGradeText(7)); // Output: "Wrong entry"

  //exercise 5

  function ownMax(a, b) {
    return a > b ? a : b;
  }

  // Examples:
  console.log(ownMax(4, 7)); // Output: 7
  console.log(ownMax(-3, 8)); // Output: 8
  console.log(ownMax(0, -2)); // Output: 0

  //exercise 6

  function add() {
    result.innerHTML = (
      parseFloat('3.141592') + parseFloat('2.141592')
    ).toFixed(4);
  }

  console.log(
    'Result:',
    (parseFloat('3.141592') + parseFloat('2.141592')).toFixed(4)
  );

  //exercise 7

  function mathRevenge(a, b, c) {
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return `Square roots are ${root1.toFixed(2)} and ${root2.toFixed(2)}.`;
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return `Square root is ${root.toFixed(2)}.`;
    } else {
      return 'There is no square root (complex roots).';
    }
  }

  // Examples:
  console.log(mathRevenge(1, -5, 6)); // Output: "Square roots are 3.00 and 2.00."
  console.log(mathRevenge(1, -2, 1)); // Output: "Square root is 1.00."
  console.log(mathRevenge(2, 3, 4)); // Output: "There is no square root (complex roots)."

  // exercise 8

  function getRandom() {
    return Math.floor(Math.random() * 5) + 1;
  }

  // Example:
  console.log(getRandom()); // Output: A random number between 1 and 5 (e.g., 3, 1, 5, etc.)

  // exercise 8A
  function getRandomA() {
    const numbers = [1, 2, 3, 4, 5];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
  }

  // Example:
  console.log(getRandomA()); // Output: A random number from the group (1, 2, 3, 4, 5)

  //exercise 8B

  function getRandomB(x, y) {
    return Math.floor(Math.random() * (y - x + 1)) + x;
  }

  // Example:
  console.log(getRandomB(1, 5)); // Output: A random whole number between 1 and 5 (e.g., 3, 1, 5, etc.)

  //exercise 9

  function calculateAverage(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return 'Incorrect data';
    }

    return (num1 + num2) / 2;
  }

  // Test cases
  console.log(calculateAverage(10, 20)); // Output: 15
  console.log(calculateAverage(5, 7.5)); // Output: 6.25
  console.log(calculateAverage('hello', 7)); // Output: Incorrect data

  //exercise 10

  function absoluteValue(number) {
    if (number >= 0) {
      return number;
    } else {
      return -number;
    }
  }

  // Test cases
  console.log(absoluteValue(5)); // Output: 5
  console.log(absoluteValue(-10)); // Output: 10
  console.log(absoluteValue(0)); // Output: 0

  //exercise 11
  function isDivisibleBy3Or5(number) {
    return number % 3 === 0 || number % 5 === 0;
  }

  // Test cases
  console.log(isDivisibleBy3Or5(9)); // Output: true (9 is divisible by 3)
  console.log(isDivisibleBy3Or5(10)); // Output: true (10 is divisible by 5)
  console.log(isDivisibleBy3Or5(7)); // Output: false (7 is not divisible by 3 or 5)
  console.log(isDivisibleBy3Or5(15)); // Output: true (15 is divisible by both 3 and 5)

  //exercise 12

  function isPrime(x) {
    if (!Number.isInteger(x)) {
      return 'Incorrect value';
    }

    if (x <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) {
        return false;
      }
    }

    return true;
  }

  // Test cases
  console.log(isPrime(7)); // Output: true (7 is a prime number)
  console.log(isPrime(15)); // Output: false (15 is not a prime number)
  console.log(isPrime(2)); // Output: true (2 is a prime number)
  console.log(isPrime(0)); // Output: false (0 is not a prime number)
  console.log(isPrime(3.5)); // Output: Incorrect value (not an integer)
}
