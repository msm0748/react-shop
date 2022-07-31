import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCount(state, action) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[num].count += 1;
    },
    minusCount(state, action) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[num].count -= 1;
    },
    addItem(state, action) {
      let num = state.findIndex((a) => {
        return a.id === action.payload.id;
      });
      if (num !== -1) {
        state[num].count += action.payload.count;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { addCount, minusCount, addItem } = cart.actions;
export default cart;
