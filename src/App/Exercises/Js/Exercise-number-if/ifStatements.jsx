import React from 'react';

export function IfStatements() {
  const iAmMan = true;
  const a = 10;

  if (iAmMan) {
    console.log('Youre men');
  } else {
    console.log('Youre not men');
  }

  if (a < 10) {
    console.log('a <10');
  } else if (a > 10) {
    console.log('a >10');
  } else {
    console.log('a=10');
  }
  const exp = 'Pink';
  switch (exp) {
    case 'Red':
      console.log('Kolor jest czerwony');
      break;
    case 'Blue':
      console.log('Kolor jest niebieski');
      break;
    case 'Green':
      console.log('Kolor jest zielony');
      break;
    default:
      console.log('brak koloru');
  }
  // conditional (ternary) operator
  //   const conditionalIf = a;
  //   a > 9 ? console.log('Wieksze od 9') : 'mniejsze lub równe 9';

  //   const result1 = iAmMan && 'Youre a man';
  //   const result2 = !iAmMan && 'Youre a woman';

  return (
    <div>
      {/* {result1 === 'Youre man'<div>Jesteś mężczyzną</div>}
    {result2 === 'Youre not man'<div>Jesteś kobietą</div>}

    {iAmMan && <div>Jesteś mężczyzną</div>}
    {!iAmMan && <div>Jesteś kobietą</div>} */}
    </div>
  );
}
