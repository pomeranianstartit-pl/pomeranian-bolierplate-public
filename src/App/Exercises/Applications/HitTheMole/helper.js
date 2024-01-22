export const generateArrayOfFields = (length) => {
  return Array.from({ length }, (_, i) => ({ id: i + 1, hasClicked: false }));
};

export const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * max) + 1;
};
//funkcja generująca tablicę z dwoma argumentami w jakim zakresie i ile ma być tych lcizb w tablicy(liczby się nie powtarzają w tej tablicy)
export const generateUniqueNumbers = (range, count) => {
  let numbers = [];

  while (numbers.length < count) {
    let randomNumber = Math.floor(Math.random() * range) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
};
//funkcja zamieniająca seukndy na minuty np na format 1:20(dla 80 sekund)
export function formatTime(time) {
  const timeInSeconds = Math.floor(time / 1000);
  const timeInMinutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, '0');

  const seconds = Math.round(timeInSeconds % 60)
    .toString()
    .padStart(2, '0');

  return `${timeInMinutes}:${seconds}`;
}
