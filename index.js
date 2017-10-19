function findMinAndRemove(array){
	let min = array[0]
	let minIndex = 0

	for(let i = 0; i < array.length; i++){
		if(array[i] < min) {
			min = array[i]
			minIndex = i
		}
	}
	return array.splice(minIndex, 1)[0];
}

function insertionSort(array){
	let sortedArray = []
	while(array.length > 0){
	sortedArray.push(findMinAndRemove(array))
	}
	return sortedArray
}