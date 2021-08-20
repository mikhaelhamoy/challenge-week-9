// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the project title!');
                return false;
            }
        }
    },
    {
        type: 'editor',
        name: 'description',
        message: 'What is the project description? (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter the project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation instructions? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter the installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter the usage information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What is the contribution guidelines? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter the contribution guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'What is the test instructions? (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter the test instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use for this project?',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0',  'MIT License', "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeContent =  `
# Your Project Title

${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Test](#tests)

## Installation

## Usage
    
## License

## Contributing

## Tests
    `;

    fs.writeFile(fileName, readmeContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err)
            console.log(err);
        else 
            console.log("File written successfully\n");
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
    .then(results => writeToFile('./dist/README.md', results))
    .catch(err => {
        console.log(err);
    });