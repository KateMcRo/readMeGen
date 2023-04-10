const {renderMIT, renderApache, renderMOZ, renderGNU} = require("./constants")

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'Mozilla Public 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    case 'GNU GPL':
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
    default:
      return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `[License: MIT](https://opensource.org/licenses/MIT)`
    case 'Apache 2.0':
      return `[License](https://opensource.org/licenses/Apache-2.0)`
    case 'Mozilla Public 2.0':
      return `[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`
    case 'GNU GPL':
      return `[License: LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)`
    default:
      return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, user) {
  switch (license) {
    case 'MIT':
      return renderMIT(user)
    case 'Apache 2.0': 
      return renderApache(user)
    case 'Mozilla Public 2.0':
      return renderMOZ(user)
    case 'GNU GPL':
      return renderGNU()
    default:
      return ``
  }  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributions
  
  ${data.contribution}
  
  ## License

  ${renderLicenseBadge(data.license)}

  ${renderLicenseSection(data.license, data.username)}

  ${renderLicenseLink(data.license)}

  ## Tests
  
  ${data.test}

  ## Questions

  [${data.username}](${data.github})<br>
  Email: ${data.email}

  ${data.connect}

`;
}

module.exports = generateMarkdown;
