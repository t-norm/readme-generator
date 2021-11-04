// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'Unlicensed') {
    return `<p align="center"><img src="https://img.shields.io/badge/License-${license}-blue?style=plastic" /></p>`
  } else {
    return `<p align="center"><img src="https://img.shields.io/badge/License-${license}-red?style=plastic" /></p>`
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink() {
  return `
  For more information, please go to <a href="https://choosealicense.com/licenses/" target="_blank">choosealicense.com/licenses/</a>
  `
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  return `
  ${renderLicenseBadge(data)}

  ${renderLicenseLink(data)}
  `
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# <h1 align="center">${data.title}</h1>

  ${renderLicenseBadge(data.license)}

  # Description:
  ${data.description}

  # Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  # Installation:
  ${data.installation}

  # Usage:
  ${data.usage}

  # Contribution:
  ${data.contribution}

  # Tests:
  ${data.tests}

  # License:
  ${renderLicenseSection(data.license)}

  # Questions:
  ${data.questions}

  Find me on GitHub: [${data.username}](https://github.com/${data.username})
  
  Email me with any questions: ${data.email}`
};

module.exports = {generateMarkdown};
