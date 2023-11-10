import { createSlice } from '@reduxjs/toolkit';

const priceFilterSlice = createSlice({
    name: 'price',
    initialState: {value: [0,2000]},
    reducers: {
        setPrice: (state, action) => {
    state.value = action.payload
        }
    }
})

export const {setPrice} = priceFilterSlice.actions

export default priceFilterSlice.reducer
