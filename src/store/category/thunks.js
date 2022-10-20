import { getCollectionData } from '../../helpers';
import { setCategories } from './categorySlice';

export const startLoadingCategories = () => {
	return async (dispatch) => {
		const categories = await getCollectionData('Categorias');
		dispatch(setCategories(categories));
	}
};
