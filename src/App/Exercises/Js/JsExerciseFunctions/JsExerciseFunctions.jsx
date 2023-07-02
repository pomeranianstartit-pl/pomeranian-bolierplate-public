export function Exercise() {
  // function sortImmune(arr) {
  //   return arr.slice().sort((a, b) => a - b);
  // }

  // function runSortImmune() {
  //   const originalArr = [1, 3, 2, 99, 100, 77, -10];
  //   const sortedArr = sortImmune(originalArr);
  //   console.log({
  //     originalArr,
  //     sortedArr,
  //   });
  // }
  // return (
  //   <div>
  //     <button onClick={() => runSortImmune()}>SortImmune</button>
  //   </div>
  // );

  // function

  function sumOfParam() {
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];

      {
        if (typeof arguments[i] != 'number') {
          return 'zle wejscie';
        }
      }
    }

    return sum;
  }
  console.log(sumOfParam(3, 5, 3));
}
