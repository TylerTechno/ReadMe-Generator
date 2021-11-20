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
