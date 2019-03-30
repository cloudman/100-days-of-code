index.js function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let theRegex = /\s+|_+/g;
  let theStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return theStr.replace(theRegex, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
