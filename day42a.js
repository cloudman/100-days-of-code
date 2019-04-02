index.js function uniteUnique(arr) {
  let newArray = [];
  for (let i = 0; i < arguments.length; i++) {
    var theArray = arguments[i];
    for (let j = 0; j < theArray.length; j++) {
      if (newArray.indexOf(theArray[j]) < 0) {
        newArray.push(theArray[j]);
      }
    }
  }
  return newArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
