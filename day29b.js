index.js function mutation(arr) {
  let theFirst = arr[0].toLowerCase();
  let theSecond = arr[1].toLowerCase();
  let test = true;
  for (let i = 0; i < theSecond.length; i++) {
    let testRegex = new RegExp(theSecond[i]);
    let result = testRegex.test(theFirst);
    test = test && result;
  }
  return test;
}

mutation(["hello", "hey"]);
