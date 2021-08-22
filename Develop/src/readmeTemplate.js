const generatePage = templateData => {

return `
# ${data.title}

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

${data.installation}

## Usage

${data.usage}
    
## License

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions
`;

};

module.exports = generatePage;