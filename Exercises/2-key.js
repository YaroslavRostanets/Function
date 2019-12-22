'use strict';

const generateKey = (length, possible) => {
  let str = '';
  for (str = ''; str.length < length; str += possible[Math.floor(Math.random() * length)]) {
  }
  return str;
};

module.exports = { generateKey };
