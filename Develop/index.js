const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your github name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is a repository name for this project?",
    name: "title",
  },

  {
    type: "input",
    message: "Please describe about this project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please describe about installation.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide a usage information.",
    name: "usage",
  },

  {
    type: "input",
    message: "Please provide a contribution guidelines.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please provide how to test the program.",
    name: "tests",
  },
  {
    type: "list",
    message:
      "Choose a license for your application from a list using allow keys.",
    name: "license",
    choices: [
      "Apache license 2.0",
      "GNU Lesser General Public License v3.0",
      "MIT",
    ],
  },

  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Success!");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (response) {
    writeToFile("README.md", generateMarkdown(response));
  });
}

// function call to initialize program
init();
