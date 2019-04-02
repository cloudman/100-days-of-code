index.js function sumFibs(num) {
  var fibArray = [1, 1];
  let i = 2;
  let nextFib = fibArray[i - 2] + fibArray[i - 1];
  while (nextFib <= num) {
    fibArray.push(nextFib);
    i++;
    nextFib = fibArray[i- 2] + fibArray[i -1];
  }
  let theSum = 0;
  for (let j = 0; j < fibArray.length; j++) {
    if (fibArray[j] % 2 === 1) {
      theSum += fibArray[j];
    }
  }
  return theSum;
}

sumFibs(4);
