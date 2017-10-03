function findMinAndRemove(array){
	let min = array[0]
	let minIndex = 0

	for (let i = 0; i < array.length; i++) {
		let currentElement = array[i]
		if (array[i] < min) {
			min = array[i]
			minIndex = i
		}
	}
	array.splice(minIndex, 1)
	// removes one item at the minIndex position
	return min
}

function insertionSort(array){
	let finalArray = []
	let newMin

	while (array.length != 0) {
		newMin = findMinAndRemove(array)
		finalArray.push(newMin)
	}
	
	return finalArray
}
