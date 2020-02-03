"use strict";

const findBestEmployee = function(employees) {
  let max = 0;
  let id = 0;
  let maxId = 0;
  const numbs = Object.values(employees);
  for (let numb of numbs) {
    if (max < numb) {
      max = numb;
      maxId = id;
    }
    id++;
  }
  const keys = Object.keys(employees);
  return keys[maxId] + ": " + max;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
