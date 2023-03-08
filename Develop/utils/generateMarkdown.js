// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT': 
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'MPL 2.0':     
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      break;
    case 'ISC': 
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
      break;
    case 'N/A':
      return 'Unlicensed'
      break;
    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT': 
      return `https://opensource.org/license/mit/`
      break;
    case 'Apache 2.0':
      return `https://opensource.org/license/apache-2-0/`
      break;
    case 'MPL 2.0':     
      return `https://opensource.org/license/mpl-2-0/`
      break;
    case 'ISC': 
      return `https://opensource.org/license/isc-license-txt/`
      break;
    case 'N/A':
      return `https://choosealicense.com/no-permission/`
      break;
    default:
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}
## Table Of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributions](#contributions)
  5. [Testing](#testing)
  6. [License](#license)
  7. [Questions](#questions)

## Description 
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Testing
${data.testing}

## License
[License Documentation](${renderLicenseLink(data.license)})

## Questions
[Github Profile](https://github.com/${data.gitProfile})

If you can't find the answer to your questions on my github profile feel free to contact me at ${data.email}
`;
}

module.exports = generateMarkdown;
