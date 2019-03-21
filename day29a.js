index.js function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  let sortedArr = arr.sort();
  let count = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    if (num > sortedArr[i]) {
      count++;
    }
  }
  return count;
}

getIndexToIns([40, 60], 50);
