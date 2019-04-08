index.js function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let theArray = [];
  for (let i = 0; i < arr.length; i++) {
    let theName = arr[i].name;
    let theAvgAlt = arr[i].avgAlt;
    let thePeriod = Math.PI * 2 * Math.sqrt(Math.pow((earthRadius + theAvgAlt), 3)/ GM);
    let theObject = Object.create(null);
    theObject.name = theName;
    theObject.orbitalPeriod = Math.round(thePeriod);
    theArray.push(theObject);
  }
  return theArray;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
