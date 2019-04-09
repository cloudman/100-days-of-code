index.js function palindrome(str) {
  // Good luck!
  let s1 = str.replace(/[\W_]/g, "").toLowerCase();
  let s2 = str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("");
  return s1 === s2;
}



palindrome("eye");
