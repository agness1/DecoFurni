import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../store/fetch-slice'
export function makeStore() {
  return configureStore({
    reducer: {
      products: productsReducer,
    }
  })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch