import { configureStore } from "@reduxjs/toolkit";
import gitUser from "../slice/gitUserSlice";

const store = configureStore({
  reducer: {
    app : gitUser,
  }
})

export default store;