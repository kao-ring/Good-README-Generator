const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "Title",
  },
  {
    type: "input",
    message: "Please type a description.",
    name: "Description",
  },
  {
    type: "input",
    message: "Please provide an installation instructions.",
    name: "Installation",
  },
  {
    type: "input",
    message: "Please provide a usage information.",
    name: "Usage",
  },

  {
    type: "input",
    message: "Please provide a contribution guidelines.",
    name: "Contributing",
  },
  {
    type: "input",
    message: "Please provide a test instructions.",
    name: "Tests",
  },
  {
    type: "list",
    message:
      "Choose a license for your application from a list using allow keys.",
    name: "License",
    choices: [
      "Apache license 2.0",
      "GNU Lesser General Public License v3.0",
      "MIT",
    ],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// function to write README file

function writeToFile(fileName, data) {
  fs.appendFile("README.md", JSON.stringify(response), function () {
    console.log("You got it!");
  });
}

// function to initialize program
function init() {}

// function call to initialize program
init();
