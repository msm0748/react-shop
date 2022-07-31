import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartSlice.js";

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
