export function LoopsExercise() {
  //for loop
  for (let counter = 1; counter <= 5; counter++) {
    console.log('for loop counter', counter);
  }

  //while
  let i = 1;

  while (i < 5) {
    console.log('while loop counter', i);
    i++;
  }

  //for in loop (loop dedicated for objects)
  const colors = { color1: 'red', color2: 'yellow', color3: 'black' };

  for (const colorKey in colors) {
    console.log(`key ${colorKey}, value ${colors[colorKey]}`); // template string
  }

  return <div className="container--loops-exercise"></div>;
}
