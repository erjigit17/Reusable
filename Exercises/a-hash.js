'use strict';


const phonebook = {
  'Marcus Aurelius': '+380445554433' ,
  'Fidel Castro': '+980435554433' ,
  'Timur Yakovlev': '+480435554033' ,
}

const findPhoneByName = name => phonebook[name]

module.exports = { phonebook, findPhoneByName };
