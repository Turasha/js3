// "use strict";

// //array მასივი
// let userName = ["anna", "nika", "lasha", "mariami"];
// //   0       1       2        3      ყველა მასივის ტექსტს აქვს თავისი ინდექსი
// console.log(userName[1]);
// console.log(userName.length); //aq shegvidzlia gavigot ramdeni mnishvneloba gvqav
// console.log(userName[userName.length - 1]); //rogor mivwvdet bolo mnishvnelobas

// //ჩაშენებული მასივები nasted array
// let userName2 = ["snns", ["beka", "luka"], "nika", "lasha", "mariami"];
// //                  0            1            2        3        4
// console.log(userName2[1]); //aq amovighet mtlianad masivi

// console.log(userName2[1][1]); //aq amovighet masivis wevrebi indeqsit

// //object ერთ ცვლადში რაღაცა ინფორმაციის შენახვა კონკრეტული იუსერის შესახებ

// // // let userInfo = {
// //   personName: "anna",
// //   userAge: 25,
// //   userStatus: true,
// //   phone: {
// //     code: +995,
// //     tel: 574121075,
// //   },
// //   hobbies: ["travel", "read", "music"],
// //   //key volue
// // };

// //informaciis amosaghebad gvchirdeba shemdegi ori principidan ert-erti

// // 1. dot notacion
// console.log(userInfo.personName);
// console.log(userInfo.phone);
// console.log(userInfo.phone.tel); //obieqti
// console.log(userInfo.hobbies[1]); //masivi
// // 2. bracket notation
// console.log(userInfo["userAge"]);
// console.log(userInfo["phone"]);
// console.log(userInfo["hobbies"][1]);

// // obieqtebze moqmedeba
// let userTest = {
//   name: "nini",
//   age: 18,
// };
// userTest.age = 20; //chasworeba
// userTest.gender = "femile"; //damateba
// delete userTest.name; //washla
// console.log(userTest);

// //ციკლი - loop array
// let names = ["mariami", "nini", "luka"];

// // 1. for loop
// for (let i = 0; i < 4; i++) {
//   console.log(names[i]);
// }

// // let numbers = [
// //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23,
// //   24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
// //   43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
// //   62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
// //   81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
// //   100,
// // ];

// // for (let x = 4; x <= 100; x++) {
// //   console.log(numbers[x]);
// // }

// let namesArray = ["html,", "css", "js"]; //am for loopis martivi chanaweria oghond mxolod yvela wevrs vwvdebit

// for (let item of namesArray) {
//   console.log(item);
// }

// rogor mivwvdet masivshi chashenebul masivebs
let arrayNumbers = [
  [25, 10],
  [3, 15, 4],
  [25, 8],
];

for (let element of arrayNumbers) {
  // console.log(element);
  for (let item of element) {
    console.log(item);
  }
}
//
let namesArray2 = ["html,", "css", "js"];
let index = 0;
while (index < namesArray2.length) {
  console.log(namesArray2[index]);
  index++;
}

//do while პროცესი
// let y = 5;
// const n = 100;
// do {
//   console.log(y);
//   y++;
// } while (y <= n);

//break and continue

// let i = 0;
// while (i < 11) {
//   console.log(i);
//   i++;
//   if (i == 11) {
//     break;
//   }
// }
// //break
// let numbers = [25, 35, 26, 150];
// for (let item of numbers) {
//   if (item == 26) {
//     break;
//   }
//   console.log(item);
// }
// // continue
// let numbers2 = [25, 35, 26, 150];
// for (let item of numbers2) {
//   if (item == 26) {
//     continue;
//   }
//   console.log(item);
// }
// //
// let user = {
//   firstname: "giorgi",
//   lastname: "smith",
//   age: 25,
//   studentstatus: "active",
// };
// let userStatus = user.studentstatus;
// console.log(userStatus);
// //
// let user2 = {
//   name: "anna",
//   age: 20,
//   studentstatus: "active",
// };
// let userAge = user2.age;
// let userStatus2 = user2.studentstatus;
// let userName3 = user2.name;
// // if (userAge < 18 && userStatus2 == "active") {
// //   console.log("hello user");
// // } else {
// //   console.log("error");
// // }
// // //
// // if (userName3 == "Levan") {
// //   console.log("hello levan");
// // } else {
// //   console.log("error");
// // }
// // //
// // if ((userStatus2 = "ative" || userAge < 25)) {
// //   console.log("hello anna");
// // } else {
// //   console.log("error");
// // }
// let userInfo2 = userAge < 18 && userStatus2 == "active" ? "hello user" : "error";
// console.log(userInfo2);




// let users = [
//   {username: 'giorgi', status: false},
//   {username: 'levani', status: false},
//   {username: 'anna', status: true}
// ]

//task12
// let array8 = [ [2, -3, 5, 11], [1, -35, -11], [12, -36, -24] ];
// for (let element of array8){
//   for(let item of element){
//     if (item>0){
//       console.log(item);
//     }
//   }
// }