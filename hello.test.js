const tape = require('tape');
const hello = require('./hello.js');

tape(function (test) {
  test.equal(hello(), 'Hello Travis CI');
  test.end();
});