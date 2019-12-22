'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const arr = ip.split('.').map( item => Number(item));
  const shiftedArr = arr.map( (item, i) => {
    for (let j = 3 - i; j > 0 ; j-- ) {
      item = item << 8;
    }
    return item;
  });
  return shiftedArr.reduce((acc, current) => acc += current);
};

module.exports = { ipToInt };
