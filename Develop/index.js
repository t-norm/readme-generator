// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Project title: ",
        },
        {
            type: "input",
            name: "description",
            message: "Write your project description: "
        },
        {
            type: "input",
            name: "installation",
            message: "Installation process: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Project usage: "
        },
        {
            type: "list",
            name: "license",
            message: "What license should this project use?",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Project contributors: "
        },
        {
            type: "input",
            name: "tests",
            message: "Project test description: "
        },
        {
            type: "input",
            name: "questions",
            message: "Questions section: "
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email: "
        }
    ]);
} 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
