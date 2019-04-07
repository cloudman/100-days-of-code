index.js function addTogether() {
  function checkNumber(x) {
    if (typeof x !== "number") {
      return undefined;
    } else {
      return x;
    }
  }
  let args = [];
  for (let i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  if (args.length > 1) {
    if (args.some(function(x) {
      return (checkNumber(x) === undefined);
    })) {
      return undefined;
    } else {
      return args[0] + args[1];
    }
  } else {
      let arg0 = args[0];
      if (checkNumber(arg0)) {
      return function(arg1) {
        if (arg0 == undefined || checkNumber(arg1) == undefined) {
          return undefined;
        } else {
          return arg0 + arg1;
        }
      };
    }
  }
}

addTogether(2,3);
