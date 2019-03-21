index.js function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let localArray = [];
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
