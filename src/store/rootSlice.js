import {createSlice} from "@reduxjs/toolkit";


const root = createSlice({
	name: "root",
	initialState: [],
	reducers: {
		setItem(state, action) {
			return state = action.payload;
		},
		sortItem(state, action) {
			state.sort(function (a, b) {
				return a.price - b.price;
			})
		},
	},
});

export const {setItem, sortItem} = root.actions;
export default root;
