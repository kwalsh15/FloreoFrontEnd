import { createSlice } from '@reduxjs/toolkit';

export const subscribersSlice = createSlice({
	name: 'subscribers',
	initialState: {
		subscribers: [],

	},
	reducers: {
		setSubscribers: (state, action) => {
			state.subscribers = action.payload;
		},
	}
})

export const {
	setSubscribers
} = subscribersSlice.actions;