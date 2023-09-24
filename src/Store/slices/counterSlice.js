import { createSlice } from '@reduxjs/toolkit'
import { setLocalStorageState, getLocalStorageState } from '../helpers'

const initialState = {
    // value: 0
    value: getLocalStorageState('counter', 0)
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
            setLocalStorageState('counter', state.value)
        },
        decrement: (state) => {
            state.value -= 1
            setLocalStorageState('counter', state.value)
        },
        incrementByValue: (state, action) => {
            state.value += action.payload
            setLocalStorageState('counter', state.value)
        },

        decrementByValue: (state, action) => {
            state.value -= action.payload
            setLocalStorageState('counter', state.value)
        },

        multiplication: (state, action) => {
            state.value *= action.payload
            setLocalStorageState('counter', state.value)
        }
    }
})


export const { increment, decrement, decrementByValue, incrementByValue, multiplication} = counterSlice.actions

// w momencie importowania możemy tą zmiennną nazwać jak chcemy, dlatego w Store.js importujemy tę funkcję jako counterReducer
// 'export default' może być maksymalnie jedno na plik
export default counterSlice.reducer