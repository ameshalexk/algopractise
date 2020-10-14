// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // Implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  // return the sorted array
  return arr;
}

function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let currentNum = arr[i]
    let j = i - 1
    while(currentNum < arr[j]){
      const checkValue = arr[j];
      arr[j] = currentNum;
      arr[j + 1] = checkValue;
      j--;
    }
  }
  return arr
}


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i+1; j <arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

function quickSort (arr){
    if(arr.length < 2){
        return arr 
    }
    const pivotIndex = Math.floor(arr.length/2);
    const pivot = arr[pivotIndex]

    const myLeft = []
    const myRight =[]

    for(let i = 0; i< arr.length; i++){
        if(i !== pivotIndex){
            arr[i] < pivot ? myLeft.push(arr[i]): myRight.push(arr[i])
        }
    }
    return [...quickSort(myLeft),pivot,...quickSort(myRight)]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge, insertionSort, quickSort};
