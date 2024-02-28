import { configureStore } from '@reduxjs/toolkit';
import languagesSlice from './languagesSlice';
import addProductSlice from './addProductSlice';
import selectedLanguageSlice from './selectedLanguageSlice';

const store = configureStore({
    reducer: {
        languages:languagesSlice,
        products:addProductSlice,
        selectedLanguage:selectedLanguageSlice
    }
  });

  export default store;