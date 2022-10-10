import { configureStore } from '@reduxjs/toolkit'
import { aboutSlice } from './about';

export const store = configureStore({
  reducer: {
    section: aboutSlice.reducer,
  },
});