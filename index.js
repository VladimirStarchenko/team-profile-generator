const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const template = require("./src/page-template");

const employeeDb = [];

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

function confirmMembers(managerAnswer) {
  return inquirer.prompt(confirmation).then((answers) => {
    const manager = new Manager(
      managerAnswer.managerName,
      managerAnswer.managerID,
      managerAnswer.managerEmail,
      managerAnswer.managerNumber
    );
    employeeDb.push(manager);
    if (answers.add_more) {
      return addMembers();
    } else {
      return answers;
    }
  });
}

function addMembers() {
  return inquirer.prompt(questions).then((answers) => {
    if (answers.addMember === "Engineer") {
      addEngineer();
    } else if (answers.addMember === "Intern") {
      addIntern();
    } else {
      console.log(employeeDb);
      fs.writeFileSync("./dist/index.html", template(employeeDb));
      return console.log("Your team has been built!");
    }
  });
}

function addEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    const engineer = new Engineer(
      engineerAnswers.engName,
      engineerAnswers.engId,
      engineerAnswers.engEmail,
      engineerAnswers.engGithub
    );
    employeeDb.push(engineer);
    addMembers();
  });
}

function addIntern() {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    const intern = new Intern(
      internAnswers.intName,
      internAnswers.intId,
      internAnswers.intEmail,
      internAnswers.intSchool
    );
    employeeDb.push(intern);
    addMembers();
  });
}

employeeCards()
  .then(confirmMembers)
  .catch((err) => {
    console.log(err);
  });
