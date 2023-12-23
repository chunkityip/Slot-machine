
const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBLS_COUNT = {
    "A" : 2,
    "B" : 4,
    "C" : 6,
    "D" : 8
};

const SYMBLS_VALUES = {
    "A" : 5,
    "B" : 4,
    "C" : 3,
    "D" : 2
};


//A method as user input the among of $
const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter your deposit amount: $");
        const numberDepositAmount = parseFloat(depositAmount);

        //In JavaScript , isNaN is a function that stands for "is Not a Number."
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Please enter a valid amount. Amount must be greater than 0.")
        } else {
            return numberDepositAmount;
        }
    }
};


const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        //Since we only want the user pick 1 - 3  ,we like to output message to guide the user
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines , please pick 1 to 3.");
        } else {
            return numberOfLines;
        }
    }
};

const getBet = (balance) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

        //Since we only want the user pick 1 - 3  ,we like to output message to guide the user
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet! Try again.");
        } else {
            return numberBet;
        }
    }
};

const spin = () => {
     const symbols = [];
     for (const [symbols , count] of Object.entries(SYMBLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbols);
        }
    }

    const reels = [[] , [] , []];
    for (let i = 0; i < COLS; i++) {
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[selectetSymbolIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(selectetSymbolIndex , 1);
        }
    }
    return reels;
};

spin();

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance , numberOfLines);
