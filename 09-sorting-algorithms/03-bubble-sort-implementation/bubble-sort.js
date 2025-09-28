function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Iteration: ${i + 1}`);
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      console.log('What is arr', arr);
    }
  }
  return arr;
}

module.exports = bubbleSort;
