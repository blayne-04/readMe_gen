// TODO: Include packages needed for this application
var inquirer = require(`inquirer`)
var fs = require(`fs`)
var markdown = require(`./utils/generateMarkdown`);
const { title } = require("process");
// TODO: Create an array of questions for user input
const questions = 
    [
        {
            type: 'input',
            name: 'title',
            message: 'Please name your project'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description for your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please describe the installation process of your application'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe how your app is meant to be used'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please provide a list of all people who contributed to this project'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Please enter guidelines for testing'
        },
        {
            type: `list`,
            name: `license`,
            message: `License?`,
            choices: ['MIT', 'Apache 2.0', 'MPL 2.0', 'ISC', 'N/A']
        },
        {
            type: 'input',
            name: 'gitProfile',
            message: 'Please enter your github username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email'
        }
    ];



// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('ReadMe.md', markdown(data), (err) =>
    err? console.error(err) : console.log('generated ReadMe.md'
    ))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) =>{
        writeToFile(data)
    })
}

// Function call to initialize app
init();
