import {
    configureStore
} from '@reduxjs/toolkit';
import cartReducer from './cart/reducer';
import pagesReducer from './pages/reducer';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        pages: pagesReducer,
    },
});