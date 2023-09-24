import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/getAllProducts', async (thunkApi) => {
const response = await fetch('https://decofurni-cea54-default-rtdb.europe-west1.firebasedatabase.app/')
 const data = await response.json();
 return data;
})


const initialState = {
  entities: []
} as any

const productsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.entities.push(...action.payload)
    })
  }
})

export default productsSlice.reducer
 









/*export default fetchCartData
const fetchCartData = () => {
  return async (dispatch: (arg0: any) => void) => {
   const fetchData = async () => {
      const response = await fetch(
        'https://decofurni-cea54-default-rtdb.europe-west1.firebasedatabase.app/'
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      return data;
    };

  }*/