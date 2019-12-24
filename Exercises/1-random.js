'use strict';

const random = (min, max) => {
  const r = Math.random();
  max = max || min;
  min = max ? min : 0;

  return Math.floor(r * (max + 1) - r * max + min);
};

module.exports = { random };
