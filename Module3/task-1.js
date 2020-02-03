"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
const vals = Object.values(user);

let index = 0;
for (const key of keys) {
  console.log(key + ": " + vals[index]);
  index++;
}
