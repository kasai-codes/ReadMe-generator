
const inquirer = require('inquirer')
const fs = require('fs')
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },

        {
            type: 'input',
            message: 'Please write a description of your project:',
            name: 'description',
        },


        {
            type: 'input',
            message: 'Please provide installation instructions if any:',
            name: 'install',
        },

        {
            type: 'input',
            message: 'What is the purpose of this project?',
            name: 'usage',
        },
        {
            type: "list",
            name: "license",
            message: "Chose the anlicense for this project: ",
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
            type: 'input',
            message: 'Who is contributing to this project?',
            name: 'contributers',
        },


        {
            type: 'input',
            message: 'Is there a test?',
            name: 'test',
        },

        {
            type: 'input',
            message: 'What if an issue arises?',
            name: 'questions',
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }

    ])
}
