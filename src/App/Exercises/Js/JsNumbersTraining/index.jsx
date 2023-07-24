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
  function getRandom() {
    const numbers = [1, 2, 3, 4, 5];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
  }

  // Example:
  console.log(getRandom()); // Output: A random number from the group (1, 2, 3, 4, 5)

  //exercise 8B

  function getRandom(x, y) {
    return Math.floor(Math.random() * (y - x + 1)) + x;
  }

  // Example:
  console.log(getRandom(1, 5)); // Output: A random whole number between 1 and 5 (e.g., 3, 1, 5, etc.)
}
