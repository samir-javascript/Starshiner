

import { createSlice } from '@reduxjs/toolkit';
import { ProductProps } from '@/types';
interface CartState {
  cartItems: ProductProps[];
  shippingAddress: any[];
  paymentMethod: string;
  selectedShippingAddress: {}
  itemsPrice?: number;
  shippingPrice?: number;
  totalPrice?: number;
}
const loadStateFromLocalStorage = ():CartState => {
  if (typeof window !== 'undefined') {
    const savedState = localStorage.getItem("starsItems");
    return savedState ? JSON.parse(savedState) : {
      cartItems: [],
      shippingAddress: [],
      selectedShippingAddress: {},
      paymentMethod: ""
    };
  }
  return {
    cartItems: [],
    shippingAddress: [],
    selectedShippingAddress: {},
    paymentMethod: ""
  };
};

const initialState = loadStateFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {...item} = action.payload;
       console.log(item, "item item from state")
       const existsItem = state.cartItems.find((x)=> x.selectedColor === item.selectedColor && x.selectedSize === item.selectedSize && x._id ===  item._id)
      if(existsItem) {
          existsItem.qty += item.qty;
      }else {
        state.cartItems = [...state.cartItems, item]
      }
      return updateCart(state)
       
    },
    // we need to update this;
    removeFromCart: (state, action) => {
      const { _id , selectedColor, selectedSize} = action.payload;
      state.cartItems = state.cartItems.filter(
        (x: any) =>
          !(x._id === _id && x.selectedColor === selectedColor && x.selectedSize === selectedSize)
      );
      return updateCart(state);
    },
    decreaseQty: (state, action) => {
      const { _id, selectedColor, selectedSize } = action.payload;
    
      // Find the item that matches _id, selectedColor, and selectedSize
      const existItem = state.cartItems.find(
        (x: ProductProps) =>
          x._id === _id &&
          x.selectedColor === selectedColor &&
          x.selectedSize === selectedSize
      );
    
      if (existItem && existItem.qty > 1) {
        // Update the quantity
        state.cartItems = state.cartItems.map((x: any) =>
          x._id === existItem._id && x.selectedColor === selectedColor && x.selectedSize === selectedSize
            ? { ...x, qty: x.qty - 1 }
            : x
        );
      }
    
      // Update the cart state
      return updateCart(state);
    },
    
    increaseQty: (state, action) => {
      const { _id, selectedColor, selectedSize } = action.payload;
    
      // Find the item that matches _id, selectedColor, and selectedSize
      const existItem = state.cartItems.find(
        (x: any) =>
          x._id === _id &&
          x.selectedColor === selectedColor &&
          x.selectedSize === selectedSize
      );
    
      if (existItem) {
        // Update the quantity
        state.cartItems = state.cartItems.map((x: any) =>
          x._id === existItem._id && x.selectedColor === selectedColor && x.selectedSize === selectedSize
            ? { ...x, qty: x.qty + 1 }
            : x
        );
      }
    
      // Update the cart state
      return updateCart(state);
    },
    resetCart: (state) => {
      state = initialState;
      return state;
    },
    setSelectedShippingAddress: (state,action) => {
          state.selectedShippingAddress = action.payload;
          return updateCart(state)
    },
    saveShippingAddress: (state,action) => {
        state.shippingAddress = action.payload;
        return updateCart(state)
    },
    clearCart: (state) => {
      state.cartItems = [];
      return updateCart(state);
    },
    savePaymentMethod: (state,action) => {
      state.paymentMethod = action.payload;
      return updateCart(state)
    }
  },
});

export const { clearCart, addToCart, savePaymentMethod, setSelectedShippingAddress,saveShippingAddress, removeFromCart, resetCart, increaseQty, decreaseQty } = cartSlice.actions;
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
