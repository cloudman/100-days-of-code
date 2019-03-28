index.js function sumAll(arr) {
  let total = 0;
  if (arr[0] < arr[1]){
    for (let i = arr[0]; i <= arr[1]; i++) {
      total += i;
    }
  } else {
    for (let i = arr[1]; i <= arr[0]; i++) {
      total += i;
    }
  }
  return total;
}

sumAll([1, 4]);
