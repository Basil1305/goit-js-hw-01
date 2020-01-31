"use strict";
const checkForSpam = function(message) {
  message = message.toLowerCase();
  // console.log(message.indexOf('sale'));
  let word = message;
  if (word.includes("sale") || word.includes("spam")) {
    return true;
  } else {
    return false;
  }
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
