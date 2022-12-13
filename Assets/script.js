const fs = require("fs/promises");
const inquirer = require("inquirer");
const path = require("path");
const { generateHtml } = require("./utils/generateHtml");

async function init() {
  const teamArray = [];
  // try {
  //   const answers = await inquirer.prompt(employeeQuestions).then((answers) => {
  //     if (answers.position === "Manager") {
  //       inquirer.prompt(ManagerQuestions);
  //     }
  //     if (answers.position === "intern") {
  //       inquirer.prompt(internQuestions);
  //     }
  //     if (answers.position === "engineer") {
  //       inquirer.prompt(engineerQuestions);
  //     }
  //   });
  //   console.log(answers);
  //   if (answers) {
  //     const html = generateHtml(answers);
  //     writeToFile("index.html", html);
  //   }
  // } catch (err) {
  //   console.error(err);
  // }

  function createManager() {
    console.log("This is a new Manager");
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
          choices: ["Manager", "intern", "engineer"],
        },

        {
          name: "officenumber",
          type: "input",
          message: "What is your office number?",
        },
      ])
      .then((newManager) => {
        const ManagerClass = new Manager(
          newManager.id,
          newManager.name,
          newManager.email,
          newManager.position,
          newManager.officenumber
        );
        teamArray.push(ManagerClass);
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
          choices: ["Manager", "intern", "engineer"],
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
        teamArray.push(internClass);
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
          choices: ["Manager", "intern", "engineer"],
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
        teamArray.push(engineerClass);
      })
      .catch((err) => {
        console.error(err);
        process.exitCode = 1;
        process.exit();
      });
  }

  function createTeam() {
    inquirer.prompt(
      {
        name: "add a team member",
        type: "list",
        message: "What team member do you want to add?",
        choices: ["Manager", "intern", "engineer", "none"],
      },

      then((newTeamMember) => {
        switch (newTeamMember) {
          case "intern":
            createIntern();
            break;
          case "engineer":
            createEngineer();
            break;
          case "Manager":
            createManager();
            break;

          default:
            generateHtml();

            process.exitCode = 0;
            process.exit();
        }
      })
    );
  }

  createTeam();
}

init();
