index.js function titleCase(str) {
  let theArray = str.split(" ");
  for (let i = 0; i < theArray.length; i++) {
    let theWord = theArray[i].toLowerCase();
    theArray[i] = theWord[0].toUpperCase() + theWord.slice(1, theWord.length);
  }
  str = theArray.join(" ");
  return str;
}

titleCase("I'm a little tea pot");
