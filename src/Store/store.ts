import { configureStore } from "@reduxjs/toolkit";
import { postsAPI } from "../Service/post.service";
import { rootReducer } from "./reducers/root.reducer";

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
      //give default middleware
      middleware: (gDM) => gDM().concat(postsAPI.middleware)
   })
}