import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../store/fetch-slice";
import filterReducer from "./filter-slice";
import featureReducer from "./feature-slice";
import shopingCartReducer from "./shopingCart-slice";

import colorReducer from "./color-slice";
import PageReducer from "./page-slice";
import purchaseReducer from "./purchaseSlice";
import priceReducer from "./priceFilterSlice";
import wishListReducer from "./wishListSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      products: productsReducer,
      filter: filterReducer,
      feature: featureReducer,
      cart: shopingCartReducer,
      color: colorReducer,
      page: PageReducer,
      purchase: purchaseReducer,
      price: priceReducer,
      wishLists: wishListReducer,
    },
  });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
