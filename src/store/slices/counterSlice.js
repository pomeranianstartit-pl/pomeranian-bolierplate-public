import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorageState, setLocalStorageState } from './helpers';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: getLocalStorageState('count', 0),
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
      setLocalStorageState('count', state.count);
    },
    decrement: (state) => {
      state.count -= 1;
      setLocalStorageState('count', state.count);
    },
    reset: (state) => {
      state.count = 0;
      setLocalStorageState('count', state.count);
    },
    incrementByValue: (state, action) => {
      state.count += Number(action.payload);
      setLocalStorageState('count', state.count);
    },
  },
});

export const { increment, decrement, reset, incrementByValue } =
  counterSlice.actions;

export default counterSlice.reducer;
