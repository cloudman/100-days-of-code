index.js function myReplace(str, before, after) {
  let theIndex = str.indexOf(before);
  if (str[theIndex] === str[theIndex].toUpperCase()) {
    after = after.slice(0, 1).toUpperCase() + after.slice(1);
  } else {
    after = after.slice(0, 1).toLowerCase() + after.slice(1);
  }
  str = str.replace(before, after);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
