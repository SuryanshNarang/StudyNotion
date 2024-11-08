import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
};
const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload;
    },
  },
});
export const { setUser } = profileSlice.actions;
export default profileSlice.reducer;
// No local storage is used here.
// this slice is for: if user is there: and he is not a instructor then cart option is visible.
