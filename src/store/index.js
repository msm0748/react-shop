import {configureStore} from "@reduxjs/toolkit";
import cart from "./cartSlice.js";
import root from "./rootSlice.js";

export default configureStore({
	reducer: {
		root: root.reducer,
		cart: cart.reducer,
	},
});
