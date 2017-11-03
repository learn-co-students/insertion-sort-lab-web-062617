function findMinAndRemove(array) {
  // default min/minIndex will be replaced through iteration
  let min = array[0];
  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    // compare array[i] to min, if lower then replace
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }
  // return and remove the min of the array
  return array.splice(minIndex, 1)[0]
}

function insertionSort(array){
  let sortedArray = [];
  // while array is not empty, push the min into sortedArray
  while (array.length > 0) {
    sortedArray.push(findMinAndRemove(array))
  }
  return sortedArray
}
