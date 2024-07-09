import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './card';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
