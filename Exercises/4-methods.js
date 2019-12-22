'use strict';

const methods = iface => {
  return Object.keys(iface).reduce((acc, key) => {
    if (typeof iface[key] === 'function') {
      acc.push([key, iface[key].length]);
    }
    return acc;
  }, []);
};

module.exports = { methods };
