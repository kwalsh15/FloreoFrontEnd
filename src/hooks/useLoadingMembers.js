import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startLoadingMembers } from '../store/members/thunks';

export const useLoadingMembers = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(startLoadingMembers())
	}, [])
}
