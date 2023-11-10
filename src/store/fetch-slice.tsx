import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/getAllProducts',
 async (thunkApi) => {
const response = await fetch(
  'https://shop2-92044-default-rtdb.firebaseio.com/products.json'
  )
 const data = await response.json();
 console.log(data)
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
        state.entities = action.payload;

    })
  }
})

export default productsSlice.reducer
 







