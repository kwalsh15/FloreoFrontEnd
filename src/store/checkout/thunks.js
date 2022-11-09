import { getCollectionData } from '../../helpers';
import { setOrder } from './checkoutSlice';

export const startLoadingOrders = () => {
	return async (dispatch, getState) => {
		const orders = await getCollectionData('Pedidos');		
		dispatch(setOrder(orders));
	}
};
