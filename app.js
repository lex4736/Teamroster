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

function askManager() {
    inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the manager's name?"
            },
            {
                type: "input",
                name: "ID",
                message: " Type ID you would like to use"
            },
            {
                type: "input",
                name: "email",
                message: "What is their email address"
            },
            {
                type: "input",
                name: "officenumber",
                message: "What is their office number?"
            },
        ])
        .then(function (answer) {
            const newManager = new Manager(answer.name, answer.ID, answer.email, answer.officenumber);
            roles.push(newManager);
            mainMenu();
        })

}

function askEngineer() {
    inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the engineers name?"
            },
            {
                type: "input",
                name: "ID",
                message: " Type ID you would like to use"
            },
            {
                type: "input",
                name: "email",
                message: "What is their email address"
            },
            {
                type: "input",
                name: "github",
                message: "What is their Github account username?"
            },
        ])
        .then(function (answer) {
            const newEngineer = new Engineer(answer.name, answer.ID, answer.email, answer.github);
            roles.push(newEngineer);
            mainMenu();
        })

}

function askIntern() {
    inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the intern's name?"
            },
            {
                type: "input",
                name: "ID",
                message: " Type ID you would like to use"
            },
            {
                type: "input",
                name: "email",
                message: "What is their email address"
            },
            {
                type: "input",
                name: "school",
                message: "What is their School name?"
            },
        ])
        .then(function (answer) {
            const newIntern = new Intern(answer.name, answer.ID, answer.email, answer.school);
            roles.push(newIntern);
            mainMenu();
        })

}

function profile() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(roles))
}
mainMenu();