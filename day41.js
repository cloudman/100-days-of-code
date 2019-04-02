index.js function fearNotLetter(str) {
  str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      let theIndex = str.charCodeAt(i);
      if (theIndex !== str.charCodeAt(0) + i) {
        return String.fromCharCode(theIndex - 1);
      }
    }
  return undefined;
}

fearNotLetter("abce");
