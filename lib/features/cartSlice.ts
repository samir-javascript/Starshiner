

import { createSlice } from '@reduxjs/toolkit';
import { ProductProps } from '@/types';

const loadStateFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const savedState = localStorage.getItem("starsItems");
    return savedState ? JSON.parse(savedState) : {
      cartItems: [],
      shippingAddress: [],
      paymentMethod: ""
    };
  }
  return {
    cartItems: [],
    shippingAddress: [],
    paymentMethod: ""
  };
};

const initialState = loadStateFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x: ProductProps) => x._id === item._id);
      if (existItem) {
        existItem.qty += 1;
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
      const item = action.payload;
      const existItem = state.cartItems.find((x: ProductProps) => x._id === item._id);
      if (existItem && existItem.qty > 1) {
        state.cartItems = state.cartItems.map((x: ProductProps) =>
          x._id === existItem._id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      return updateCart(state);
    },
    increaseQty: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x: ProductProps) => x._id === item._id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x: ProductProps) =>
          x._id === existItem._id ? { ...x, qty: x.qty + 1 } : x
        );
      }
      return updateCart(state);
    },
    resetCart: (state) => {
      state = initialState;
      return state;
    },
    clearCart: (state) => {
      state.cartItems = [];
      return updateCart(state);
    }
  },
});

export const { clearCart, addToCart, removeFromCart, resetCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;

export const addDecimals = (num: number) => {
  return Number((Math.round(num * 100) / 100).toFixed(2));
};

export const updateCart = (state: any) => {
  const itemsPrice = state.cartItems.reduce(
    (acc: any, item: any) => acc + (item.price * item.qty),
    0
  );
  state.itemsPrice = addDecimals(itemsPrice);

  const shippingPrice = state.itemsPrice > 100 ? 0 : 10;
  state.shippingPrice = addDecimals(shippingPrice);

  const totalPrice = Number(state.itemsPrice) + Number(state.shippingPrice);
  state.totalPrice = addDecimals(totalPrice);

  if (typeof window !== 'undefined') {
    localStorage.setItem("starsItems", JSON.stringify(state));
  }

  return state;
};
