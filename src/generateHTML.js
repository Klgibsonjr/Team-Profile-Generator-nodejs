const generateManager = (manager) => {
  return `
  <div
  class="border-2 border-slate-600 rounded-md gap-4 mx-4 my-4 shadow-xl w-[250px] h-[275px]">
  <div class="flex flex-col bg-gradient-to-l from-slate-400 to-slate-700">
    <h2 class="text-white ml-4 p-2">${manager.name}</h2>
    <h3 class="text-white ml-4 p-2">
      <i class="fas fa-mug-hot"></i>${manager.getRole()}
    </h3>
  </div>
  <div>
    <ul
      class="border-2 border-slate-300 divide-y divide-solid rounded-md mx-2 my-8">
      <li class="mx-4 p-2 text-xs md:text-sm lg:text-md">
        ID: ${manager.id}
      </li>
      <li class="mx-4 p-2 text-xs md:text-sm lg:text-md">
        Email: <a href='mailto:${manager.email}>${manager.email}
      </li>
      <li class="mx-4 p-2 text-xs md:text-sm lg:text-md">
        Office Number: ${manager.officeNumber}
      </li>
    </ul>
  </div>
</div>
`;
};

const generateEngineer = (engineer) => {
  return `
  <div
  class="border-2 border-slate-600 rounded-md gap-4 mx-4 my-4 shadow-xl w-[250px] h-[275px]">
  <div class="flex flex-col bg-gradient-to-l from-slate-400 to-slate-700">
    <h2 class="text-white ml-4 p-2">${engineer.name}</h2>
    <h3 class="text-white ml-4 p-2">
      <i class="fas fa-glasses"></i>${engineer.getRole()}
    </h3>
  </div>
  <div>
    <ul
      class="border-2 border-slate-300 divide-y divide-solid rounded-md mx-2 my-8">
      <li class="mx-4 p-2 text-xs md:text-sm lg:text-md">
        ID: ${engineer.id}
      </li>
      <li class="mx-4 p-2 text-xs md:text-sm lg:text-md">
        Email: ${engineer.email}
      </li>
      <li class="mx-4 p-2 text-xs md:text-sm lg:text-md">
        GitHub: ${engineer.github}
      </li>
    </ul>
  </div>
</div>
`;
};

const generateIntern = (intern) => {
  return `
  <div
  class="border-2 border-slate-600 rounded-md gap-4 mx-4 my-4 shadow-xl w-[250px] h-[275px]">
  <div class="flex flex-col bg-gradient-to-l from-slate-400 to-slate-700">
    <h2 class="text-white ml-4 p-2">${intern.name}</h2>
    <h3 class="text-white ml-4 p-2">
      <i class="fas fa-user-graduate"></i>${intern.getRole()}
    </h3>
  </div>
  <div>
    <ul
      class="border-2 border-slate-300 divide-y divide-solid rounded-md mx-2 my-8">
      <li class="mx-4 p-2 text-xs md:text-sm lg:text-md">ID: ${intern.id}</li>
      <li class="mx-4 p-2 text-xs md:text-sm lg:text-md">
        Email: ${intern.email}
      </li>
      <li class="mx-4 p-2 text-xs md:text-sm lg:text-md">
        School: ${intern.school}
      </li>
    </ul>
  </div>
</div>
`;
};

const generateHTML = (teamMembers) => {
  const teamCardArray = [];
  console.log(teamMembers);

  for (let i = 0; i < teamMembers.length; i++) {
    const employee = teamMembers[i];
    const role = employee.getRole();

    if (role === 'Manager') {
      const generateManagerCard = generateManager(employee);
      teamCardArray.push(generateManagerCard);
    }

    if (role === 'Engineer') {
      const generateEngineerCard = generateEngineer(employee);
      teamCardArray.push(generateEngineerCard);
    }

    if (role === 'Intern') {
      const generateInternCard = generateIntern(employee);
      teamCardArray.push(generateInternCard);
    }
  }

  const teamMemberCards = teamCardArray.join('');
  console.log(teamMemberCards);

  const generateTeam = generateTeamHTML(teamMemberCards);
  console.log(generateTeam);
  return generateTeam;
};

const generateTeamHTML = (teamMemberCards) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../dist/output.css" />
    <title>Team Profile Generator</title>
  </head>
  <body>
    <header>
      <div class="bg-gradient-to-r from-slate-400 to-slate-900 h-36 py-10">
        <h1 class="text-4xl text-center text-white font-bold">My Team</h1>
      </div>
    </header>
    <section class="">
      <div class="flex justify-center flex-wrap">
      ${teamMemberCards}
      </div>
    </section>
  </body>
</html>
`;
};

module.exports = generateHTML;
