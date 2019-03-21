index.js function chunkArrayInGroups(arr, size) {
  // Break it up.
  let resultArray = [];
  while (size < arr.length) {
    let tempArray =  [...arr.splice(0, size)];
    resultArray.push(tempArray);
  }
  if (arr.length > 0) {
    resultArray.push(arr);
  }
  return resultArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
