import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
};
const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setuser(state, value) {
      state.user = value.payload;
    },
  },
});
export const { setUser } = profileSlice.actions;
// No local storage is used here.
// this slice is for: if user is there: and he is not a instructor then cart option is visible.
