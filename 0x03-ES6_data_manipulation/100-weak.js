export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
	let count = weakMe.get(endpoint) || 0;
	count += 1;

	if (count >= 5) {
		throw new Error('Endpoint load is high');
	} else {
		weakMap.set(endpoint, count);
	}
}
