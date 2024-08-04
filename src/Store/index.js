import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products';

// Combine all reducers into a single root reducer
const store  = configureStore({
    reducer: {
        products: productsReducer,
    },
});

// Create the Redux store with the combined reducer
export default store;