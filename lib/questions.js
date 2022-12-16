const managerQuestions = [
  {
    type: 'input',
    name: 'manager-name',
    message: "What is the manager's name?\n",
    validate: (res) => {
      if (res) {
        return true;
      }
      return "Please enter a manager's name.";
    },
  },
  {
    type: 'input',
    name: 'manager-id',
    message: "Please enter manager's employee ID number.\n",
    validate: (res) => {
      if (isNaN(res)) {
        return 'Please enter a valid employee ID number';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'manager-email',
    message: "Please enter manager's email address.\n",
    validate: (res) => {
      const validEmail =
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
    name: 'manager-officeNum',
    message: "Please enter the manager's office Number.\n",
    validate: (res) => {
      if (isNaN(res)) {
        return 'Please enter a valide office number.';
      }
      return true;
    },
  },
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'engineer-name',
    message: "Please enter engineer's name.\n",
    validate: (res) => {
      if (res) {
        return true;
      }
      return "Please enter a engineer's name.";
    },
  },
  {
    type: 'input',
    name: 'engineer-id',
    message: "Please enter engineer's employee ID number.\n",
    validate: (res) => {
      if (isNaN(res)) {
        return 'Please enter a valid employee ID number.';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'engineer-email',
    message: "Please enter engineer's email address.\n",
    validate: (res) => {
      const validEmail =
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
    name: 'engineer-github',
    message: "Please enter engineer's github username.\n",
  },
];

const internQuestions = [
  {
    type: 'input',
    name: 'intern-name',
    message: "Please enter intern's name.\n",
    validate: (res) => {
      if (res) {
        return true;
      }
      return "Please enter a intern's name.";
    },
  },
  {
    type: 'input',
    name: 'intern-id',
    message: "Please enter intern's employee ID number.\n",
    validate: (res) => {
      if (isNaN(res)) {
        return 'Please enter a valid employee ID number.';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'intern-email',
    message: "Please enter intern's email address.\n",
    validate: (res) => {
      const validEmail =
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
    message: 'What school did the intern attend or is currently enrolled?\n',
  },
];

module.exports = questions;
