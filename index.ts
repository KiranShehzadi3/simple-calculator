#! /usr/bin/env node         //SHABANG(file ko executable banaya)

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        message : "kindly enter your firstNumber:",
        type : "number",
        name : "firstNumber"
    },
    {
        message : "kindly enter your secondNumber:",
        type : "number",
        name : "secondNumber"
    },
    {        
        message : "select one of the operator to perform operation",
        type : "list",
        name : "operator",
        choices : ["Addition" , "Subtraction" , "Multiplication" , "Division" , "Percentage"],
    },
]);

// conditional statement
if (answer.operator === "Addition") 
{
    console.log(answer.firstNumber + answer.secondNumber);
} 
else if(answer.operator === "Subtraction")
{
    console.log(answer.firstNumber - answer.secondNumber);
}
else if(answer.operator === "Multiplication")
{
    console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.operator === "Division")
{
    console.log(answer.firstNumber / answer.secondNumber);
}
else if(answer.operator === "Percentage")
{
    console.log(answer.firstNumber % answer.secondNumber);
}
else{
    console.log("enter valid operator");
}