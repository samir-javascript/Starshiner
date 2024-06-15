// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../updateCart';
import { ProductProps } from '@/types';



const initialState = {cartItems: [], shippingAddress: {} , paymentMethod: ""} as {
  paymentMethod: string;
  cartItems: ProductProps[];
  shippingAddress: {}
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { ...item } = action.payload;
      const existItem = state.cartItems.find((x: ProductProps) => x._id === item._id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x: ProductProps) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x: ProductProps) => x._id !== action.payload);
      
      return updateCart(state);
    },
    
    decreaseQty: (state, action) => {
      return updateCart(state);
    },
    increaseQty: (state, action) => {
      return updateCart(state);
    },
    resetCart: (state, action) => {
      state = initialState
      return state;
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      return updateCart(state);
    }
  }
});

export const { clearCart, addToCart, removeFromCart, resetCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
