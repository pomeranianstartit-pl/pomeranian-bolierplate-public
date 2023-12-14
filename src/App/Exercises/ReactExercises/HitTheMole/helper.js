export const generateArrayOfFields = (lenght) => {
  return Array.from({ lenght }, (_, i) => ({ id: i + 1 }));
};

export const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * max) + 1;
};
