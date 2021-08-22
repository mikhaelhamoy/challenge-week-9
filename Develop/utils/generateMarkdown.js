function installation(confirm, content){
  if (confirm)
    return content;
  else
    return '';
};

function usage(confirm, content){
  if (confirm)
    return content;
  else
    return '';
};

function contributing(confirm, content){
  if (confirm)
    return content;
  else
    return '';
};

function test(confirm, content){
  if (confirm)
    return content;
  else
    return '';
};

function license(confirm, content){
  if (confirm)
    return renderLicenseSection(content);
  else
    return '';
};

function questions(confirm, username, email){
  if (confirm)
    return `
* GitHub: [${username}](https://github.com/${username})
* Email: [${email}](mailto:${email})

For questions, contact me through email, and for more projects and updates, follow me on GitHub.
    `;
  else
    return '';
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
License under the [${license}](./LICENSE)
  `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
  
${data.description}
  
## Table of Contents
  
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#tests)
* [Questions](#questions)
  
## Installation
  
${installation(data.confirmInstallation, data.installation)}
  
## Usage
  
${usage(data.confirmUsage, data.usage)}

## Contributing
  
${contributing(data.confrimContributing, data.contributing)}
  
## Tests
  
${test(data.confirmTest, data.test)}
      
## License

${license(data.confirmLicense, data.license)}
  
## Questions

${questions(data.confirmQuestions, data.username, data.email)}
`;
};

module.exports = generateMarkdown;
