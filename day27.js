index.js function repeatStringNumTimes(str, num) {
  // repeat after me
  let theStr = "";
  let i = 0;
  while (i < num) {
    theStr += str;
    i++
  }
  return theStr;
}

repeatStringNumTimes("abc", 3);
