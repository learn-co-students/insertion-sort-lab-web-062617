function findMinAndRemove(array){
  let indexOfMin = 0
  let min = array[0]
  for (var i = 1; i < array.length; i++) {
    if(array[i] < min){
      min = array[i]
      indexOfMin = i
    }
  }
  return array.splice(indexOfMin, 1)[0]
}

function insertionSort(array){
  let newArr = []
  while(array.length != 0){
    newArr.push(findMinAndRemove(array))
  }
  return newArr
}
