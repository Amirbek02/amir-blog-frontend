import { configureStore } from "@reduxjs/toolkit";
import { postsPeducer } from "./slices/posts";
import { authReducer } from "./slices/auth";


const store = configureStore({
  reducer: {
    posts: postsPeducer,
    auth: authReducer
  }
})

export default store