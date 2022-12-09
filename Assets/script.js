const fs = require("fs/promises");
const inquirer = require("inquirer");
const path = require("path");
const { generateHtml } = require("./utils/generateHtml");

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

  function createManager() {
    console.log("This is a new manager");
    inquirer
      .prompt([
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

        {
          name: "officenumber",
          type: "input",
          message: "What is your office number?",
        },
      ])
      .then((newManager) => {
        const managerClass = new manager(
          newManager.id,
          newManager.name,
          newManager.email,
          newManager.position,
          newManager.officenumber
        );
      });
  }

  function createIntern() {
    console.log("This is a new intern");
    inquirer
      .prompt([
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

        {
          name: "school",
          type: "input",
          message: "What university did you go to or currently attendibg?",
        },
      ])
      .then((newIntern) => {
        const internClass = new intern(
          newIntern.id,
          newIntern.name,
          newIntern.email,
          newIntern.position,
          newIntern.school
        );
      });
  }

  function createEngineer() {
    console.log("This is a new engineer");
    inquirer
      .prompt([
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

        {
          name: "username",
          type: "input",
          message: "What is your github username?",
        },
      ])
      .then((newEngineer) => {
        const engineerClass = new engineer(
          newEngineer.id,
          newEngineer.name,
          newEngineer.email,
          newEngineer.position,
          newEngineer.username
        );
      });
  }

  function createTeam() {
    inquirer.prompt(
      {
        name: "add a team member",
        type: "list",
        message: "What team member do you want to add?",
        choices: ["manager", "intern", "engineer", "none"],
      },

      then((newTeamMember) => {
        switch (("intern", "engineer", "none")) {
          case "intern":
            createIntern()
            break;
          case "engineer":
            createEngineer()
            break

          default:
            break;

        }
      })
    );
  }
}

