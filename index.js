const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const generateHTML = require('./dist/generateHTML.js');
const { create } = require('domain');

const teamMembers = [];

const createTeam = async () => {
  return await inquirer
    .prompt([
      {
        type: 'list',
        name: 'team_role',
        message:
          'Please select the type of team member you would like to create: ',
        choices: ['Engineer', 'Intern', 'I do not want to add a team member.'],
      },
    ])
    .then(async function (response) {
      if (response.team_role === 'Engineer') {
        return await inquirer
          .prompt(questions.engineerQuestions)
          .then(function (engineerInput) {
            const engineer = new Engineer(
              engineerInput.engineer_name,
              engineerInput.engineer_id,
              engineerInput.engineer_email,
              engineerInput.engineer_github
            );
            teamMembers.push(engineer);
            console.log(engineer);
            createTeam();
          });
      } else if (response.team_role === 'Intern') {
        return await inquirer
          .prompt(questions.internQuestions)
          .then(function (internInput) {
            const intern = new Intern(
              internInput.intern_name,
              internInput.intern_id,
              internInput.intern_email,
              internInput.school
            );
            teamMembers.push(intern);
            console.log(intern);
            createTeam();
          });
      } else if (response.team_role === 'I do not want to add a team member.') {
        console.log('Your new team has been created!');
      }
    });
};

const createManager = async () => {
  return await inquirer.prompt(questions.managerQuestions).then((input) => {
    const manager = new Manager(
      input.manager_name,
      input.manager_id,
      input.manager_email,
      input.manager_officeNum
    );
    teamMembers.push(manager);
    console.log(manager);

    createTeam();
  });
};

function writeToFile() {}

function init() {
  console.log(`Welcome to the Team Profile Generator! Let's build your team: `);
  createManager();
}

init();
