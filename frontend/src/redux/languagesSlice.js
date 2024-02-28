import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    langs:null
}

const languagesSlice = createSlice({
    name:"languages",
    initialState,
    reducers:{
        addLanguages(state,action){
            state.langs = action.payload;
        }
    }
})

export const {addLanguages} = languagesSlice.actions;
export default languagesSlice.reducer;
