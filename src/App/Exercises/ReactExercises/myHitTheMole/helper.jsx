export const generatePlayFields = (lenght) => {
  return Array.from({ lenght }, (_, i) => ({ id: i + 1, hasClicked: false }));
};

export const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * max + 1);
};
