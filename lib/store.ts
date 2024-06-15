import { Reducer, UnknownAction, configureStore } from '@reduxjs/toolkit'
import { CarFrontIcon } from 'lucide-react';
 import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
import cartSlice from './features/cartSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      // @ts-ignore
       cart: cartSlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']