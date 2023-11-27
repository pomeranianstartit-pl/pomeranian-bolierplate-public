import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
      localStorage.setItem('countls', state.count);
      printLocalStorageChange();
    },
    decrement: (state) => {
      state.count -= 1;
      localStorage.setItem('countls', state.count);
      printLocalStorageChange();
    },
    reset: (state) => {
      state.count = 0;
      localStorage.setItem('countls', state.count);
      printLocalStorageChange();
    },
    incrementByValue: (state, action) => {
      console.log(action, 'action');
      state.count += Number(action.payload);
      localStorage.setItem('countls', state.count);
      printLocalStorageChange();
    },
    setSpecificValue: (state, action) => {
      console.log(action, 'action');
      state.count = Number(action.payload);
      localStorage.setItem('countls', state.count);
      printLocalStorageChange();
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementByValue,
  setSpecificValue,
} = counterSlice.actions;

export default counterSlice.reducer;

const printLocalStorageChange = () => {
  console.log('count has change to: ', localStorage.getItem('countls'));
};
