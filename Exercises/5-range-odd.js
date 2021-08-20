'use strict';


const rangeOdd = (start, end) => {
  let array = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 1 || i % 2 === -1) {
      array.push(i);
    }
  }
  return array;
}

module.exports = { rangeOdd };
