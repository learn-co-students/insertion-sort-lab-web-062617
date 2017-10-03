function findMinAndRemove(array){
	let min = array[0]
	let index = 0

	for (let i = 0; i < array.length; i++){
		if (min > array[i]){
			min = array[i]
			index = i
		}
	}

	array.splice(index,1)
	return min
}

function insertionSort(array){

	let final = []
	while (array.length > 0) {
		final.push(findMinAndRemove(array))
	}
	return final
}
