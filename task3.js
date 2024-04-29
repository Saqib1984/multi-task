import inquirer from "inquirer";
// Switch Case
let condition = true;
while (condition) {
    let weekDays = await inquirer.prompt({
        type: "list",
        name: "days",
        message: "Please select a day",
        choices: ["Monday", "tuesday", "wednessday", "thursday", "friday", "saturday", "sunday"]
    });
    switch (weekDays.days) {
        case "monday":
            console.log("Office jana hai magar dil nahi kar raha");
            break;
        case "tuesday":
            console.log("Phr wohi rutine, office office or bas office");
            break;
        case "wednessday":
            console.log("Ammi ko topi karwani hai office ki chutti ki");
            break;
        case "thursday":
            console.log("Saala.... pagal hogya hai");
            break;
        case "friday":
            console.log("Namaz e Jumma Or Garmi Bhi Boht Hai");
            break;
        case "saturday":
            console.log("Yar saturday off hona chahye");
            break;
        default:
            console.log("Aaj sunday hai bhai sonay do mujhy, bas programe warrh gya hai, ab kya dekhna chahtay ho?");
            break;
    }
}
