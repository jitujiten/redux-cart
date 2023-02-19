import { createSlice } from "@reduxjs/toolkit";


const uislice=createSlice({
    name:"ui",
    initialState:{cartisvisible:false},
    reducers:{
       toggle(state){
        state.cartisvisible=!state.cartisvisible
       } 
    }
});

export const uiActions=uislice.actions;

export default uislice;