import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startLoadingCarouselImages } from '../store/imageCarousel';

export const useLoadingImageCarousel = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(startLoadingCarouselImages())
	}, [])
}
