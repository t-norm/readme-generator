// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const {generateMarkdown} = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
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
            type: "input",
            name: "contribution",
            message: "Contribution guidelines: "
        },
        {
            type: "input",
            name: "tests",
            message: "Project test instructions: "
        },
        {
            type: "list",
            name: "license",
            message: "What license should this project use?",
            choices: [
                "MIT",
                "ISC",
                "GNU GPL",
                "Unlicensed"
            ]
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username (for questions/reachout section): "
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email (for questions/reachout section): "
        },
        {
            type: "input",
            name: "reachout",
            message: "Additional insturctions for questions/reach out: "
        },
    ])
    .then(userInput => {
        return userInput;
    });
};

// TODO: Create a function to write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log('README successfully created.')
    })
};

// TODO: Create a function to initialize app
function init() {
    promptUser() // Prompt user to get input data
        .then(userInput => {
            return generateMarkdown(userInput);
        })
        .then(markdown => {
            writeFile('./dist/README.md', markdown);
        })
        .catch(err => {
            console.log(err);
        })
};

// Function call to initialize app
init();