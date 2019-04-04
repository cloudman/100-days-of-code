index.js function smallestCommons(arr) {
  let min = 0;
  let max = 0;
  arr[0] > arr[1] ? max = arr[0] : max = arr[1];
  arr[0] > arr[1] ? min = arr[1] : min = arr[0];
  let theArray = [];
  for (let i = max; i >= min; i--) {
    theArray.push(i);
  }
  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a%b);
    }
  }
  function lcm(a, b) {
    return a * b / gcd(a, b);
  }
  let multiple = max;
  theArray.forEach(function(n) {
    multiple = lcm(multiple, n);
  });
  return multiple;
}


smallestCommons([1,5]);
