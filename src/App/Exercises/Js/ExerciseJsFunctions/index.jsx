export const ExerciseJsFunctions = () => {
  const sortImmune = (parametr) => {
    const result = [...parametr];
    return result.sort((a, b) => a - b);
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
      <h2>Ćw sortImmute</h2>
      <p>
        napisz funkcje sortImmute, ktora przyjmuje jako parametr tablice cyfr i
        zwraca ją posortowana funkcja ma nie zmieniać pierwotnej tablicy
      </p>
    </div>
  );
};
