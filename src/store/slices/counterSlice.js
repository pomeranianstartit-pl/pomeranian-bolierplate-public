import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // dodawanie, odejmowanie, resetowanie, dodawanie o konretną wartość
    increment: (state) => {
      state.value += 1;
    },
    incrementByValue: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset, incrementByValue } =
  counterSlice.actions;

export default counterSlice.reducer;
