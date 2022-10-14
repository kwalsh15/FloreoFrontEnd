import { getCollectionData } from '../../helpers';
import { setSubscribers } from './subscribersSlice';

export const startLoadingSubscribers = () => {
	return async (dispatch, getState) => {
		const subscribers = await getCollectionData('Suscriptores');		
		dispatch(setSubscribers(subscribers));
	}
};
