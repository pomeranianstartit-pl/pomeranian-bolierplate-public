export const CwiczeniaFunkcje = () => {
  // sumOfParam(1,2,3, 'not a number',5,6) -> "złe wejście"

  const sortImmune = (arr) => [...arr].sort((a, b) => a - b);

  const sumOfParam = (...args) => {
    // weź parametry
    // weź parametry

    // let sum = 0;

    // for (let i = 0; i < args.length; i++) {
    //   const current = args[i];
    //   if (typeof current !== 'number') {
    //     // sprawdz ich typ (albo forem) albo uzyj filter,
    //     return 'złe wejście'; // jesli forem to mozesz od razu zwrocic bload
    //   }

    //   sum = sum + current; // dodaj je do siebie (albo forem) albo reducem
    // }

    // return sum;

    // sprawdz ich typ (albo forem) albo uzyj filter,
    const filteredArguments = args.filter(
      (current) => typeof current === 'number'
    );

    if (filteredArguments.length !== args.length) {
      return 'złe wejście';
    }

    // dodaj je do siebie (albo forem) albo reducem
    // zwroc wartosc
    return filteredArguments.reduce((acc, current) => acc + current, 0);

    // jeśli filtrem to sprawdz czy wynikowa arrejka ma taka samą długosc jak arajka parametrów, zwroc blad jesli nie
  };

  function runSumOfParam() {
    const goodSumOfParams = sumOfParam(
      1,
      2,
      3,
      4,
      5,
      6,
      -1,
      -2,
      -3,
      -4,
      -5,
      -6
    );
    const badSumOfParams = sumOfParam(1, 2, 3, 'not a number', 5, 6);
    console.log({
      goodSumOfParams,
      badSumOfParams, // [1, 2, 3]
    });
  }

  function runSortImmune() {
    const originalArr = [1, 3, 2, 99, 100, 77, -10];
    const sortedArr = sortImmune(originalArr);
    console.log({
      originalArr, // [1, 3, 2]
      sortedArr, // [1, 2, 3]
    });
  }

  return (
    <div>
      <button onClick={() => runSortImmune()}>SortImmune</button>
      <button onClick={() => runSumOfParam()}>sumOfParam</button>
    </div>
  );
};
