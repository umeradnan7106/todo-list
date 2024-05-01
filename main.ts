#! /usr/bin/env node

import inquirer from "inquirer";

let todoList = []
let condition = true;
console.log("What are you doing in your daily life ?")

while(condition){
let addtask = await inquirer.prompt(
    [
        {
            name : "todo",
            message : "What you want to add in your list :",
            type : "input",
        },
        {
            name: "addMore",
            message: "Do you want to add more :",
            type: "confirm",
            default: "false",
        }
    ]
);
todoList.push(addtask.todo);
condition = addtask.addMore;
console.log(todoList)
}
