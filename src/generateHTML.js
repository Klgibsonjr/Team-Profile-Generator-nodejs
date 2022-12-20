const managerHTML = function (manager) {
  return `
<div
          class="border-2 border-slate-600 rounded-md gap-4 mx-4 my-4 shadow-xl w-[250px] h-[275px]">
          <div
            class="flex flex-col bg-gradient-to-l from-slate-400 to-slate-700">
            <h2 class="text-white ml-4 p-2">${manager.name}</h2>
            <h3 class="text-white ml-4 p-2">${manager.getRole()}</h3>
          </div>
          <div>
            <ul
              class="border-2 border-slate-300 divide-y divide-solid rounded-md mx-2 my-8">
              <li class="mx-4 p-2 text-xs md:text-sm lg:text-md">ID: ${
                manager.id
              }</li>
              <li class="mx-4 p-2 text-xs md:text-sm lg:text-md">Email: ${
                manager.email
              }</li>
              <li class="mx-4 p-2 text-xs md:text-sm lg:text-md">
                Office Number: ${manager.officeNum}
              </li>
            </ul>
          </div>
        </div>`;
};
