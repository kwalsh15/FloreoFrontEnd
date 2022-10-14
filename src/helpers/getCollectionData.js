import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const getCollectionData = async (collectionName) => {
	const information = [];
	const collectionRef = collection(FirebaseDB, collectionName);
	const docs = await getDocs(collectionRef);

	docs.forEach(doc => {
		information.push({ id: doc.id, ...doc.data() });
	});

	return information;
}
