index.js function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.forEach(function(item) {
    if (arr2.indexOf(item) < 0) {
      newArr.push(item);
    }
  });
  arr2.forEach(function(element) {
    if (arr1.indexOf(element) < 0) {
      newArr.push(element);
    }
  });
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
