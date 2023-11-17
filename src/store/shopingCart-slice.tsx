import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Data {
  name: string;
  price: number;
  img: string;
  id: number;
  quantity: number;
}

const shopingCartSlice = createSlice({
  name: "shopingCart",
  initialState: [] as Data[],
  reducers: {
    addProduct: (state, action: PayloadAction<Data>) => {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        action.payload.quantity = 1;
        state.push(action.payload);
      }
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const existingItem = state.find((item) => item.id === productId);

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const existingItem = state.find((item) => item.id === productId);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },

    removeProduct: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index >= 0 && index < state.length) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addProduct } = shopingCartSlice.actions;
export const { removeProduct } = shopingCartSlice.actions;
export const { increaseQuantity } = shopingCartSlice.actions;
export const { decreaseQuantity } = shopingCartSlice.actions;
export const selectCartData = (state: any) => state.cart;
export default shopingCartSlice.reducer;
