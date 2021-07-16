import { configureStore } from "@reduxjs/toolkit";

import translatorReducer from "./translator/translatorSlice";

export default configureStore({
  reducer: {
    translator: translatorReducer,
  },
  devTools: process.env.NODE_ENV !== "production" ? true : false,
});