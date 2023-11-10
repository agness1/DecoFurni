import { createSlice } from '@reduxjs/toolkit'
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";



const userSlice = createSlice({
    name: 'user',
    initialState: {value: false},
    reducers: {
isLogIn(state:any) {
    state.value=true
},
isLogOut(state: any) {
    state.value=false
}
    }
    
})

export const {isLogIn, isLogOut} = userSlice.actions
export default userSlice.reducer