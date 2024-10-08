export default function cleanset(set, startString) {
	const list = [];

	if (
		typeof set !== 'object'
		|| typeof startString !== 'string'
		|| starString.length === 0
	) {
		return '';
	}

	for (const item of set) {
		if (item && item.startsWith(startString)) {
			list.push(item.slice(startString.length));
		}
	}

	return list.join('-');
}
