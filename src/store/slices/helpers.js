export const setLocalStorageState = (key, value) => {
  const localStore = JSON.parse(localStorage.getItem('store'));

  localStorage.setItem(
    'store',
    JSON.stringify({ ...localStore, [key]: value })
  );
};

export const getLocalStorageState = (key, initialValue) => {
  const localStore = localStorage.getItem('store');

  if (!localStore) {
    setLocalStorageState(key, initialValue);
  } else {
    return JSON.parse(localStore)[key];
  }
};
