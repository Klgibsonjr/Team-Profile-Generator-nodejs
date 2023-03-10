module.exports = {
  managerQuestions: [
    {
      type: 'input',
      name: 'manager_name',
      message: "Please enter manager's name: ",
      validate: (res) => {
        if (res) {
          return true;
        }
        return "Please enter a manager's name.";
      },
    },
    {
      type: 'input',
      name: 'manager_id',
      message: "Please enter manager's employee ID number: ",
      validate: (res) => {
        if (isNaN(res)) {
          return 'Please enter a valid employee ID number';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'manager_email',
      message: "Please enter manager's email address: ",
      validate: (res) => {
        validEmail =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
            res
          );

        if (validEmail) {
          return true;
        }
        return 'Please enter a valid email address.';
      },
    },
    {
      type: 'input',
      name: 'manager_officeNumber',
      message: "Please enter the manager's office Number: ",
      validate: (res) => {
        if (isNaN(res)) {
          return 'Please enter a valide office number.';
        }
        return true;
      },
    },
  ],

  engineerQuestions: [
    {
      type: 'input',
      name: 'engineer_name',
      message: "Please enter engineer's name: ",
      validate: (res) => {
        if (res) {
          return true;
        }
        return "Please enter a engineer's name.";
      },
    },
    {
      type: 'input',
      name: 'engineer_id',
      message: "Please enter engineer's employee ID number: ",
      validate: (res) => {
        if (isNaN(res)) {
          return 'Please enter a valid employee ID number.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'engineer_email',
      message: "Please enter engineer's email address: ",
      validate: (res) => {
        validEmail =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
            res
          );

        if (validEmail) {
          return true;
        }
        return 'Please enter a valid email address.';
      },
    },
    {
      type: 'input',
      name: 'engineer_github',
      message: "Please enter engineer's github username: ",
    },
  ],

  internQuestions: [
    {
      type: 'input',
      name: 'intern_name',
      message: "Please enter intern's name: ",
      validate: (res) => {
        if (res) {
          return true;
        }
        return "Please enter a intern's name.";
      },
    },
    {
      type: 'input',
      name: 'intern_id',
      message: "Please enter intern's employee ID number: ",
      validate: (res) => {
        if (isNaN(res)) {
          return 'Please enter a valid employee ID number.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'intern_email',
      message: "Please enter intern's email address: ",
      validate: (res) => {
        validEmail =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
            res
          );

        if (validEmail) {
          return true;
        }
        return 'Please enter a valid email address.';
      },
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school did the intern attend or is currently enrolled?',
    },
  ],
};
