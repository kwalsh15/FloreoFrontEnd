import { createSlice } from '@reduxjs/toolkit';

export const serviceSlice = createSlice({
	name: 'service',
	initialState: {
		services: [],

	},
	reducers: {
		setServices: (state, action) => {
			state.services = action.payload;
		},
	}
})

export const {
	setServices
} = serviceSlice.actions;