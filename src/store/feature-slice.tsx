import { createSlice } from '@reduxjs/toolkit'

const featureSlice = createSlice({
 name: 'feature',
 initialState: {value: ''},
 reducers: {
armchair(state) {
    state.value="armchair"
},
folding(state) {
    state.value="folding"
},
corner(state) {
    state.value="corner"
},
gaming(state) {
    state.value="gaming"
},
dining(state) {
    state.value="dining"
},
open(state) {
    state.value="open"
},
sliding(state){
    state.value="sliding"
},
floor(state){
    state.value="floor"
},
ceiling(state) {
    state.value="ceiling"
},
defaults(state) {
    state.value="default"
},

 }   
})


export const {armchair,folding,corner,gaming,dining,open,sliding,floor,ceiling,defaults} = featureSlice.actions
export default featureSlice.reducer
