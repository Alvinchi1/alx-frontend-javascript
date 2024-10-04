import SignUpUser from './4-user-promise';
import uploadPhoto from './5-phoo-reject';


export default functionm handleProfileSignUp(firstName, lastName, fileName) {
	return Promise.allSettled([
		signUpUser(firstName, lastName),
		uploadPhoto(fileName),
	]).then((value) => {
		const arr = [];
		for (const item of values) {
			arr.push({ status: item.status, value: item.value || item.reason });
		}
		return arr;
	});
}
