import { createSlice } from '@reduxjs/toolkit';

export const imageCarouselSlice = createSlice({
	name: 'imageCarousel',
	initialState: {
		images: [],

	},
	reducers: {
		setImages: (state, action) => {
			state.images = action.payload;
		},
	}
})

export const {
	setImages
} = imageCarouselSlice.actions;