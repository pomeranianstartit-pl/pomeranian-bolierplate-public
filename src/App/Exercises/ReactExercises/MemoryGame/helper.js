export const shuffleArray = (s) => {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
};

const alpha = Array.from(Array(26)).map((_, i) => i + 65);

const alphabet = alpha.map((x) => String.fromCharCode(x));

const getRandomLetters = (amount) => {
  const shuffled = [...alphabet].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, amount);
};

export const generateBoard = (size) => {
  const randomLetters = getRandomLetters(size / 2);
  const letters = randomLetters.map((letter) => {
    return {
      id: null,
      value: letter,
      isPaired: false,
    };
  });

  const mergedArray = [...letters, ...letters];

  return shuffleArray(mergedArray).map((letter, index) => {
    return {
      ...letter,
      id: index + 1,
    };
  });
};
