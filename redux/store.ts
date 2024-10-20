import { configureStore } from "@reduxjs/toolkit";
import taskMangerReducer from "./taskhandleSlice";
export const store = configureStore({
  reducer: {
    taskManger: taskMangerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
