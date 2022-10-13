// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Title of Project",
    name: "title",
  },
  {
    type: "input",
    message: "Description",
    name: "description",
  },
  {
    type: "input",
    message: "Installation",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage",
    name: "usage",
  },
  {
    type: "list", // TODO change this to options
    message: "License",
    name: "license",
    choices: ["MIT", "Apache"],
  },
  {
    type: "input",
    message: "Contributing",
    name: "contributing",
  },
  {
    type: "input",
    message: "Tests",
    name: "tests",
  },
  {
    type: "input",
    message: "GitHub username",
    name: "github",
  },
  {
    type: "input",
    message: "Email address",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  inquirer
    .prompt(questions)
    .then((data) =>
      fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log(data)
      )
    );
}
// TODO: Create a function to initialize app
function init() {
  writeToFile("README.md");
}

// Function call to initialize app
init();

// Move inquirer to then lines, and console error to the init function
// call writeToFile init with data so that its separate
// so that writeToFile is just the writing to file part
