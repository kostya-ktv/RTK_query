import { combineReducers } from "@reduxjs/toolkit";
import { postsAPI } from "../../Service/post.service";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
   userState: userReducer,
   [postsAPI.reducerPath]: postsAPI.reducer
})