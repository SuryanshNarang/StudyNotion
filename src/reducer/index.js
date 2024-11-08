import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import cartReducer from "../slices/cartSlice";
// multiple reducers hai for ex: cart, profile, authentication : so we will combine all of them and with the help of combineReducer we made a rootReducer that rootReducer is added to the store:
//now all these reducers are made from slices for each reducer a slice will be made.
//ex: AuthReducer where we took token data: if token is notNull then profile is shown else: then login and signupButton show kro.
const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  cart: cartReducer,
});
export default rootReducer;
