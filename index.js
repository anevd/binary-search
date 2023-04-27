// Этот метод должен искать элемент в массиве и возвращать его индекс или -1, если элемент не находится в массиве.
// Например, если ты ищешь G в массиве [A, B, C, D, E, F, G, H], твой метод должен возвращать 6. Если ты ищешь X, он должен возвращать -1.

function binarySearch(n, arr, start, end) {
	let middle = Math.floor((start + end) / 2);
	if (arr[middle] === n) {
		return middle;
	}
	if (arr[middle] > n) {
		return binarySearch(n, arr, start, middle - 1);
	}
	if (arr[middle] < n) {
		return binarySearch(n, arr, middle + 1, end);
	}
	return -1;
}

module.exports = binarySearch;
