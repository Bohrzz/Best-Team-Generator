const fs = require("fs/promises");
const inquirer = require("inquirer");
const path = require("path");
const { generateHtml } = require("./utils/generateHtml");

const employeeQuestions = [
  {
    name: "id",
    type: "input",
    message: "What is your employee id?",
  },
  {
    name: "name",
    type: "input",
    message: "What is your name?",
  },
  {
    name: "email",
    type: "input",
    message: "What is your e-mail?",
  },

  {
    name: "position",
    type: "list",
    message: "What is your position?",
    choices: ["manager", "intern", "engineer"],
  },
];

const internQuestions = [
  {
    name: "school",
    type: "input",
    message: "What university did you go to or currently attendibg?",
  },
];

const managerQuestions = [
  {
    name: "officenumber",
    type: "input",
    message: "What is your office number?",
  },
];
const engineerQuestions = [
  {
    name: "username",
    type: "input",
    message: "What is your github username?",
  },
];

async function init() {
  try {
    const answers = await inquirer.prompt(employeeQuestions).then((answers) => {
      if (answers.position === "manager") {
        inquirer.prompt(managerQuestions);
      }
      if (answers.position === "intern") {
        inquirer.prompt(internQuestions);
      }
      if (answers.position === "engineer") {
        inquirer.prompt(engineerQuestions);
      }
    });
    console.log(answers);
    if (answers) {
      const html = generateHtml(answers);
      writeToFile("index.html", html);
    }
  } catch (err) {
    console.error(err);
  }
  
 createManager(){
  console.log("This is a new manager")
  inquirer.prompt([{}]).then((newManager)=>{ const managerClass= new manager(

    newManager.id,
    newManager.name,
    newManger.email,
    newManager.position,
    newManager.officenumber,

  )})
  
  
 }

}