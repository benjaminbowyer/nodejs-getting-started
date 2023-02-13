const taxCalculator = require("./tax-calculator");

const prompt = require("prompt-sync")({ sigint: true });
const income = prompt("What is your annual salary? ");

const taxOwed = taxCalculator.calculate(income);
console.log(`That tax on an income of £${income} is £${taxOwed}`);
