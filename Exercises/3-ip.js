'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const fn = (cur, i) => {while(i) {cur = cur << 8; i--} return cur};
  return ip.split('.').reverse().reduce((acc, c, i) => acc += fn(+c, i), 0)
};

console.log(ipToInt());

module.exports = { ipToInt };
