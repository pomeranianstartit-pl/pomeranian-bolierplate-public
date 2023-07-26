import { createSlice } from '@reduxjs/toolkit';

function saveInLocalStorage(state) {
  window.localStorage.setItem('redux-counter', state.value);
}

function getFromLocalStorage() {
  return window.localStorage.getItem('redux-counter') ?? 0;
}

const initialState = {
  value: getFromLocalStorage(),
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
      saveInLocalStorage(state);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      saveInLocalStorage(state);
    },
    decrement: (state) => {
      state.value--;
      saveInLocalStorage(state);
    },
    reset: (state) => {
      state.value = 0;
      saveInLocalStorage(state);
    },
    decrementWithEnsure: (state, action) => {
      if (state.value - action.payload < 0) {
        throw new Error('Nie dobrze!');
      }
      state.value -= action.payload;
      saveInLocalStorage(state);
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  reset,
  decrementWithEnsure,
} = counterSlice.actions;

export default counterSlice.reducer;
