export const generateArrayOfFields = (lenght) => {
  return Array.from({ lenght }, (_, i) => ({ id: i + 1 }));
};

export const generateRandomNumber = (max, repeat) => {
  let result = [];
  while (repeat > 0) {
    result.push(Math.floor(Math.random() * max) + 1);
    repeat--;
  }
  return result;
};
