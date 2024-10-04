import { uploadPhoto, creatUser } from './util';


const asyncUploadUser = async () => {
	try {
		const photo = await uploadPhoto();
		const user = await creatUser();


		return { photo, user };
	} catch (error) {
		return { photo: null, user: null };
	}
};

export default asyncUploaderUser;
