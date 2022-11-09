import { createSlice } from '@reduxjs/toolkit';

export const checkoutSlice = createSlice({
	name: 'orders',
	initialState: {
		orders: [],

	},
	reducers: {
		setOrder: (state, action) => {
			state.orders = action.payload;
		},
	}
})

export const {
	setOrder
} = checkoutSlice.actions;