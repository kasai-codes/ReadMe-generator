

// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const markdown = require('./utils/generateMarkdown')
const fs = require('fs')
const generateReadme = require('./utils/')
// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title"
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // use the fs module to write data to to desired filename
}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt(questions)

        .then(answers => {

            console.log(answers);
            markdown( answers );

            // call writetofle function with desired file name and markdown
        })
}

// Function call to initialize app
init();
