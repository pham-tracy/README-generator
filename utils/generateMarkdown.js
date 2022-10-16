// Returns license badge and link to the license based on which license is chosen by the user
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    case "GPL":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    default:
      return "";
  }
}

// Returns license link based on which license is chosen by the user
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";

    case "Apache":
      return "https://opensource.org/licenses/Apache-2.0";

    case "GPL":
      return "https://opensource.org/licenses/gpl-license";

    default:
      return "";
  }
}

// Generates markdown for README file
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);

  return `
  
  # ${data.title} ${licenseBadge}

  ## Description

  ${data.description}


  ## Table of Contents

  * [Description](#description)  
  * [Installation](#installation)  
  * [Usage](#usage)  
  * [License](#license)  
  * [Contributing](#contributing)  
  * [Tests](#tests)  
  * [Questions](#questions)  

  ## Installation

    ${data.installation}


  ## Usage

    ${data.usage}


  ## License

  ${data.license} License is used for this project. Please refer to the following link for more information: ${licenseLink}.


  ## Contributing
  ${data.contributing}


  ## Tests

    ${data.tests}


  ## Questions

  If you have any questions about this project, please visit my GitHub here: https://www.github.com/${data.github}.

  For further questions, please email me at ${data.email}.
  `;
}

// Exports generateMarkdown function so that it can be used in index.js
module.exports = generateMarkdown;
