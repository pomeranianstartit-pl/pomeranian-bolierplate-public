import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';

const initialTestState = {
  value: 'store is working',
};

export const storeTest = createSlice({
  name: 'store-test',
  initialState: initialTestState,
  reducers: {},
});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    storeTest: storeTest.reducer, // we can omit this line on purpose to show debugging of store
  },
});
