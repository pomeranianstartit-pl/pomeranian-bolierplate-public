import './styles.css';

export function Js_Booleans_Numbers() {
  let age = 18;
  let hasDriverLicense = true;
  let hasCar = true;

  function canDrive(age, hasDriverLicense, hasCar) {
    if (age >= 18 && hasDriverLicense && hasCar) {
      return 'You can drive a car!';
    } else if (!hasCar) {
      return 'You can drive a rental car.';
    } else if (!hasDriverLicense) {
      return "you can't drive without a driver's license.";
    } else {
      return 'You are too young to drive.';
    }
  }

  function hasEnough(hasEnough) {
    return hasEnough ? 'true' : 'false';
  }

  function isStringShort(string) {
    return string.length < 10 ? 'true' : 'false';
  }

  return (
    <div>
      <h4>
        {' '}
        1. Na podstawie kodu uprość zagnieżdżone instrukcje warunkowe IF za
        pomocą operatora logicznego oraz spróbuj wykorzystać odwracanie warunku
      </h4>
      <div>
        <p>
          {' '}
          <i>"Mam 18 lat, z prawem jazdy i własnym autem"</i> -{' '}
          <b>{canDrive(19, true, true)}</b>
        </p>

        <p>
          {' '}
          <i>"Mam 21 lat, bez prawa jazdy, ale z własnym autem"</i> -{' '}
          <b>{canDrive(21, false, true)}</b>
        </p>

        <p>
          {' '}
          <i>"Mam 38 lat, z prawem jazdy, ale bez własnego auta"</i> -{' '}
          <b>{canDrive(38, true, false)}</b>
        </p>

        <p>
          {' '}
          <i>"Mam 16 lat, mam prawo jazdy i własne auto"</i> -{' '}
          <b>{canDrive(1, true, true)}</b>
        </p>
      </div>
      <hr />
      <div>
        <p>
          <i>"Mam 10 lat"</i> - <b>{hasEnough(false)}</b>
        </p>
        <p>
          <i>"Mam 33 lata"</i> - <b>{hasEnough(true)}</b>
        </p>
      </div>

      <h4>
        {' '}
        2. Napisz funkcję <i>isStringShort</i>, która przyjmuje 'string' jako
        argument i zwraca wartość true, jeśli długość <i>stringa</i> jest
        mniejsza niż 10, a false, jeśli długość <i>stringa</i> wynosi 10 lub
        przekracza 10. Funkcja powinna wykorzystać technikę <i>early return'</i>
      </h4>
      <div>
        <p>Masło: {isStringShort('masło')}</p>

        <p>Lokomotywa: {isStringShort('lokomotywa')}</p>

        <p>Kodowanie w weekend: {isStringShort('lokomotywa')}</p>
      </div>
      <hr />
      <h4> 3. Napisz funkcję zwracającą pole koła podając promień</h4>
    </div>
  );
}
