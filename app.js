// Here is where we I am requiring the dependencies, classes and path 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");

let roles = [];

// Here is where i wrote a function to use inquirer to gather information and create objects for each team member using the applicable class as a blueprint 

function mainMenu() {
    inquirer.prompt({
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: ["Create Manager", "Create Engineer", "Create Intern", "Build Team"]
    }).then(function (answer) {
        if (answer.menu === "Create Manager") {
            // callback Manager fuction
            askManager();


        } else if (answer.menu === "Create Engineer") {
            askEngineer();

        } else if (answer.menu === "Create Intern") {
            askIntern();
        } else {
            profile();

        }
    });
}