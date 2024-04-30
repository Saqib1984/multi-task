import chalk from "chalk";
// 1- string equility and inequility
let myName : string = "Saqib Samar"
// true
if (myName == "Saqib Samar") {
    console.log(chalk.green.bold("1-True"))
}else {
    console.log(chalk.red.bold("1-False"))
}

// false
if (myName == "SaqibSamar") {
    console.log(chalk.green.bold("1-True"))
}else {
    console.log(chalk.red.bold("1-False"))
}
// 2- Lowercase Function
// true

if(myName.toLowerCase()== "saqib samar"){
    console.log(chalk.green.bold("2-True"))
}else{
    console.log(chalk.red.bold("2-False"))
}
// false

if(myName.toLowerCase()== "Saqib Samar"){
    console.log(chalk.green.bold("2-True"))
}else{
    console.log(chalk.red.bold("2-False"))
}
// 3- Numerical Comperision

let x = 10
let y = 20
let z = 30

// 3-i less then and greater then

// true

if (y > x){
    console.log(chalk.green.bold("3-i- True"))
}else{
    console.log(chalk.red.bold("3-i- False"))
}
// false

if (y < x){
    console.log(chalk.green.bold("3-i- True"))
}else{
    console.log(chalk.red.bold("3-i- False"))
}

// 3-ii less then or equal and greater then or equal

// true

if (y >= x){
    console.log(chalk.green.bold("3-ii- True"))
}else{
    console.log(chalk.red.bold("3-ii- False"))
}
// false

if (y <= x){
    console.log(chalk.green.bold("3-ii- True"))
}else{
    console.log(chalk.red.bold("3-ii- False"))
}
// 4- Logical Opt "and"

// true

if (y > x && y < z){
    console.log(chalk.green.bold("4-i- True"))
}else{
    console.log(chalk.red.bold("4-i- False"))
}
// false

if (y < x && y > z){
    console.log(chalk.green.bold("4-i- True"))
}else{
    console.log(chalk.red.bold("4-i- False"))
}
// 4- Logical Opt "or"

// true

if (y > x || y > z){
    console.log(chalk.green.bold("4-ii- True"))
}else{
    console.log(chalk.red.bold("4-ii- False"))
}
// false

if (y < x || y > z){
    console.log(chalk.green.bold("4-ii- True"))
}else{
    console.log(chalk.red.bold("4-ii- False"))
}

// 5- check item in array

let friendsName : string[] = ["Ali Raza", "Saeed Ahmed", "Khawar Khan"]

// True

if(friendsName[1]== "Saeed Ahmed"){
    console.log(chalk.green.bold("5- True"))
}else{
    console.log(chalk.red.bold("5- False"))
}
// false

if(friendsName[1]== "Ali Raza"){
    console.log(chalk.green.bold("5- True"))
}else{
    console.log(chalk.red.bold("5- False"))
}

// 6- check item not in array

// True

if(friendsName[2]!== "Ali Raza"){
    console.log(chalk.green.bold("6- True"))
}else{
    console.log(chalk.red.bold("6- False"))
}
// false

if((friendsName[2]!== "Khawar Khan")){
    console.log(chalk.green.bold("6- True"))
}else{
    console.log(chalk.red.bold("6- False"))
}


