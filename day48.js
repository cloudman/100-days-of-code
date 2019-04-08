index.js var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var fullName = firstAndLast.split(" ");

  this.getFirstName = function() {
    return fullName[0];
  };

  this.getLastName = function() {
    return fullName[1];
  };

  this.getFullName = function() {
    return fullName.join(" ");
  };

  this.setFirstName = function(first) {
    fullName[0] = first;
  };

  this.setLastName = function(last) {
    fullName[1] = last;
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast.split(" ");
  };

  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
