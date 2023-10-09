export function LoopsExercise() {
  //for loop
  for (let counter = 0; counter <= 5; counter++) {
    console.log('for loop counter', counter);
  }

  //while
  //let i = 1;
  //while (i < 5) {
  //console.log('while loop counter', i);
  //i++;
  // }

  //for in loop (dedicatedfor objects)
  const colors = { 1: 'red', 2: 'yellow', 3: 'black' };
  for (const colorKey in colors) {
    console.log(`key ${colorKey}, value ${colors[colorKey]}`);
  }

  return <div className="container--loops-exercise"></div>;
}
