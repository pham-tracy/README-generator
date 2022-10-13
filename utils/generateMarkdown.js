// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   switch (license) {
//     case "MIT":
//     return;
//     break;

//     case 2: "",
//     return
//     break;

//     case 3: "",
//     return;
//     break;

//     default:
//     return ""
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}


## Table of Contents


## Installation

${data.installation}


## Usage

${data.usage}


## License

${data.license} is used for this project. Please refer to the LICENSE file in the repository for more details.


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
