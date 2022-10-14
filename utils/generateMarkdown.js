// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


${data.description}


## Table of Contents

* [Description](#Description)  
* [Installation](#Installation)  
* [Usage](#Usage)  
* [License](#License)  
* [Contributing](#Contributing)  
* [Tests](#Tests)  
* [Questions](#Questions)  

## Installation

${data.installation}


## Usage

${data.usage}


## License

${data.license} License is used for this project. Please refer to the LICENSE file in the repository for more details.


## Contributing
${data.contributing}


## Tests

${data.tests}


## Questions

If you have any questions about this project, please visit my github here: https://www.github.com/${data.github}.

For further questions, please email me at ${data.email}
`;
}

module.exports = generateMarkdown;

// TODO: how to add license badge and links to license section
