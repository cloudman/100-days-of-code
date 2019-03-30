index.js function translatePigLatin(str) {
  var regex = /[aeiou]/gi;
  var solution = "";
  if (str[0].match(regex)) {
    solution = str + "way";
  } else if (str.match(regex) === null) {
    solution = str + "ay";
  } else {
    var vowelIndex = str.indexOf(str.match(regex)[0]);
    solution = str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
  }
  return solution;
}

translatePigLatin("consonant");
