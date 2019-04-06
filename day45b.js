index.js function truthCheck(collection, pre) {
  // Is everyone being true?

  return collection.every(function(theObject) {
    if (!theObject.hasOwnProperty(pre)) {
      return false;} else {
        return Boolean(theObject[pre]);
      }
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
