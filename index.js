const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./lib/questions');
const generateHTML = require('./dist/generateHTML.js');

const teamMembers = [];

generateHTML(teamMembers);
fs.writeFileSync('index.html', generateHTML, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Your HTML file has been created.');
  }
});

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
          });
      } else if (response.team_role === 'Intern') {
        return await inquirer
          .prompt(questions.internQuestions)
          .then(function (internInput) {
            const intern = new Intern(
              internInput.intern_name,
              internInput.intern_id,
              internInput.intern_email,
              internInput.intern_school
            );
            teamMembers.push(intern);
          });
      } else (response.team_role === 'I do not want to add a team member.') {
        
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

    createTeam();
  });
};

function init() {
  console.log(`Welcome to the Team Profile Generator! Let's build your team: `);
  createManager();
}

init();
