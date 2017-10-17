// npm install microtime
const microtime = require('microtime')
const freemail = require('./index');

let times = [];
let i, j, start, end;

// Calculate the median execution time of 1001 tests,
// with each test invoking isFree 100 times
for (i = 0; i < 1001; i ++) {
  start = microtime.now();
  for (j = 0; j < 100; j++) {
    freemail.isFree('foo@mail2jon.com');
  }
  end = microtime.now();
  times.push(end - start);
}

console.log('Median time:', times.sort()[500], 'microseconds');
