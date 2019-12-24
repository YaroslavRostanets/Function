'use strict';

const ipToInt = (ip = '127.0.0.1') => (
  ip.split('.').map( item => Number(item))
    .map( (item, i) => {
      for (let j = 3 - i; j > 0 ; j-- ) {
        item = item << 8;
      }
      return item;
    })
    .reduce((acc, cur) => acc += cur);
);

module.exports = { ipToInt };
