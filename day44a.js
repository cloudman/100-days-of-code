index.js function dropElements(arr, func) {
  // Drop them elements.
  let theResult = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      for (let j = i; j < arr.length; j++) {
        theResult.push(arr[j]);
      }
      break;
    }
  }
  return theResult;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
