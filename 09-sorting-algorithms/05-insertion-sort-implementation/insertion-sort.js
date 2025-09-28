function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1,
      current = arr[i];
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
      console.log({ arr });
    }
    arr[j + 1] = current;
    console.log('After swap:', arr);
  }
  console.log('What is arr: ', arr);
  return arr;
}

module.exports = insertionSort;
