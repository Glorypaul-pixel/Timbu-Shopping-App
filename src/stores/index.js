import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./card";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
