function badge(confirm, license){
  const licenseArr = [
    'Apache License 2.0',
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
    'The Unlicense'
  ];
  
  const badgeArr = [
    'Apache-2.0',
    'GPL-3.0',
    'MIT',
    'BSD-2-Clause',
    'BSD-3-Clause',
    'BSL-1.0',
    'CC0-1.0',
    'EPL-2.0',
    'AGPL-3.0',
    'GPL-2.0',
    'LGPL-2.1',
    'MPL-2.0',
    'Unlicense'
  ];

  if (confirm){
    const badgeIndex = licenseArr.indexOf(license);
    const badge = badgeArr[badgeIndex];

    return `
    
![License Badge](https://img.shields.io/badge/license-${badge}-green)
    
    `;
  }
  else
    return '';
};

function installation(confirm, content){
  if (confirm)
    return `
    
${content}
      
      `;
  else
    return '';
};

function usage(confirm, content){
  if (confirm)
    return `
    
${content}
      
      `;
  else
    return '';
};

function contributing(confirm, content){
  if (confirm)
    return `
    
${content}
      
      `;
  else
    return '';
};

function test(confirm, content){
  if (confirm)
    return `
    
${content}
    
    `;
  else
    return '';
};

function license(confirm, license){
  if (confirm)
  return `

Licensed under [${license}](./LICENSE).
  
    `;
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
function renderLicenseSection(license) {};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${badge(data.confirmLicense, data.license)}
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
