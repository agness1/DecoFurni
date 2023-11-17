import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { value: "all" },
  reducers: {
    sofa(state) {
      state.value = "sofa";
    },
    lamp(state) {
      state.value = "lamp";
    },
    chair(state) {
      state.value = "chair";
    },
    wardrobe(state) {
      state.value = "wardrobe";
    },
    all(state) {
      state.value = "all";
    },
  },
});

export const { sofa, lamp, chair, wardrobe, all } = filterSlice.actions;

export default filterSlice.reducer;
