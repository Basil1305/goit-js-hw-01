"use strict";

import users from "./users.js";

/*
*
=========================== 1 ================================
*
*/
const getUserNames = users => {
  return users.map(users => users.name);
};

console.table(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

/*
*
=========================== 2 ================================
*
*/
const getUsersWithEyeColor = (users, color) => {
  return users.filter(users => users.eyeColor === color);
};

console.table(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

/*
*
=========================== 3 ================================
*
*/
const getUsersWithGender = (users, gender) => {
  return users.filter(users => users.gender === gender).map(user => user.name);
};

console.table(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

/*
*
=========================== 4 ================================
*
*/
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

/*
*
=========================== 5 ================================
*
*/

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

/*
*
=========================== 6 ================================
*
*/

const getUsersWithAge = (users, min, max) => {
  return users.filter(users => users.age >= min && users.age <= max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

/*
*
=========================== 7 ================================
*
*/

const calculateTotalBalance = users =>
  users.reduce((TotalBalance, user) => TotalBalance + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916

/*
*
=========================== 8 ================================
*
*/

const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.some(friend => friend === friendName))
    .map(user => user.name);

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

/*
*
=========================== 9 ================================
*
*/

const getNamesSortedByFriendsCount = users => {
  return [...users]
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(user => user.name);
};

console.table(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

/*
*
=========================== 10 ================================
*
*/

const getSortedUniqueSkills = users => {
  return users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .filter((user, index, arr) => arr.indexOf(user) === index)
    .sort();
};

console.table(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
