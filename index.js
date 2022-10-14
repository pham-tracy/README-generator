// Required packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
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
    choices: ["MIT", "Apache", "GPL"],
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

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log(data)
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => writeToFile("README.md", data));
}

// Function call to initialize app
init();
