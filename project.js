
const prompt = require("prompt-sync")();

const deposit = () => {
    const depositAmount = parseFloat(prompt("Enter your deposit amount: $"));
    console.log(`You deposited is : $${depositAmount}`);
}

deposit();