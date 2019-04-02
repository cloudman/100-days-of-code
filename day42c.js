index.js function sumPrimes(num) {
  let primes = [];
  let theArray = [false, false];
  let upperLimit = Math.sqrt(num);
  let theSum = 0;
  for (let i = 2; i <= num; i++) {
    theArray.push(true);
  }
  for (let j = 2; j < upperLimit; j++) {
    if (theArray[j]) {
      for (let k = j * j; k <= num; k += j) {
        theArray[k] = false;
      }
    }
  }
  for (let i = 2; i <= num; i++) {
    if (theArray[i]) {
      theSum += i;
    }
  }
  return theSum;
}

sumPrimes(10);
