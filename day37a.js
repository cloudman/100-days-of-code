hindex.js function destroyer(arr, ...args) {
  // Remove all the values
  let newArray = [];
  arr.forEach(function(item) {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
