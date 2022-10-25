import { createSlice } from '@reduxjs/toolkit';

export const membersSlice = createSlice({
	name: 'member',
	initialState: {
		members: [],

	},
	reducers: {
		setMembers: (state, action) => {
			state.members = action.payload;
		},
	}
})

export const {
	setMembers
} = membersSlice.actions;