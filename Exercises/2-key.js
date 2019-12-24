'use strict';

const generateKey = (length, possible) => {
  //01234567890123456789
  let str = '';
  for (str = ''; str.length < length; ) {
    const index = Math.floor(Math.random() * length);
    str = str + possible[index];
  }
  return str;
};

module.exports = { generateKey };
