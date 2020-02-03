"use strict";

const countProps = function(obj) {
  var counter = 0;

  for (var key in obj) {
    counter++;
  }
  return counter;
};

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
