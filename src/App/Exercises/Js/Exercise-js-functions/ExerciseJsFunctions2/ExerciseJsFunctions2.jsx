import './styles.css';

export const ExerciseJsFunctions2 = () => {
  //   2. stwórz funkcję, która przyjmuje dowolną liczbę argumentów za pomocą "...args" i zwraca ich sumę
  // sumOfParam(1,2,3,4,5,6) -> x
  // sumOfParam(1,2,3, 'not a number',5,6) -> "złe wejście"

  function sumArguments(...args) {
    let sum = 0; //utworzenie zmiennej sum i nadanie wartości zero

    for (let i = 0; i < args.length; i++) {
      //dla... od pierwszego (0);  dla dlugosci tablicy; dla wartości przed zwiększeniem
      const current = args[i]; // przypisanie kazdego argumentu do zmiennej do sprawdzenia typu
      if (typeof current !== 'number') {
        // sprawdenie forem czy jest właściwy typ
        return 'bad input!'; //zwrotka błedu
      }

      sum = sum + current; //dodawanie forem (który też wcześniej sparwdza typ argumentów)
    }
    return sum;
  }
  sumArguments();
  return <div>Change me X</div>;
};
