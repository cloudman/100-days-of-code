index.js function pairElement(str) {
  var doubleHelix = {
    "A": ["A","T"],
    "T": ["T","A"],
    "C": ["C","G"],
    "G": ["G","C"]
  }
  let theResult = [];
  for (let i = 0; i < str.length; i++) {
    theResult.push(doubleHelix[str[i]]);
  }
  return theResult;
}

pairElement("GCG");
