const taxCalculator = require("./tax-calculator");

const prompt = require("prompt-sync")({ sigint: true });
const income = prompt("What is your annual salary? ");

const taxOwed = taxCalculator.calculate(income);
console.log(`The tax on an income of £${income} is £${taxOwed}.` );
console.log(`For more infomation on tax, head to the following link: https://www.gov.uk/income-tax-rates`)
