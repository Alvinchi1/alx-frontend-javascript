export default function singUpUser(firstName, lastName) {
	return Promise.resolve({
		firstName: '${firstName}',
		lastName: '${lastName}',
	});
}
