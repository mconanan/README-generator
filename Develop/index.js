// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "GitHubUsername",
        default: "GitHub Username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        default: "Email",
    },
    {
        type: "input",
        message: "What is your project's title?",
        name: "Title",
        default: "Project Title",
    },
    {
        type: "input",
        message: "Please write a short despription of your project.",
        name: "description",
        default: "Description",
    },
    {
        type: "list",
        message: "Which license does your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD", "None"],
        name: "license",
        default: "License",
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "dependencies",
        default: "Dependencies",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "Tests",
    },
    {
        type: "input",
        message: "What does the user need to know about using this repository?",
        name: "usage",
        default: "Usage",
    },
    {
        type: "input",
        message: "How can the user contribute to the repository?",
        name: "contributions",
        default: "Contributions",
    }
];

// TODO: Create a function to write README file

function writeToFile(fileName, answers) {
    fs.writeFileSync (path.join(process.cwd(),fileName),answers)

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => { console.log('answers', answers); 
        writeToFile("generated.md", generateMarkdown(answers)) });

}

// Function call to initialize app
init();


