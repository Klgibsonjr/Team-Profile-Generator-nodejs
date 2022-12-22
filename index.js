const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions');
const generateHTML = require('./src/generateHTML');

const teamMembers = [];

const createManager = () => {
  return inquirer.prompt(questions.managerQuestions).then((input) => {
    const manager = new Manager(
      input.manager_name,
      input.manager_id,
      input.manager_email,
      input.manager_officeNum
    );
    teamMembers.push(manager);
    // console.log(manager);

    createTeam();
  });
};

const createTeam = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'team_role',
        message:
          'Please select the type of team member you would like to create: ',
        choices: ['Engineer', 'Intern', 'I do not want to add a team member.'],
      },
    ])
    .then(function (data) {
      if (data.team_role === 'Engineer') {
        return inquirer
          .prompt(questions.engineerQuestions)
          .then(function (engineerInput) {
            const engineer = new Engineer(
              engineerInput.engineer_name,
              engineerInput.engineer_id,
              engineerInput.engineer_email,
              engineerInput.engineer_github
            );
            teamMembers.push(engineer);
            // console.log(engineer);
            createTeam();
          });
      } else if (data.team_role === 'Intern') {
        return inquirer
          .prompt(questions.internQuestions)
          .then(function (internInput) {
            const intern = new Intern(
              internInput.intern_name,
              internInput.intern_id,
              internInput.intern_email,
              internInput.school
            );
            teamMembers.push(intern);
            // console.log(intern);
            createTeam();
          });
      } else if (data.team_role === 'I do not want to add a team member.') {
        console.log('Your new team has been created!');
      } else {
        return teamMembers;
      }
    });
};

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (error) => {
    if (error) {
      console.log(error);
      return;
    } else {
      console.log('Your team profiles have been generated!');
    }
  });
}

createManager()
  .then(createTeam)
  .then((teamMembers) => {
    return generateHTML(teamMembers);
  });

// function init() {
//   console.log(`\n      ** Welcome to Team Profile Generator **

//   Answer the prompts below to generate your team!\n
//   -----------------------------------------------\n`);
//   createManager().then((data) => {
//     writeToFile('./dist/sampleIndex.html', generateHTML(teamMembers));
//   });
// }

// init();
