import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCount(state, action) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[num].count += +1;
    },
    addItem(state, action) {
      let num = state.findIndex((a) => {
        return a.id === action.payload.id;
      });
      if (num) {
        state.push(action.payload);
      } else {
        state[num].count += action.payload.count;
      }
    },
  },
});

export const { addCount, addItem } = cart.actions;
export default cart;
