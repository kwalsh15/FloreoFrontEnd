import { getCollectionData } from '../../helpers';
import { setMembers } from './membersSlice';

export const startLoadingMembers = () => {
	return async (dispatch) => {
		const members = await getCollectionData('Integrantes');
		dispatch(setMembers(members));
	}
};
