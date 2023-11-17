import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Data {
  name: string;
  price: number;
  img: string;
  id: number;
}

const wishListSlice = createSlice({
  name: "wishLists",
  initialState: [] as Data[],
  reducers: {
    addToWishLists: (state, action: PayloadAction<Data>) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { addToWishLists } = wishListSlice.actions;
export default wishListSlice.reducer;
