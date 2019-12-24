'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const f = (c, i) => {while(i) {c = c << 8; i--} return c};
  return ip.split('.').reduce((a, c, i) => a += f(+c, 3-i), 0)
};

console.log(ipToInt());

module.exports = { ipToInt };
