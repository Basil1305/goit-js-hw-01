"use strict";

const countTotalSalary = employees => {
  if (employees != null) {
    return Object.entries(employees)
      .map(employee => employee[1])
      .reduce((k, v) => k + v);
  } else {
    return 0;
  }
};

console.log(countTotalSalary()); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400
