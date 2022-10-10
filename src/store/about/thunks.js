import { loadingSection } from '../../helpers';
import { setActiveInfo, setSection } from './aboutSlice';


export const startLoadingSection = () => {
    
    return async(dispatch) => {
        const sectionInformation = await loadingSection(); 
        const info = sectionInformation[0];
        dispatch( setSection( sectionInformation ) );
        dispatch( setActiveInfo(info));
    }    
};


