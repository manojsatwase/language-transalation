import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    products:null
}

const addProductSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
       addProduct (state,action){
            state.products = action.payload;
        }
    }
})

export const {addProduct} = addProductSlice.actions;
export default addProductSlice.reducer;
