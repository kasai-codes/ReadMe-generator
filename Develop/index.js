
const inquirer = require('inquirer')
const fs = require('fs')
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'projectTitle',
        },

        {
            type: 'input',
            message: 'Please write a description of your project:',
            name: 'description',
        },


        {
            type: 'input',
            message: 'Please provide installation instructions if any:',
            name: 'installation',
        },

        {
            type: 'input',
            message: 'What is the purpose of this project?',
            name: 'usage',
        },
        {
            type: "list",
            name: "license",
            message: "Chose the a license for this project: ",
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
            name: 'contributing',
        },


        {
            type: 'input',
            message: 'Is there a test?',
            name: 'tests',
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
// Async function using util.promisify 
async function init() {
    try {
        // Ask user questions and generate responses once all questions have been answered 
        const answers = await promptUser();
        const generateReadme = generateMarkdown(answers);
        // Write new README.md file
        await writeFileAsync('./README.md', generateReadme);
        console.log('Successfully wrote to README.md');
    } catch (err) {
        console.log(err);
    }
}

init();  