import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    lang:'en'
}

const selectedLanguageSlice = createSlice({
    name:"selectedLanguage",
    initialState,
    reducers:{
        addLanguage(state,action){
            state.lang = action.payload;
        }
    }
})

export const {addLanguage} = selectedLanguageSlice.actions;
export default selectedLanguageSlice.reducer;
