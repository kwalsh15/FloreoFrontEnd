import { createSlice } from '@reduxjs/toolkit';

export const aboutSlice = createSlice({
	name: 'about',
	initialState: {
		information: [],
	},
	reducers: {
		setSection: (state, action) => {
			state.information = action.payload;
			state.messageSaved = '';
		},
		setActiveInfo: (state, action) => {
			state.active = action.payload;
			state.messageSaved = '';
		},
	}
})

export const {
	setActiveInfo,
	setSection,
} = aboutSlice.actions;