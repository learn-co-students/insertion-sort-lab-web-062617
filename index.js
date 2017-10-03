function findMinAndRemove(array){
	let smallestNumber = array[0]
	let smallestNumberIdx = 0

	for(let i = 0; i < array.length; i++) {
		if (array[i] <= smallestNumber) {
			smallestNumber = array[i]
			smallestNumberIdx = i
		}
	}
	array.splice(smallestNumberIdx, 1)
	return smallestNumber
}

function insertionSort(array){
	const sorted = []
	while(array.length >= 1) {
		sorted.push(findMinAndRemove(array))
	}
	return sorted
}
