import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startLoadingSubscribers } from '../store/subscribers';

export const useLoadingSubscribers = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(startLoadingSubscribers())
	}, [])
}
