index.js function convertHTML(str) {
  // &colon;&rpar;
  let finalStr = "";
  const theObject = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    '"' : "&quot;",
    "'" : "&apos;"
  }
  for (let i = 0; i < str.length; i++) {
    let theChar = str.charAt(i);
    if (theObject.hasOwnProperty(theChar)) {
      finalStr += theObject[theChar];
    } else {
      finalStr += theChar;
    }
  }
  return finalStr;
}

convertHTML("Dolce & Gabbana");
