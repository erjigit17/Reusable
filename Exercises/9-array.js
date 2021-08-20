'use strict';

const phonebook = [
  {name: 'Marcus Aurelius', phone: '+380445554433' },
  {name: 'Fidel Castro', phone: '+980435554433' },
  {name: 'Timur Yakovlev', phone: '+480435554033' },
]
const findPhoneByName = (name) => {
  for (const user of phonebook) {
    if (user.name === name) return user.phone;
  }
}

module.exports = { phonebook, findPhoneByName };


