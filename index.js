const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const template = require("./src/page-template");

const employeeCards = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "Please enter the name of your team Manager. (Required)",
      validate: (managerName) => {
        if (managerName) {
          return true;
        } else {
          console.log("Cannot leave as a blank value!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "managerID",
      message: "Please enter the employee ID of your team Manager. (Required)",
      validate: (managerID) => {
        if (managerID) {
          return true;
        } else {
          console.log("Cannot leave as a blank value!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "managerEmail",
      message:
        "Please enter the email address of your team Manager. (Required)",
      validate: (managerEmail) => {
        if (managerEmail) {
          return true;
        } else {
          console.log("Cannot leave as a blank value!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "managerNumber",
      message:
        "Please enter the office number of your team Manager. (Required)",
      validate: (managerNumber) => {
        if (managerNumber) {
          return true;
        } else {
          console.log("Cannot leave as a blank value!");
          return false;
        }
      },
    },
  ]);
};

const confirmation = [
  {
    type: "confirm",
    name: "add_more",
    message: "Would you like to add more members?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engName",
    message: "Whats your Engineers name?",
  },
  {
    type: "input",
    name: "engId",
    message: "Whats your Engineers ID?",
  },
  {
    type: "input",
    name: "engEmail",
    message: "Whats your Engineers email?",
  },
  {
    type: "input",
    name: "engGithub",
    message: "Whats your Engineers github username?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "intName",
    message: "Whats your Interns name?",
  },
  {
    type: "input",
    name: "intId",
    message: "Whats your Interns ID?",
  },
  {
    type: "input",
    name: "intEmail",
    message: "Whats your Interns email?",
  },
  {
    type: "input",
    name: "intSchool",
    message: "Whats your Interns school?",
  },
];

const questions = [
  {
    type: "list",
    name: "addMember",
    message: "What team member would you like to add?",
    choices: ["Engineer", "Intern", "Finish building my team"],
  },
];
