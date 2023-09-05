import { createSlice } from '@reduxjs/toolkit';
import { json } from 'react-router-dom';

const initialValue =0;
const saveToLocalStorage = (value) =>{
localStorage.setItem("storedValue", JSON.stringify(value))
};

const getFromLocalStorage = () =>{
const storedValue = localStorage.getItem("storedValue")
return !storedValue ? initialValue : JSON.parse(storedValue);
};

export const counterSlice = createSlice({
  name: 'store-counter',
  initialState: {
    value: getFromLocalStorage(),
    error: '',
  },
  reducers: {
    increment: (state) => {
state.value += 1;
saveToLocalStorage(state.value); 
    },
    incrementBy: (state, action) => {
      state.value += action.payload;
saveToLocalStorage(state.value); 

          },
          decrementBy: (state, action) => {
            if(state.value + action.payload < 0){
              state.error = 'Nie może być mniej niż zero'
            } else {
            state.value += action.payload;
saveToLocalStorage(state.value); 

          }},
          resetError:(state) =>{
            state.error ='';
          }
  },
});

 export const { increment, incrementBy, decrementBy, resetError } = counterSlice.actions;
// export const selectProfile = (state) => {
//   return state.testSlice.userProfile || defaultUserProfile;
// };

