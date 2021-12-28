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
