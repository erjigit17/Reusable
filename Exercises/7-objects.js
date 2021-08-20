'use strict';

const fn = ()=> {
  const objConst = { name: 'Erji' };
  let objVar = { name: 'ErjiVar' };

  objConst.name = 'Imamov';
  objVar.name = 'ImamovVar';

  objVar = { job: 'home' };
}

module.exports = { fn };

