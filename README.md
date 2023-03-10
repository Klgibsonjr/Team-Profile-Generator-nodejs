<h1 align='center'>Team Profile Generator</h1>

## License

![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)

---

## Description

> This NodeJS application was created to help manager's in the tech industry generate a team profile page via the CLI utilizing the `inquirer` module to prompt the user with questions needed to generate their team profile page. Object-oriented programming (OOP) utilizing constructor functions as well as test-driven development (TDD) utilzing Jest was demonstrated in this project.

## Table of Contents

- [License](#license)
- [User Story](#user)
- [Acceptance Criteria](#acceptance)
- [Demonstration](#demonstration)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

---

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

---

## Demonstration

Below is a link to a walkthrough video showing the application at work, as well as showcasing the testing of the application.

[Team Profile Generator Walkthrough Video](https://drive.google.com/file/d/1DZ8CjDu6bLvzyXupyPAHo_r_onqZVDb3/view)

Below are a few screenshots showing the final result of the generated profile page as well as some screenshots of the testing results of the application.

---

### Generated Team Profile HTML Page:

![Team Profile HTML Page](./src/assets/teamProfilePage.png)

---

### Team Profile App running in the terminal:

![Team Profile App](./src/assets/teamProfileApp.png)

---

### Team Profile Generator Testing Results:

![Team Profile Test](./src/assets/teamProfileTest.png)

---

## Installation

First, the user must ensure that `Node.js` is installed by inputting the following command to check and see if `node.js` is installed.

```zsh
node --version
```

If Node is not installed, then click on the link to download [Node.js](https://nodejs.org/en/)

Once Node.js is installed, the user should clone the repository from [Github](https://github.com/Klgibsonjr/Team-Profile-Generator-nodejs).

---

## Usage

To run the test, type the following command in the CLI:

```zsh
npm run test
```

To run the application, type the following command in the root directory:

```zsh
node index.js
```

---

## Contributing

For any future contributing please visit my [Github](https://github.com/Klgibsonjr/Team-Profile-Generator-nodejs) account.

---

## Test

`Jest` was used for testing purpose in this application.

---

## Questions

If you have any questions/concerns you can reach me via email at klgibsonjr@gmail.com, or visit my [Github](https://github.com/Klgibsonjr/Team-Profile-Generator-nodejs) to view more of my projects.
