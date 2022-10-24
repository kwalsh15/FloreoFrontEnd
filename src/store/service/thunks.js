import { getCollectionData } from '../../helpers';
import { setServices } from './serviceSlice';

export const startLoadingServices = () => {
	return async (dispatch) => {
		const services = await getCollectionData('Servicios');
		dispatch(setServices(services));
	}
};
