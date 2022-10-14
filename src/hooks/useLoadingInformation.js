import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startLoadingSection } from '../store/about';

export const useLoadingInformation = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(startLoadingSection())
	}, [])
}
