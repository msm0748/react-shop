import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCount(state, action) {
      let num = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[num].count += 1;
    },
    minusCount(state, action) {
      let num = state.findIndex((item) => {
        return item.id === action.payload;
      });
      state[num].count -= 1;
    },
    addItem(state, action) {
      let num = state.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (num !== -1) {
        state[num].count += action.payload.count;
		state[num].checked += action.payload.checked;
      } else {
        state.push(action.payload);
      }
    },
    deleteItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    paymentChecked(state, action) {
      let num = state.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state[num].checked = action.payload.checked;
    },
	  paymentAllChecked(state, action){
		state.map((item) => item.checked = action.payload)
	  },
    paymentItem(sate, action) {
      return sate.filter((item) => !action.payload.some((i) => i.id === item.id));
    },
  },
});

export const { addCount, minusCount, addItem, deleteItem, paymentItem, paymentChecked, paymentAllChecked } = cart.actions;
export default cart;
