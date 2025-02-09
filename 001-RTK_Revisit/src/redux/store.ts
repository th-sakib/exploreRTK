import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

const store = configureStore({
  reducer: {
    couter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
