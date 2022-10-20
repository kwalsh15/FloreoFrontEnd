import { configureStore } from '@reduxjs/toolkit'
import { aboutSlice } from './about';
import { imageCarouselSlice } from './imageCarousel';
import { subscribersSlice } from './subscribers';
import { categorySlice } from './category';

export const store = configureStore({
  reducer: {
    section: aboutSlice.reducer,
    imageCarousel: imageCarouselSlice.reducer,
    subscribers: subscribersSlice.reducer,
    categories: categorySlice.reducer
  },
});