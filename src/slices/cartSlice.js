import { createSlice } from "@reduxjs/toolkit";
// user has added a course in the cart, we will be using TOAST
//1) wrap krna hta hai appp component ke sath
// then imported use kro
import { toast } from "react-hot-toast";
// The toast functionality here is provided by the react-hot-toast library, which is used to show non-blocking, user-friendly notifications or alerts on the screen
const initialState = {
  totalItems: localStorage.getItem("totalItems")
    ? JSON.parse(localStorage.getItem("totalItems"))
    : 0,
};
const cartSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setTotalItems(state, value) {
      state.user = value.payload;
    },
    // add these functions where toast will be used.
    //add to cart
    //remove from cart
    //reset Cart
  },
});
export const { setTotalItems } = cartSlice.actions;
export default cartSlice.reducer;
