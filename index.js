// TODO: Include packages needed for this application
const fs = require('fs');
const iq = require('inquirer');
const markdownGen = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Input the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want? I dont have all day.',
        choices: ['MIT', 'Apache 2.0', 'Mozilla Public 2.0', 'GNU GPL']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Whats your username?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Input your GitHub link:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Which email spam folder should we direct questions to?',
    },
    {
        type: 'input',
        name: 'connect',
        message: 'Do you have special instructions for how people should reach out to you?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error){
        error ? console.error(error) : console.log("created README")})
}

// TODO: Create a function to initialize app
async function init() {
    const response = await iq.prompt(questions)
    const markdown = markdownGen(response)
    writeToFile('README.md', markdown)
}

// Function call to initialize app
init();
