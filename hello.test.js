const assert = require('assert');
const hello = require('./hello.js');

const test = () => {
  assert(hello() == 'Hello Travis CI', 'Module hello.js work not correct')
};

test();