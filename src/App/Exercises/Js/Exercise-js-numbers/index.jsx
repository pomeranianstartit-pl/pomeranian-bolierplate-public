import './styles.css';

export function Exercise() {
  let age = 18;
  let hasCar = true;
  let hasDriverLicense = true;

  function canDrive(age, hasDriverLicense, hasCar) {
    if (age >= 18 && hasDriverLicense == true && hasCar == true) {
      return 'You can drive your car!';
    } else if (age >= 18 && hasDriverLicense == true && hasCar == false) {
      return 'You can drive a rental car.';
    } else if (age >= 18 && hasDriverLicense == false) {
      return "You can't drive without a driver's license.";
    } else {
      return 'You are too young to drive.';
    }
  }
  return (
    <div>
      {' '}
      <div>{canDrive(age, hasDriverLicense, hasCar)}</div>
      <div>{circleArea(2)}</div>
      <div>{isStringShort(string)}</div>
      <div>{ocena(5)}</div>
    </div>
  );
}
let string = 'qwert';
function isStringShort(string) {
  if (string.length < 10) {
    return true;
  } else {
    return false;
  }
  return <div>{isStringShort(string)}</div>;
}

// let radius = 10
function circleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

function ocena(wynik) {
  if (wynik == 6) {
    return 'sześć';
  } else if (wynik == 5) {
    return 'pięć';
  } else if (wynik == 4) {
    return 'cztery';
  } else if (wynik == 3) {
    return 'trzy';
  } else if (wynik == 2) {
    return 'dwa';
  } else {
    return 'jeden';
  }
}
