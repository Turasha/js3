"use strict";
// task-1
let y = 5;
const n = 100;
do {
  console.log(y);
  y++;
} while (y <= n);

//task-2
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let item of array1) {
  if (item > 0 && item < 20) {
    console.log(item);
  }
}

//task-3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let item of array2) {
  if (item == 5) {
    console.log("არის");
  }
}

// task-6
let array5 = [1, 2, 3, 7, 6, 9];
for (let item of array5) {
  if (item == 7) {
    continue;
  }
  console.log(item);
}

// task-7
let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};
let userStatus = user.studentstatus;
console.log(userStatus);

//task-8
let user2 = {
  name: "anna",
  age: 20,
  studentstatus: "active",
};
let userAge = user2.age;
let userStatus2 = user2.studentstatus;
let userName3 = user2.name;

let userInfo2 =
  userAge < 18 && userStatus2 == "active" ? "hello user" : "error";
let userInfo3 = userName3 == "levan" ? "hello levan" : "error";
let userInfo4 = userStatus2=='ective'|| userAge<25?'hello anna':'error';
console.log(userInfo2);
console.log(userInfo3);
console.log(userInfo4);

// if (userAge < 18 && userStatus2 == "active") {
//   console.log("hello user");
// } else {
//   console.log("error");
// }
// //
// if (userName3 == "Levan") {
//   console.log("hello levan");
// } else {
//   console.log("error");
// }
// //
// if ((userStatus2 = "ative" || userAge < 25)) {
//   console.log("hello anna");
// } else {
//   console.log("error");
// }


// task-9
let array6 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
for (let item of array6) {
  if (item % 2 == 0) {
    console.log(item);
  }
}

// task-11
let array7 = [32, 14, null, "40", 50];
for (let item of array7) {
  if (typeof item == "number" && item % 5 == 0) {
    console.log(item);
  }
}



//task-12
let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];
for (let element of array8){
  for(let item of element){
    if (item>0){
      console.log(item);
    }
  }
}