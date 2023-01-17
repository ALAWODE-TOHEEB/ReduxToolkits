import { configureStore } from '@reduxjs/toolkit';
import usersReducer from "./Features/users/UserSlice"

export const store = configureStore({
    reducer: {
       users: usersReducer,
    },
  })