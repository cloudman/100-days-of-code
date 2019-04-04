index.js function steamrollArray(arr) {
  // I'm a steamroller, baby
  function flatten(a, r) {
    if (!r) {
      r = [];
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i].constructor == Array) {
        flatten(a[i], r);
      } else {
        r.push(a[i]);
      }
    }
    return r;
  }
  return flatten(arr);
}

steamrollArray([1, [2], [3, [[4]]]]);
