import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startLoadingServices } from '../store/service/thunks';

export const useLoadingServices = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(startLoadingServices())
	}, [])
}
