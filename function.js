function greeting(name) {
    console.log(`Hello ${name} welcome to my party`);
}
greeting("Imran");
greeting("Imran");
function addition(num1, num2) {
    // console.log(num1+num2);
    return num1 + num2;
}
console.log(addition(5, 10));
console.log(addition(5, 20));
//addition(5,10);
let email = "saqibsiddiqui1984@gmail.com";
let password = 1234567890;
let isLogedIn = false;
if (email == "saqibsiddiqui1984@gmail." && password == 1234567890) {
    console.log("your email or password is incorrect");
}
else
    (isLogedIn = true) => {
        console.log("you are loged in");
    };
function checkTime() {
    let getDateAndTime = new Date();
    console.log(getDateAndTime);
}
checkTime();
// to check current time in function.
// function
function myIntro() {
    console.log("Hello, Saqib Samar");
}
myIntro();
myIntro();
myIntro();
// function with perameters
function fullName(fname, lname) {
    console.log(`Hello ` + fname + ' ' + lname);
}
fullName("Saqib", "Samar");
fullName("Owais", "Ishrat");
function sum(shoes, suit) {
    console.log(shoes + suit);
}
sum(5, 10);
sum(20, 20);
// return function 
let ts = 5;
let tm = 500;
console.log(`Total subject = ${ts}\nTotal Marks = ${tm}`);
function sumMarks(eng, urdu, math, physics, sst) {
    let a = eng + urdu + math + physics + sst;
    return a;
}
let b = sumMarks(80, 70, 60, 80, 60);
console.log(`Marks Obtain = ${b}`);
function percentage(mo) {
    let c = mo / tm * 100;
    return c;
}
let d = percentage(b);
console.log(`Percentage = ${d} %`);
console.log(`Percentage = ${d} %`);
console.log(`Percentage = ${d} %`);
export {};
