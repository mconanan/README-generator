// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }

  else if (license === 'APACHE 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }

  else if (license === "GPL 3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }

  else if (license === "BSD") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }

  else if (license === "None") {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') { return '' }
  else return `* [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') { return '' }
  else return ` ## License`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.Title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  
  ${renderLicenseLink(data.license)}
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ${renderLicenseBadge(data.license)}
  
  ## Contributing
  ${data.contributions}
  
  ## Tests
  ${data.tests}
  
  ## Questions

  If you have any questions about the repository, you can contact me at ${data.email}, or view my GitHub at 
  [${data.GitHubUsername}] (https://github.com/${data.GitHubUsername}/).
`;
}

module.exports = generateMarkdown;
