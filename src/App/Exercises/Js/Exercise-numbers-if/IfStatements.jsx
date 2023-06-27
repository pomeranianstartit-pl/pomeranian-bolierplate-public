export function IfStatements() {
  const iAmMen = true;

  const a = 11;

  // if (!iAmMen) {

  //     console.log('You are not a men!!!')

  // }

  // if else statement

  if (iAmMen) {
    console.log('Youre men');
  } else {
    console.log('Youre not a men');
  }

  // if (a < 10 || isMen) {

  // if (a < 10 && isMen) {

  if (a < 10) {
    console.log('a < 10');
  } else if (a > 10) {
    console.log('a > 10');
  } else {
    console.log('a = 10');
  }

  // switch statement

  const exp = 'Pink';

  switch (exp) {
    case 'Red':
      console.log('Kolor jest czerwony');

    case 'Blue':
      console.log('Kolor jest niebieski');

    case 'Green':
      console.log('Kolor jest zielony');

      break;

    default:
      console.log('Przykro mi nie mamy takiego koloru w bazie');
  }

  // conditional (ternary) operator

  const conditionalIf =
    a > 10
      ? console.log('Większe od 10')
      : console.log('Mniejsze lub równe 10');

  const extraConditionalIf =
    a > 10
      ? console.log('Większe od 10')
      : console.log('Mniejsze lub równe 10');

  // function example() {

  //     return (condition1 ? value1 : condition2) ? (value2

  //           : condition3) ? value3

  //           : value4;

  //   }

  // const result1 = iAmMen && console.log('Youre men');

  // const result2 = !iAmMen && console.log('Youre a women');

  const result1 = iAmMen && 'Youre man';

  const result2 = !iAmMen && 'Youre women';

  return (
    <div>
      {result1 === 'Youre man' && <div>Jesteś mężczyzną</div>}

      {result2 === 'Youre women' && <div>Jesteś kobietą</div>}

      {iAmMen && <div>Jesteś mężczyzną</div>}

      {!iAmMen && <div>Jesteś kobietą</div>}
    </div>
  );
}
