import { getCollectionData } from '../../helpers';
import { setImages } from './imageCarouselSlice';

export const startLoadingCarouselImages = () => {
	return async (dispatch) => {
		const carruselData = await getCollectionData('carrusel');
		const imagesUrl = carruselData.map(data => data.url);
		dispatch(setImages(imagesUrl));
	}
};
