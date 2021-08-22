// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Array of questions for user input
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
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to add Installation Instructions section?',
        default: true
    },
    {
        type: 'editor',
        name: 'installation',
        message: 'What is the Installation Instructions?',
        when: ({ confirmInstallation }) => {
            if (confirmInstallation) {
                return true;
            } else {
                return false;
            }
        }
    }, 
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to add Usage Information section?',
        default: true
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'What is the Usage Information?',
        when: ({ confirmUsage }) => {
            if (confirmUsage) {
                return true;
            } else {
                return false;
            }
        }
    }, 
    {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Would you like to add Contribution Guidelines section?',
        default: true
    },
    {
        type: 'editor',
        name: 'contributing',
        message: 'What is the Contribution Guidelines?',
        when: ({ confirmContributing }) => {
            if (confirmContributing) {
                return true;
            } else {
                return false;
            }
        }
    }, 
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Would you like to add Test Instructions section?',
        default: true
    },
    {
        type: 'editor',
        name: 'test',
        message: 'What is the Test Instructions?',
        when: ({ confirmTest }) => {
            if (confirmTest) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add License section?',
        default: true
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use for this project?',
        choices: ['Apache License 2.0',
            'GNU General Public License v3.0', 
            'MIT License', 
            "BSD 2-Clause 'Simplified' License", 
            "BSD 3-Clause 'New' or 'Revised' License", 
            'Boost Software License 1.0', 
            'Creative Commons Zero v1.0 Universal', 
            'Eclipse Public License 2.0', 
            'GNU Affero General Public License v3.0', 
            'GNU General Public License v2.0', 
            'GNU Lesser General Public License v2.1', 
            'Mozilla Public License 2.0', 
            'The Unlicense'],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmQuestions',
        message: 'Would you like to add Questions section?',
        default: true
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username? (Required)',
        when: ({ confirmQuestions }) => {
            if (confirmQuestions) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        when: ({ confirmQuestions }) => {
            if (confirmQuestions) {
                return true;
            } else {
                return false;
            }
        }
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err)
            console.log(err);
        else 
            console.log("File written successfully\n");
    });
};

// Function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
    .then(results => writeToFile('./dist/README.md', results))
    .catch(err => {
        console.log(err);
    });