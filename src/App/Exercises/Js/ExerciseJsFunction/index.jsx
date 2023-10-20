export function ExerciseJsFunction() {
  //   const originalArr = [1,3,2]
  // const sortedArr = sortImmune(originalArr)
  // console.log({
  //  originalArr, // [1, 3, 2]
  //  sortedArr// [1, 2, 3]
  // })

  function sortImmute(array) {
    const result = [...array];
    return result.sort();
  }

  const originalArr = [1, 3, 2];
  const sortedArr = sortImmute(originalArr);

  console.log({
    originalArr,
    sortedArr,
  });

  return (
    <div>
      <h1>ExerciseJsFunctions</h1>
      <h2>Ćw sortImmute</h2>
      <p>
        napisz funkcje sortImmute, ktora przyjmuje jako parametr tablice cyfr i
        zwraca ją posortowana funkcja ma nie zmieniać pierwotnej tablicy
      </p>
    </div>
  );
}
