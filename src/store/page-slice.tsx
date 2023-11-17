import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({ 
    name: 'page',
    initialState: {value: true},
    reducers: {
        setPageAll(state) {
state.value=true
        },
        setPageCategory(state) {
state.value=false
        },
    }
})
export const {setPageAll, setPageCategory} = pageSlice.actions
export default pageSlice.reducer