
const prompt = require("prompt-sync")();


//A method call deposit
const deposit = () => {
    while (true) {
        const depositAmount = parseFloat(prompt("Enter your deposit amount: $"));
        const numberDepositAmount = parseFloat(prompt(depositAmount));

        //In JavaScript , isNaN is a function that stands for "is Not a Number."
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log(
                "Please enter a valid amount. Amount must be greater than 0."
                )
        } else {
            return numberDepositAmount;
        }
    }
};

const depositAmount = deposit();
console.log("You have deposited: $" + depositAmount);