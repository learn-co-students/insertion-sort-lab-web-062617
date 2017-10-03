function findMinAndRemove(array) {
	let min = array[0]
	let index = 0
	for (var i = 0; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i]
			index = i
		}
	}
	array.splice(i, 1)
	return min
}

function insertionSort(array) {
	let sorted = []
	while (array.length != 0) {
		sorted.push(findMinAndRemove(array))
	}
	return sorted
}
