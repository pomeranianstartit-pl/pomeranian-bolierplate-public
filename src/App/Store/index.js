import { configureStore } from '@reduxjs/toolkit';
import { testSlice } from './testSlice';
import { counterSlice } from './counterSlice';

export const store = configureStore({
  reducer: {
    testSlice: testSlice.reducer,
    counterSlice: counterSlice.reducer,
  },
});
