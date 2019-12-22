'use strict';

const random = (min, max) => {
  const rand = Math.random();
  const mx = max ? max : min;
  const mn = max ? min : 0;

  return Math.floor(rand * (mx + 1) - rand * mn + mn);
};

module.exports = { random };
