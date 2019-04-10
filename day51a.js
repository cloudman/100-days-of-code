index.js function rot13(str) { // LBH QVQ VG!
  const Caesar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let result = "";
  function rotate(n) {
    return (n + 13) % 26;
    }
  for (let i = 0; i < str.length; i++) {
    if (Caesar.indexOf(str[i]) < 0) {
        result += str[i];
    } else {
        result += Caesar[rotate(Caesar.indexOf(str[i]))];
    }
  }
  return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
