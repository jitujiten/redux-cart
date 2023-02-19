import { createSlice } from "@reduxjs/toolkit";

const uislice = createSlice({
  name: "ui",
  initialState: { cartisvisible: false, Notification: null },
  reducers: {
    toggle(state) {
      state.cartisvisible = !state.cartisvisible;
    },
    shownotification(state, action) {
      state.Notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uislice.actions;

export default uislice;
