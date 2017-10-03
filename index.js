function findMinAndRemove(array){
	let minElement = array[0]
	let index = 0
	for(let i = 0; i < array.length; i++ ) {
		let currentElement = array[i]
		if (currentElement < minElement ) {
			minElement = currentElement
			index = i
		}
	}
	array.splice(index, 1)
	return minElement
}

function insertionSort(array){
	let newMinimum
	let sortedArray = []
	while(array.length > 0) {
		newMinimum = findMinAndRemove(array)
		sortedArray.push(newMinimum)
	}
	return sortedArray
}
