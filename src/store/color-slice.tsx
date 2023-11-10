import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
    name: 'color',
    initialState: {value: 'allColors'},
    reducers: {
black(state) {
    state.value="black"
},
gray(state) {
    state.value="gray"
},
blue(state) {
    state.value="blue"
},
yellow(state) {
    state.value="yellow"
},
white(state) {
    state.value="white"
},
brown(state) {
    state.value="brown"
},
green(state) {
    state.value="green"
},
allColors(state) {
    state.value="allColors"
},

    }
})


export const {black,gray,blue,yellow,white,brown,green,allColors} = colorSlice.actions
export default colorSlice.reducer