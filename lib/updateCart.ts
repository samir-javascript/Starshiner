"use client"

import { ProductProps } from "@/types"

export const addDicimals = (num:number)=> {
   return Number(Math.round((num * 100) / 100).toFixed(2))
}
interface props {
   cartItems: ProductProps[];
   itemsPrice?: number;
   paymentMethod: string;
   shippingAddress: {};
   shippingPrice?: number;
   totalPrice?: number;
  
  
}

export const updateCart = (state: props)=> {
   const itemsPrice = state.cartItems.reduce((acc,item) => acc + (item.price * 100 * item.qty) / 100, 0)
    //const itemsPrice = state.cartItems.recude((acc,item)=> acc + (item.price * 100 * item.qty) / 100 , 0)
     state.itemsPrice = addDicimals(itemsPrice)

     const shippingPrice = state.itemsPrice > 100 ? 0 : 10
     state.shippingPrice = addDicimals(shippingPrice)

     const totalPrice =  Number(state.itemsPrice) + Number(state.shippingPrice)
     state.totalPrice = addDicimals(totalPrice)

     localStorage.setItem('starsCart', JSON.stringify(state))
     return state;
}