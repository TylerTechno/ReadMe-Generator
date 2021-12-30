// TODO: Include packages needed for this application
const inq = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "whats the name of your project?",
        name: "title",

    }, 
    {
        type: "input",
        message: "whats your description?",
        name: "description",
    },
    {
        type: "list",
        message: "what license do you want to use?",
        name: "license",
        choices: ["MIT", "License to kill", "No license"]
    },
    {
        type: "input",
        message: "whats your name?",
        name: "name",
    },
    {
        type: "input",
        message: "Whats your github?",
        name: "github"
    },
    {
        type: "input",
        message: "whats your email?",
        name: "email",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(
        __dirname, fileName
    ), data)
}

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions)
        .then(response => {
            const markDown = generateMarkdown(response)
          writeToFile("test.md", markDown)
        })
}

// Function call to initialize app
init();
