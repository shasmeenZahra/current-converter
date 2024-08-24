#!/usr/bin/env node 
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const currency = {
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer_1.default.prompt([{
        name: 'from',
        message: "Enter From Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", 'EUR', "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: 'Enter your Amount',
        type: "number"
    },
]);
let fromamount = currency[user_answer.from]; //exchange rate
let toamount = currency[user_answer.to]; //exchange rate
let amount = user_answer.amount;
let baseamount = amount / fromamount; //USD base amount //
let convertdamount = baseamount * toamount;
console.log(convertdamount);
