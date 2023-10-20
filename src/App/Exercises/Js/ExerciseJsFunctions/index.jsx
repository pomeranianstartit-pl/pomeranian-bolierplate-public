export function Exercise() {
  const sortImmune = (parametr) => {
    return parametr.sort((a, b) => a - b);
  };

  const originalArr = [1, 3, 2];
  const sortedArr = sortImmune(originalArr);

  console.log({
    originalArr, // [1, 3, 2]
    sortedArr, // [1, 2, 3]
  });

  return (
    <div>
      <h1>ExerciseJsFunctions</h1>
      <h3>Ćw sortImmute</h3>
      <p>
        Napisz funkcję sortImmute, która przyjmuje jako parametr tablice cyfr i
        zwraca ją posortowaną, funkcja ma nie zmieniać pierwotnej tablicy
      </p>
    </div>
  );
}
