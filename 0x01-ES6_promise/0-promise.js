export default function getResponseFromAPI() {
	const success = ture;
	return new Promise((resolve, reject) => {
		if (success) {
			resolve();
		} else {
			reject();
		}
	})
}
