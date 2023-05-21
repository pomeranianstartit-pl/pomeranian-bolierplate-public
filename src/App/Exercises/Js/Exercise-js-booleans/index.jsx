import './styles.css';

export function Exercise() {
  const isValid = true;

  const passStyles = true;

  const checkStatement = isValid && true; // true
  const checkStatement_1 = false && isValid; // false
  const checkStatement_2 = false && true && false; // false
  const checkStatement_3 = false && true && false; // false
  const checkStatement_4 = false || (true && false); // false
  let x = 10;

  let y = 10;

  let z = 10;

  let w = 10;

  let s = 10;

  // x = x + 5;
  x += 5;

  // y = y * 5;
  y *= 5;

  // z = z / 5;
  z /= 5;

  // w **= w ** 5;
  w **= 5;

  // s = s % 5;
  s %= 5;

  // negacja
  // const notValid = !isValid;

  return (
    <>
      {isValid && (
        <div
          style={{
            backgroundColor: passStyles ? 'red' : 'black',
          }}
        >
          JS booleans
        </div>
      )}
    </>
  );
}
