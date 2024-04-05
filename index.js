#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 10000; //Dollars
let mypin = 1234;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number",
        type: "number"
    }
]);
if (pinAns.pin == mypin) {
    console.log("Your pin number is correct");
    let operationAns = await inquirer.prompt([
        {
            name: "opearations",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "checkBalance", "FastCash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.opearations === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is: " + myBalance);
        }
        else {
            console.log("Incorrect amount");
        }
    }
    else if (operationAns.opearations === "FastCash") {
        let fastAmount = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Please select amount for fastCash",
                type: "list",
                choices: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
            }
        ]);
        if (fastAmount.fastCash <= myBalance) {
            myBalance -= fastAmount.fastCash;
            console.log("Your remaining amount is : " + myBalance);
        }
    }
    else if (operationAns.opearations === "checkBalance") {
        console.log("Your current balance is : " + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
