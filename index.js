import inquirer from "inquirer";
// Create tscongig file and make changes "es2022", "NodeNext" 
// Create package.json file and add "type" :  "module"
// install Inquirer and its dependencies
// install chalk
let annualIncome1 = 600000;
let taxRate1 = (2.5 / 100) / 12;
let annualIncome2 = 1200000;
let ans = await inquirer.prompt([{
        type: "number",
        name: "monthlySalary",
        message: "Enter Monthly Salary",
    },
    {
        type: "number",
        name: "allownce",
        message: "Enter Amount Of Allownce",
    },
]);
let monthlySalary = ans.monthlySalary + ans.allownce;
console.log(`Monthly Salary Rs. ${ans.monthlySalary}\nMonthly Allownce Rs. ${ans.allownce}\nMonthly Taxable Salary Rs. ${monthlySalary}`);
let yearlySalary = monthlySalary * 12;
if (yearlySalary > annualIncome1) {
    let taxSalary1 = (yearlySalary - annualIncome1) * taxRate1;
    console.log(`Your monthly taxable salary is Rs. ${monthlySalary} and monthly tax is Rs. ${taxSalary1.toFixed(2)}`);
}
