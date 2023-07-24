import './styles.css';

// Boolean
export function NumbersTraining() {

  let age = 18;
  let hasDriverLicense = true;
  let hasCar = true;
  function canDrive(age, hasDriverLicense, hasCar) {
    if (age >= 18 && hasDriverLicense && hasCar) console.log('You can drive your car!');
    if (age >= 18 && hasDriverLicense && !hasCar) console.log('You can drive rental car!');
    if (age >= 18 && !hasDriverLicense) console.log('You cant drive without license');
    if (age < 18) console.log('You too young');

  }
  canDrive(20, false, true);


  const txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // const sln = txt.length;
  // console.log(sln);


  //zad 2
  function isStringShort(params) {
    return params.lenght < 10 ? 'jest krótki' : 'jest długi'
  }

  console.log(isStringShort(txt));

  // zad 3
  function circleArea(params) {

    return Math.PI * params ** 2
  }

  console.log(circleArea(2));

  // zad 4

  function changeRating(rating) {

    if (rating === 1) console.log('niedostateczna');
    if (rating === 2) console.log('mierna');
    console.log('zle dane');
  }

  changeRating(4);

  // zad 5


  function ownMax(a, b) {

    if (a > b) console.log(a + 'jest większe');
    if (a < b) console.log(b + 'jest większe');
  }


  ownMax(10, 15)

  //zad 6


  function sumFloat(a, b) {

    console.log((a + b).toFixed(4));
  }

  sumFloat(10.262323353, 20);

  //zad 7


  function maxRevenge(a, b, c) {
    let delta = b ** 2 - 4 * a * c

    console.log(delta);

    if (delta > 0) console.log((-b - Math.sqrt(delta)) / (2 * a), (-b + Math.sqrt(delta)) / (2 * a));
    if (delta === 0) console.log(-b / 2 * a);
    if (delta < 0) console.log(' bark rozwiązania');
  }

  maxRevenge(1, 4, 3)


  // zad 8


  console.log(Math.ceil(Math.random() * 10 / 2));


  const randomNo = Math.ceil(Math.random() * 10 / 2)

  function getRandom() {
    const randomNo = Math.ceil(Math.random() * 10 / 2)

    console.log(randomNo);
    return randomNo;
  }
  function getRandom2(a, b) {
    const randomNo2 = (Math.random() * (b - a) + a)

    console.log(randomNo2);
    return randomNo2;
  }
  getRandom2(1, 5);


  // zad 9
  function avg(a, b) {
    if (isNaN(a) || isNaN(b)) console.log('niepoprawne wartosci');
    console.log((a + b) / 2);
  }
  avg(7, 3)

  // zad 10

  function absoluteValue(x) {
    if (x >= 0) console.log(x);
    if (x < 0) console.log(x * (-1));
  }
  absoluteValue(-10)

  //zad 11

  function moduloReturn(x) {
    if (x % 3 === 0 || x % 5 === 0) { console.log(true) }
    else { console.log(false); }
  }

  moduloReturn(15);

  //zad 12

  function isPrime(n) {

    if (n <= 1) return false;
    for (let i = 2; i < n; i++)
      if (n % i === 0) return false
      else return true;
  }
  isPrime(11)
    ? console.log("Prime")
    : console.log("Not Prime");


  function hasEnough(hasEnough) {
    if (hasEnough) {
      return true;
    } else {
      return false;
    }
  }

  hasEnough(true);

  return (
    <div>
      <div>
        <h2>Random</h2>
        {/* <button type='submit' onClick={() => getRandom()}>Click</button> */}
        <p>{randomNo}</p>
      </div>
    </div>
  );
}

