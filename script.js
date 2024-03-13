"use strict";

//array მასივი
let userName = ["anna", "nika", "lasha", "mariami"];
//   0       1       2        3      ყველა მასივის ტექსტს აქვს თავისი ინდექსი
console.log(userName[1]);
console.log(userName.length); //aq shegvidzlia gavigot ramdeni mnishvneloba gvqav
console.log(userName[userName.length - 1]); //rogor mivwvdet bolo mnishvnelobas

//ჩაშენებული მასივები nasted array
let userName2 = ["snns", ["beka", "luka"], "nika", "lasha", "mariami"];
//                  0            1            2        3        4
console.log(userName2[1]); //aq amovighet mtlianad masivi

console.log(userName2[1][1]); //aq amovighet masivis wevrebi indeqsit

//object ერთ ცვლადში რაღაცა ინფორმაციის შენახვა კონკრეტული იუსერის შესახებ

let userInfo = {
  personName: "anna",
  userAge: 25,
  userStatus: true,
  phone: {
    code: +995,
    tel: 574121075,
  },
  hobbies: ["travel", "read", "music"],
  //key volue
};

//informaciis amosaghebad gvchirdeba shemdegi ori principidan ert-erti

// 1. dot notacion
console.log(userInfo.personName);
console.log(userInfo.phone);
console.log(userInfo.phone.tel); //obieqti
console.log(userInfo.hobbies[1]); //masivi
// 2. bracket notation
console.log(userInfo["userAge"]);
console.log(userInfo["phone"]);
console.log(userInfo["hobbies"][1]);

// obieqtebze moqmedeba
let userTest = {
  name: "nini",
  age: 18,
};
userTest.age= 20; //chasworeba
userTest.gender='femile' //damateba
delete userTest.name //washla
console.log(userTest);


//ცილი - loop array
let names=['mariami', 'nini', 'luka']

// 1. for loop
for (let i=0; i<4; i++){
    console.log(names[i]);
}