import { configureStore, createSlice } from '@reduxjs/toolkit'
// jako że w pliku counterSlice jest 'export default' możemy tutaj dać importowaną funkcję pod inną nazwą, bez konieczności używania wąsów
import counterReducer from './slices/counterSlice'


// ! Przykładowa konfiguracja store z wartością do wyświetlenia
// const initialTestState = {
//     value: 'store is working'
// }

// export const storeTest = createSlice({
//     name: 'store-test',
//     initialState: initialTestState,
//     reducers: {
//         // ... 
//         // ... 
//         // ... 
//     }
// })

// export const store = configureStore({
//     reducer: {
//         // .reducer przekazuje wszystkie reducery z reducers, które są w storeTest
//         storeTest: storeTest.reducer
//     }
// })
// ! -------------------------------------------------


// Konfiguracja
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})