import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: { // add to cart
        setItemInCart: (state, action) => {// type: 'setItemInCart' payload: {}
            state.itemsInCart.push(action.payload)
        },
        // delete
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload)
        }
    }
});

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export const selectGoods = state => state.itemsInCart.itemsInCart;
export default cartSlice.reducer;
