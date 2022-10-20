import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startLoadingCategories } from "../store/category";

export const useLoadingCategories = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(startLoadingCategories())
	}, [])
}
