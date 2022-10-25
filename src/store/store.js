import { configureStore } from '@reduxjs/toolkit'
import { aboutSlice } from './about';
import { imageCarouselSlice } from './imageCarousel';
import { subscribersSlice } from './subscribers';
import { categorySlice } from './category';
import { serviceSlice } from './service/serviceSlice';
import { membersSlice } from './members/membersSlice';
import { cartSlice } from "./shoppingCart";
import { cartUiSlice } from "./shoppingCart";


export const store = configureStore({
  reducer: {
    section: aboutSlice.reducer,
    imageCarousel: imageCarouselSlice.reducer,
    subscribers: subscribersSlice.reducer,
    categories: categorySlice.reducer,
    services: serviceSlice.reducer,
    members: membersSlice.reducer,
    cartUi: cartUiSlice.reducer,
    cart: cartSlice.reducer
  },
});