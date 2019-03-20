index.js function truncateString(str, num) {
  // Clear out that junk in your trunk
  let newStr = "";
  if (str.length > num) {
    newStr = str.slice(0, num) + "...";
  }
  else {
    newStr = str.slice(0, str.length);
  }
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
