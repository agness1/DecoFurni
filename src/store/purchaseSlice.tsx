import { createSlice } from '@reduxjs/toolkit'

const purchaseSlice = createSlice({
    name: "purchase",
    initialState: {
      value: null, 
    },
    reducers: {
      setUserPurchase: (state, action) => {
       
        state.value = action.payload;
      },
    },
  });
  
  export const { setUserPurchase } = purchaseSlice.actions;
  
  export default purchaseSlice.reducer;