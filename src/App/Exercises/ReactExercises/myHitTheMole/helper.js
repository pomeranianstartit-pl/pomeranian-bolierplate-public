export const generatePlayFields = (length) => {
  return Array.from({ length }, (_, i) => ({ id: i + 1, hasClicked: false, hit: false }));
};

export const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * max) + 1;
};
