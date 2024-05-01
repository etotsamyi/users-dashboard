import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './reducers/main-page';

export const store = configureStore({
  reducer: {
    mainPage: usersReducer.reducer,
  },
});
