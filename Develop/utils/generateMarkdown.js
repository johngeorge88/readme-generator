function getBadge(license) {
  if (license == 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license == 'Apache 2.0') {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license == 'ISC') {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
  if (license == 'Mozilla Public licensgete') {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  if (license == 'IBM Public license') {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
  if (license == 'Artistic license 2.0') {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ### License:
  ${getBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Contribution](#contribution)
* [Credits](#credits)
* [Questions](#questions)

## Installation
${data.installation}

## Usage 
${data.about}

## Testing
${data.test}

## Contribution
${data.contribute}

## Credits:
${data.credits}

## Questions:
* <a href="https://www.github.com/${data.gitName}">GitHub</a>
* <a href="mailto:${data.email}">You can also e-mail me for any other questions</a>
`;
}

module.exports = generateMarkdown;
